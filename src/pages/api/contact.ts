import { randomUUID } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

import { messageBuilder } from '../../libs/messageBuilder';
import { RateLimit } from '../../libs/rateLimit';
import { discordApi } from '../../services/apis';

type ContactInput = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const rateLimit = new RateLimit({
  interval: 60_000, // 1 minute
  uniqueTokenPerInterval: 500,
  limit: 1,
});

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'POST') {
    response.status(405).end();
    return;
  }

  let userTraceId = request.cookies.userTraceId;

  if (!userTraceId) {
    userTraceId = randomUUID();

    response.setHeader(
      'Set-Cookie',
      serialize('userTraceId', userTraceId, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      })
    );
  }

  const limitResult = await rateLimit.check(userTraceId);

  response.setHeader('X-RateLimit-Limit', String(rateLimit.limit));
  response.setHeader('X-RateLimit-Remaining', String(limitResult));

  if (limitResult === 0) {
    response.status(429).json({ error: 'Too many requests' });
    return;
  }

  const { name, subject, email, message } = request.body as ContactInput;

  if (!name.trim() || !subject.trim() || !message.trim()) {
    response.status(400).json({ error: 'name and message are required' });
    return;
  }

  const channelId = process.env.DISCORD_CHANNEL_ID;

  if (!channelId) {
    response.status(500).json({ error: 'DISCORD_CHANNEL_ID is not set' });
    return;
  }

  try {
    const messageData = messageBuilder(name, subject, message, email);

    await discordApi.post(`/channels/${channelId}/messages`, messageData);

    response.status(201).json({ message: 'message sent' });
  } catch (error) {
    console.error(error.message);

    if (error.response) {
      console.error(error.response.data);
    }

    response.status(500).json({ error: 'internal server error' });
  }
}
