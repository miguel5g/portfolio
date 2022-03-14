import axios from 'axios';

export const discordApi = axios.create({
  baseURL: process.env.DISCORD_API_URL,
  headers: {
    Authorization: 'Bot ' + process.env.DISCORD_TOKEN,
  },
});

export const githubApi = axios.create({
  baseURL: process.env.GITHUB_API_URL,
});
