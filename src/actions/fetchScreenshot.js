import axios from "axios";
import { getScreenshotURL } from "../api";

export const fetchScreenshot = (id) => async (dispatch) => {
    const screens = await axios.get(getScreenshotURL(id));

    dispatch({
        type: "game/screenshots",
        payload: {
            data: screens.data
        }
    })
}