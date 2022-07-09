import { END_LOADING, FETCH_ALL, START_LOADING } from "../constants/actionTypes";
import { fetchCards } from "../api";
import us from "../mocks/us.json"
import uk from "../mocks/uk.json"
import ca from "../mocks/ca.json"

export const getCards = () => async (dispatch: any) => {
    try {
        dispatch({ type: START_LOADING })
        // fetch info should be retrieved here, but mocked info was used instead
        //const { data } = await fetchCards();
        const data = {
            us: {
                cardsData: us.slides,
                topSales: us.topSales
            },
            uk: {
                cardsData: uk.slides,
                topSales: uk.topSales
            },
            ca: {
                cardsData: ca.slides,
                topSales: ca.topSales
            }
        }
        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}