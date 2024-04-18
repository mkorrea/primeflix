import './favorites.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Favorites() {
   const [ movies, setMovies ] = useState([])
   
   useEffect( () => {
      const myList = localStorage.getItem("@primeflix")

      setMovies(JSON.parse(myList) || [])
   }, [])


   function excluirFilme(id) {
      let novosFilmes = movies.filter( (item) => {
         return (item.id !== id)
      })

      setMovies(novosFilmes)
      localStorage.setItem('@primeflix', JSON.stringify(novosFilmes))
      toast.success('Filme removido!')
   }

   return(
      <div className='meus-favoritos'>
         <h1>Meus Favoritos</h1>

         { movies.length === 0 && <span> Você não possui nenhum filme salvo! </span> }

         <ul>
            {movies.map( (item) => {
               return(
                  <li key={item.id}>
                     <span>{item.title}</span>

                     <div>
                        <Link to={`/movie/${item.id}`}>Ver detalhes</Link>
                        <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                     </div>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default Favorites;