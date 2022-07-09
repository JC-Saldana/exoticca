/* import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom"
import "./styles.scss"
 */
import { Card as MaterialCard } from '@mui/material';


import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import styled from "styled-components"
import "./styles.scss"

interface Props {
    card: any;
}

export const CardContent = styled.button`
    background: white;
    border-radius: 18px;
    border: none;
    padding: 0px;
    display: flex column;
`

export default function Card({ card }: Props) {
    const { id, destination, days, title, priceDetail: { fromPriceBeautify, oldPriceBeautify, pricingPercentage }, images } = card
    console.log("card", card)
    return (
        <MaterialCard className='card-container'>
            <CardContent>
                <div className="image-container">
                    <img src={images[0].desktop} />
                    <Typography className="destination" variant="body1" component="h6">
                        {destination}
                    </Typography>
                    <Typography className="days" variant="body2" component="h6">
                        {days} Days
                    </Typography>
                    <Typography className="percentage" variant="body2" component="h6">
                        -<strong>{pricingPercentage}</strong>%
                    </Typography>
                </div>
                <div className="card-footer">
                    <p className="title">{title}</p>
                    <p className="title">
                        From <s><strong className='from'>{oldPriceBeautify}</strong></s> <strong className="actual-price">{fromPriceBeautify}</strong>
                    </p>
                </div>
                {/* <Link to={`/DetailedCharacter/${id}`} style={{ textDecoration: "none", color: "black" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={`${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`}
                            alt="img"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Series: {series.available}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Stories: {stories.available}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link> */}
            </CardContent>
        </MaterialCard>

    )
}