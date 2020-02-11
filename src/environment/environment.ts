export const hostname = process.env.HOST || 'localhost';
export const port = process.env.PORT || '3000';

export const environment = {
  production: false,
  apiUrl: `http://${hostname}:${port}/`,
};
