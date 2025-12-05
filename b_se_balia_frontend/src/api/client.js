import axios from 'axios';
import { getMockApi } from './mock';

const LOG_LEVEL = process.env.REACT_APP_LOG_LEVEL || 'warn';
const API_BASE = process.env.REACT_APP_API_BASE || '';
const FEATURE_FLAGS = (process.env.REACT_APP_FEATURE_FLAGS || '').toLowerCase();

const isMockEnabled = FEATURE_FLAGS.includes('mockapi=true') || !API_BASE;

/**
 * PUBLIC_INTERFACE
 * getApi returns either an axios client or a mock API shim depending on feature flags.
 */
export function getApi() {
  if (isMockEnabled) {
    if (LOG_LEVEL === 'debug') console.debug('[api] Using mock API');
    return getMockApi();
  }

  const client = axios.create({
    baseURL: API_BASE,
    timeout: 12000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  client.interceptors.response.use(
    (res) => res,
    (error) => {
      const norm = {
        message: error?.response?.data?.message || error.message || 'Network error',
        status: error?.response?.status || 0,
        url: error?.config?.url,
      };
      if (LOG_LEVEL !== 'silent') console.error('[api:error]', norm);
      return Promise.reject(norm);
    }
  );

  if (LOG_LEVEL === 'debug') {
    client.interceptors.request.use((config) => {
      console.debug('[api:request]', config.method?.toUpperCase(), config.url, config.params || config.data || {});
      return config;
    });
    client.interceptors.response.use((res) => {
      console.debug('[api:response]', res.status, res.config.url);
      return res;
    });
  }

  return client;
}
