import axios from "axios"
const baseURL = "https://sujeitoprogramador.com/next-api/"

const api = axios.create({baseURL})

export default api;
