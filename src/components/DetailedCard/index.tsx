import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useParams } from "react-router-dom"
import { Button, Typography } from "@mui/material"
import "./styles.scss"
export default function DetailedCard() {
    const { id, title, destination } = useParams()
    console.log("title", title)
    return (
        <>
            <div className="detailed-card">


                <Typography gutterBottom variant="h4" className="header">
                    {title}
                    <Button variant="contained" component={Link} to="/" startIcon={<ArrowBackIosIcon />}>
                        Back
                    </Button>
                </Typography>
                <p>{destination}</p>
                <p><sub>{id}</sub></p>
            </div>
        </>
    )
}