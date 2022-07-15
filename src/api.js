//Base Url
const api_key = "52a5c06082b34bec9c6a2167230eec78";
const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDate = () => {
  const date = new Date().getDate();
  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};

const getCurrentYear = () => {
  const year = new Date().getFullYear();
  return year;
};

const currentMonth = getCurrentMonth();
const currentDate = getCurrentDate();
const currentYear = getCurrentYear();
const todayDate = `${currentYear}-${currentMonth}-${currentDate}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDate}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDate}`;

const popularGames = `games?key=${api_key}&dates=${lastYear},${todayDate}&ordering=-rating&page_size=20`;
const upcomingGames = `games?key=${api_key}&dates=${todayDate},${nextYear}&orderding=-added&page_size=20`;
const newGames = `games?key=${api_key}&dates=${lastYear},${todayDate}&orderding=-released&page_size=20`;

export const popularGamesUrl = () => `${base_url}${popularGames}`;
export const upcomingGamesUrl = () => `${base_url}${upcomingGames}`;
export const newGamesUrl = () => `${base_url}${newGames}`;

export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}.json?&key=${api_key}`;

export const gameScreenshotUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&key=${api_key}`;
