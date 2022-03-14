import { NextApiRequest, NextApiResponse } from 'next';

import { messageBuilder } from '../../libs/messageBuilder';
import { api } from '../../services/api';

type ContactInput = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'POST') {
    response.status(405).end();
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

    const { data } = await api.post(`/channels/${channelId}/messages`, messageData);

    console.log(data);

    response.status(201).json({ message: 'message sent' });
    return;
  } catch (error) {
    if (error.response) {
      console.error(error.message);
      console.error(error.response.data.errors.embeds[0].fields[2]._errors);
    }
    response.status(500).json({ error: 'internal server error' });
    return;
  }
}
