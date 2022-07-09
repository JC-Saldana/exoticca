

export interface PriceDetail {
    fromPriceBeauty: number;
    oldPriceBeautify: number;
    pricingPercentaje: number;
}

export interface CardInterface {
    id: number;
    destination: string;
    days: number;
    title: string;
    priceDetail: PriceDetail;
    images: [];
}