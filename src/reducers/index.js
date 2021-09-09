import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import { detailReducer } from "./detailReducer";
import { screenshotReducer } from "./screeshotReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer,
    screenshots: screenshotReducer
});

export default rootReducer;