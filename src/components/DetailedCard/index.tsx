import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useParams } from "react-router-dom"
import { Button, Typography } from "@mui/material"
import "./styles.scss"
import { useSelector } from 'react-redux';
import { RootState } from '../../main';
import { useEffect, useState } from 'react';
import Cards from '../../layouts/Cards/Cards';
import { Container } from '@mui/system';
export default function DetailedCard() {

    const { id, title, destination } = useParams()
    const { isLoading, cardsData } = useSelector((state: RootState) => state.cards)
    const [suggestedCards, setSuggestedCards] = useState([])

    useEffect(() => {
        const filteredCards: any = [
            ...cardsData.ca.cardsData[0].cards,
            ...cardsData.ca.topSales.cards,
            ...cardsData.uk.cardsData[0].cards,
            ...cardsData.uk.topSales.cards,
            ...cardsData.us.cardsData[0].cards,
            ...cardsData.us.topSales.cards,
        ].filter(card => card.destination.includes(destination))
        setSuggestedCards(filteredCards)
    }, [id, cardsData])

    return (
        <Container maxWidth="xl" className="detailed-card">
            <Typography gutterBottom variant="h4" className="header">
                {title}
                <Button variant="contained" component={Link} to="/" startIcon={<ArrowBackIosIcon />}>
                    Back
                </Button>
            </Typography>
            <p>{destination}</p>
            <p><sub>Id: {id}</sub></p>
            <h3>Offers with same destination: </h3>
            {suggestedCards.length ? <Cards cards={suggestedCards} isLoading={isLoading} /> :
                <h5>No cards with same destination</h5>}
        </Container>
    )
}