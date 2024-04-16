import axios from 'axios'

// api: https://api.themoviedb.org/3/movie/now_playing?api_key=9506b5a090386e5ff12c1d1300fb977f


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;