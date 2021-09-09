import axios from "axios";
import { getSearchURL } from "../api";

export const searchGames = (game) => async (dispatch) => {
    const searched = await axios.get(getSearchURL(game));
    dispatch({
        type: "games/search",
        payload: {
            searched: searched.data.results
        }
    });
}