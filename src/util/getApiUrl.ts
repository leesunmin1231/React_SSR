export const getApiUrl = (path: string) => {
  if (process.env.NODE_ENV === 'production') {
    return `http://localhost:8080${path}`;
  }
  return path;
};
