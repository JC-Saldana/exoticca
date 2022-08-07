import { END_LOADING, FETCH_ALL, START_LOADING } from "../constants/actionTypes";
import { fetchCards } from "../api";

export const getCards = (country: string) => async (dispatch: any) => {
    try {
        dispatch({ type: START_LOADING })
        // fetch info should be retrieved here, but mocked info was used instead. CORS access is needed
        const { data } = await fetchCards(country);
        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}