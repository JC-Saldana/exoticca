import { CircularProgress, Grid, Typography } from "@mui/material"
import { CardInterface } from "../../interfaces/card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../main";
import Card from "../../components/Card";
import { Container } from "@mui/system";
import CustomCarousel from "../../components/CustomCarousel";
import "./styles.scss"

interface Props {
    country: string;
}

export default function Cards({ country }: Props) {

    const { isLoading, cardsData } = useSelector((state: RootState) => state.cards)
    const [cards, setCards] = useState({ cardsData: [], topSales: [] })

    //const matches = useMediaQuery("(min-width:1200px)")

    useEffect(() => {
        setCards(cardsData[country])
    }, [cardsData, country])

    useEffect(() => {
        console.log("cards", cards)
    }, [cards])

    return (
        <Container maxWidth="xl">
            <div className="cards-container">
                <Typography variant="h3" component="h3" color={"#fff"}>
                    TopSales {country}
                </Typography>
                {(!isLoading && cards?.cardsData[0]?.cards) ?
                    <CustomCarousel>
                        {cards.cardsData[0].cards.map((card: CardInterface, i: number) => (
                            <Grid key={card.id} item xs={6} sm={4} md={3}>
                                <Card card={card} />
                            </Grid>
                        ))}
                    </CustomCarousel>
                    :
                    <CircularProgress />
                }
            </div>
        </Container>
    )
}