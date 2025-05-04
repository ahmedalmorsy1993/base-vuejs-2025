/**
 * Environment configuration
 * 
 * This file centralizes all environment variables and provides
 * type safety and default values.
 */

interface EnvConfig {
  baseUrl: string;
  nodeEnv: string;
  isDevelopment: boolean;
  isProduction: boolean;
}

export const env: EnvConfig = {
  baseUrl: import.meta.env.VITE_BASE_URL as string || 'https://jsonplaceholder.typicode.com',
  nodeEnv: import.meta.env.MODE || 'development',
  isDevelopment: import.meta.env.MODE === 'development',
  isProduction: import.meta.env.MODE === 'production',
};

export default env;
