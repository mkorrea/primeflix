import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'
import './home.css'

function Home () {
    const [ movie, setmovie ] = useState([]);
    const [ loading, setLoading ] = useState(true)

    useEffect( () => {

        async function loadMovies() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: '9506b5a090386e5ff12c1d1300fb977f',
                    language: 'pt-BR',
                    page: 1
                }
            })
            setmovie(response.data.results.slice(0, 10));
        }

        loadMovies()
        setLoading(false)
    }, [])


    if(loading) {
        return(
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='movie-list'>
                {movie.map( (movie) => {
                    return(
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`/movie/${movie.id}`}>
                                Acessar
                            </Link>
                        </article>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Home;