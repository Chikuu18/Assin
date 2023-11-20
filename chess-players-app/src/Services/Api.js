// src/api.js
import axios from 'axios';

const API_URL = 'https://api.lichess.org';

const api = axios.create({
  baseURL: API_URL,
});

export const fetchTopPlayers = () => api.get('/player/top/50');
export const fetchPlayerRatingHistory = (playerId) => api.get(`/player/${playerId}/rating-history`);
