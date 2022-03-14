import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.DISCORD_API_URL,
  headers: {
    Authorization: 'Bot ' + process.env.DISCORD_TOKEN,
  },
});
