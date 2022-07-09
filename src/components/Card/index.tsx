/* import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom"
import "./styles.scss"
 */
import { Card as MaterialCard } from '@mui/material';


import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from 'react-router-dom';
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
    const src = images[0].desktop

    return (
        <MaterialCard className='card-container'>
            <CardContent>
                <Link to={`/DetailedCard/${id}/${destination}/${title}`} style={{ textDecoration: "none", color: "black" }}>
                    <div className="image-container">
                        <img src={src} />
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
                </Link>
            </CardContent>
        </MaterialCard >

    )
}