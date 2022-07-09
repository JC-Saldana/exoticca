import axios from "axios"

const API = axios.create({ baseURL: `https://api-us.exoticca.com/api/home/` })

export const fetchCards = () => {
    let URL = ``
    return API.get(URL)
}