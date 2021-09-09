import axios from "axios";
import { getGameDetailsURL } from "../api";

export const fetchDetails = (id) => async (dispatch) => {

    dispatch({
        type: "game/loading"
    });

    const details = await axios.get(getGameDetailsURL(id));

    dispatch({
        type: "game/details",
        payload: {
            details: details.data
        }
    });
}