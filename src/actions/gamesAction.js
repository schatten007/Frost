import axios from "axios";
import { getGamesURL } from "../api";

export const fetchGames = () => async (dispatch) => {
    const upcomingGames = await axios.get(getGamesURL("upcoming"));
    const newGames = await axios.get(getGamesURL("new"));
    const popularGames = await axios.get(getGamesURL("popular"));

    dispatch({
        type: "games/fetch",
        payload: {
            upcoming: upcomingGames.data.results,
            popular: popularGames.data.results,
            new: newGames.data.results
        }
    });
}