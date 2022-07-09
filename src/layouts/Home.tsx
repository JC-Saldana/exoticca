
import { useEffect, useState } from "react";
import CountrySelect from "./CountrySelect";
import Cards from "./Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../actions/cards";
import { AppDispatch, RootState } from "../main";
import { Container } from "@mui/material";
import "./animations.scss"
import "./styles.scss"

export default function Home() {

    const [country, setCountry] = useState("us")
    const { isLoading, cardsData } = useSelector((state: RootState) => state.cards)
    const [cards, setCards] = useState({ cardsData: [], topSales: {topSales: {cards: []}}})

    // Fetch Cards
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getCards())
    }, [])

    useEffect(() => {
        setCards(cardsData[country])
        console.log("cards..", cardsData[country])
    }, [cardsData, country])


    useEffect(() => {
        console.log("here", cards)
    }, [cards])

    return (
        <Container maxWidth="xl" className="container">
            <CountrySelect country={country} setCountry={setCountry} />
            <Cards cards={cards.topSales.cards} isLoading={isLoading} />
        </Container>
    )
}