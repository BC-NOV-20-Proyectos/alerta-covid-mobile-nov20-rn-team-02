const getFixedDate = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let fullDate = '';
  if (month < 10) {
    fullDate = `${day}/0${month}/${year}`;
  } else {
    fullDate = `${day}/0${month}/${year}`;
  }
  return fullDate;
};

const getFixedTime = () => {
  let today = new Date();
  let time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  return time;
};

const fixedDate = (dateP) => {
  let date = dateP;
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let fullDate = '';
  if (month < 10) {
    fullDate = `${day}/0${month}/${year}`;
  } else {
    fullDate = `${day}/0${month}/${year}`;
  }
  return fullDate;
};

export const MainFunctions = {
  getFixedDate,
  getFixedTime,
  fixedDate,
};
