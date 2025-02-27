import axios from "axios"

const baseURL = import.meta.env.VITE_SIGNUP_URL

export const client = axios.create({
    baseURL,
})