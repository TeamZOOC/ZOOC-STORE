export const formatDate = (date: Date | string) => {
  const currentDate = new Date(date);

  const year = currentDate.getFullYear().toString().substr(-2);
  const month = `0${currentDate.getMonth() + 1}`.slice(-2);
  const day = `0${currentDate.getDate()}`.slice(-2);

  return `${year}.${month}.${day}`;
};
