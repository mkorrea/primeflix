import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api'
import './movie_info.css'

function Movie () {
    const { id } = useParams();
    const [ movie, setMovie] = useState({});
    const [ loading, setLoading ] = useState(true);

    useEffect( () => {
        async function loadMovie() {
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: '9506b5a090386e5ff12c1d1300fb977f',
                    language: 'pt-BR',
                }
            })
            .then( (response) => {
                setMovie(response.data)
                setLoading(false)
                //definindo que 'movie' vai ter a api com o id do filme selecionado
            })
            // executa .then caso dê certo
            .catch( () => {
                console.log('desmontou')
            })
            // executa .catch caso de errado
        }
        loadMovie()

        return () => {
            console.log('desmontou')
        }
    }, [])
    
    if(loading) {
        return(
            <div className='loading'>
                <h1> Carregando detalhes... </h1>
            </div>
        )
    }

    return (
        <div className='movie-info'>
            <h1> {movie.title} </h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

            <h3> Sinopse </h3>
            <span> {movie.overview} </span>
            <strong> Avaliação: {movie.vote_average}/10 </strong>

            <section className='area-buttons'>
                <button>Salvar</button>
                <button>
                    <a href='#'>Trailer</a>
                </button>
            </section>
        </div>
    )
}

export default Movie;