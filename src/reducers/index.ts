import charactersReducer from "./cards";
import { combineReducers } from "redux";
import cardsReducer from "./cards";

const allReducers = combineReducers({
    cards: cardsReducer
})

export default allReducers