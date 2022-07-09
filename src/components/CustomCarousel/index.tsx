
interface Props {
    children: any;
}

import { Carousel } from "@trendyol-js/react-carousel"
import "./styles.scss"

export default function CustomCarousel({ children }: Props) {

    const rightArrow = (
        <button className="arrow">
            {`>`}
        </button>
    )

    return (
        <Carousel
            show={3.5}
            slide={1}
            transition={0.8}
            swiping={true}
            dynamic={true}
            leftArrow={rightArrow}
            rightArrow={rightArrow}>
            {children}
        </Carousel>
    )
}