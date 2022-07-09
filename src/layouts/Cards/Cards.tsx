import { CircularProgress, Grid, Typography } from "@mui/material"
import { CardInterface } from "../../interfaces/card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../main";
import Card from "../../components/Card";
import { Container } from "@mui/system";
import CustomCarousel from "../../components/CustomCarousel";
import { Carousel } from "@trendyol-js/react-carousel";

interface Props {
    cards: [];
    isLoading: boolean;
}

export default function Cards({ cards, isLoading }: Props) {

    //const matches = useMediaQuery("(min-width:1200px)")
    console.log("cardsss", cards)
    return (
        <>
            {(!isLoading && cards) ?
                <CustomCarousel>
                    {cards.map((card: CardInterface, i: number) => (
                        
                            <Card key={card.id} card={card} />
                        
                    ))}
                </CustomCarousel>
                :
                <CircularProgress />
            }
        </>
    )
}