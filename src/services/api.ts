import axios from "axios";

const api = axios.create({
  baseURL: "https://lazy-plum-cockatoo-wig.cyclic.cloud",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
})

export default api
