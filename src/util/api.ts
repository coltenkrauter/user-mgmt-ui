import axios from 'axios';
import { store } from '../index';

const instance = axios.create({
  responseType: 'json',
});

// This gets called on every axios HTTP request
instance.interceptors.request.use((config) => {
  const state = store.getState();
  config.baseURL = state.settings.API_BASE_URL;
 
  return config;
}, (err) => {
  return Promise.reject(err);
});

export default instance;
