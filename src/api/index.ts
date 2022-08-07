import axios from "axios"

export const fetchCards = (country: string) => {
    const API = axios.create({ baseURL: `https://api-${country}.exoticca.com/api/home` })
    let URL = ``
    return API.get(URL)
}