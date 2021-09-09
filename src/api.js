import date from "date-and-time";

const currentDate = date.format(new Date(), 'YYYY-MM-DD');
const lastYear = date.format(date.addYears(new Date(), -1), 'YYYY-01-01');
const nextYear = date.format(date.addYears(new Date(), +1), 'YYYY-01-01');
const currentYear = date.format(new Date(), 'YYYY-01-01');

//Base URL
const baseURL = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page=1&page_size=10`;

const upcomingGames = `${baseURL}&dates=${currentDate},${nextYear}&ordering=-added`;
const popularGames = `${baseURL}&dates=${lastYear},${currentDate}&ordering=-rating`;
const newGames = `${baseURL}&dates=${currentYear},${currentDate}&ordering=-released`;

export const getGamesURL = (type) => {
    switch (type) {
        case "upcoming":
            return `${upcomingGames}`;
        case "popular":
            return `${popularGames}`;
        case "new":
            return `${newGames}`;
        default:
            return baseURL;
    }
}

export const getGameDetailsURL = (id) => `https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_API_KEY}`;

export const getScreenshotURL = (id) => `https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;

export const getSearchURL = (search) => `${baseURL}&search=${search}`;