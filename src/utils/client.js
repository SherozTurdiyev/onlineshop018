import axios from "axios";

const baseUrl = "https://dummyjson.com"

const client = axios.create({
    baseURL: baseUrl, 
    headers: { 'Content-Type': 'application/json' },
})
export {baseUrl}
export default client

// axios.get({
//    url: baseUrl  + "/products"
// })
