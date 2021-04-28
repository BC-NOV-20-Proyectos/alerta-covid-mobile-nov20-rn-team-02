const getFixedDate = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let fullDate = '';
  if (month < 10 && day < 10) {
    fullDate = `0${month}/0${day}/${year}`;
  } else if (month < 10 && day >= 10) {
    fullDate = `0${month}/${day}/${year}`;
  } else if (month >= 10 && day < 10) {
    fullDate = `${month}/0${day}/${year}`;
  } else {
    fullDate = `${month}/${day}/${year}`;
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
  if (month < 10 && day < 10) {
    fullDate = `0${month}/0${day}/${year}`;
  } else if (month < 10 && day >= 10) {
    fullDate = `0${month}/${day}/${year}`;
  } else if (month >= 10 && day < 10) {
    fullDate = `${month}/0${day}/${year}`;
  } else {
    fullDate = `${month}/${day}/${year}`;
  }
  return fullDate;
};

export const MainFunctions = {
  getFixedDate,
  getFixedTime,
  fixedDate,
};
