
import { useEffect, useState } from "react";
import CountrySelect from "./CountrySelect";
import Cards from "./Cards/Cards";
import { useDispatch } from "react-redux";
import { getCards } from "../actions/cards";
import { AppDispatch } from "../main";
import { Container } from "@mui/material";

export default function Home() {

    const [country, setCountry] = useState("us")

    // Fetch Cards
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getCards())
    }, [])

    return (
        <Container maxWidth="xl">
            <CountrySelect country={country} setCountry={setCountry} />
            <Cards country={country} />
        </Container>
    )
}