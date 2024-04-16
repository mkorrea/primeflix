import {Link} from 'react-router-dom'

function Error () {
    return(
        <div className='not-found'>
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to='/'> Voltar ao início </Link>
        </div>
    )
}

export default Error;