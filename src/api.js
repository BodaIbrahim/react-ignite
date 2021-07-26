//base url and key
const base_url = "https://api.rawg.io/api/";
const apiKey = "?key=85488a3db62a460ab3250cc352877b0e";
const apiKey2 = "?&key=85488a3db62a460ab3250cc352877b0e";

// Get the current month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
//Current day month year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${newGames}`;

export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}${apiKey}`;

export const gameScreenshotUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots${apiKey}`;

//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=8&${apiKey2}`;
