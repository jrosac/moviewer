import axios from "axios"
// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=ba68f6fb3af7683cd59f5d676ecb54be

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;