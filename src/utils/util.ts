export const getDate = (date: string) => {
  const dt = new Date(date);
  return dt.toDateString();
};
