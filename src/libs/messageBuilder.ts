import { DiscordEmbedField, DiscordMessage } from '../typings';

export function messageBuilder(
  name: string,
  subject: string,
  message: string,
  email?: string
): DiscordMessage {
  const fields: DiscordEmbedField[] = [];

  fields.push({
    name: ':bust_in_silhouette: Como devo me referir',
    value: name.trim(),
  });

  fields.push({
    name: ':file_folder: Assunto da mensagem',
    value: subject.trim(),
  });

  if (email && email.trim())
    fields.push({
      name: ':label: Email para contato',
      value: email.trim(),
    });

  fields.push({
    name: ':page_facing_up: Mensagem',
    value: message.trim(),
  });

  return {
    channel_id: process.env.DISCORD_CHANNEL_ID,
    tts: false,
    embeds: [
      {
        type: 'rich',
        title: `Mensagem do portfolio`,
        description: `Mensagens enviadas pelo formulário de contato do portfolio`,
        color: 0x22d3ee,
        fields,
      },
    ],
  };
}
