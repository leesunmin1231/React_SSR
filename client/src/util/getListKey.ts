export const getListKey = () => {
  const time = new Date();
  return String(time.getTime());
};
