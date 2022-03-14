export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageUrl: string;
  urls: { label: string; url: string }[];
};

export type ProjectRaw = Omit<Project, 'imageUrl'> & {
  image_url: string;
};

export type DiscordEmbed = {
  type: 'rich';
  title?: string;
  description?: string;
  color: number;
  fields: DiscordEmbedField[];
};

export type DiscordEmbedField = {
  name: string;
  value: string;
};

export type DiscordMessage = {
  channel_id: string;
  tts: false;
  embeds: DiscordEmbed[];
};
