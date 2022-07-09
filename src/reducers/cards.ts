
import { END_LOADING, FETCH_ALL, START_LOADING } from "../constants/actionTypes"

const cardsReducer = (state = { isLoading: true, cardsData: [] }, action: any) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case FETCH_ALL:
            return { ...state, cardsData: action.payload }
        default:
            return state
    }
}

export default cardsReducer