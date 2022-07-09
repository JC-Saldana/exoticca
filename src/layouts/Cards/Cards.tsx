import { CircularProgress } from "@mui/material"
import { CardInterface } from "../../interfaces/card";
import Card from "../../components/Card";
import CustomCarousel from "../../components/CustomCarousel";

interface Props {
    cards: [];
    isLoading: boolean;
}

export default function Cards({ cards, isLoading }: Props) {

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