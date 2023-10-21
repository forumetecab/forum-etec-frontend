import axios from "axios";

const api = axios.create({
  baseURL: "https://quaint-dog-uniform.cyclic.app",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
})

export default api
