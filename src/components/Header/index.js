import './header.css'
import { Link } from 'react-router-dom'

function Header () {
    return (
        <header>
            <Link to='/' className='logo'> Prime Flix </Link> 
            <Link to='/favorites' className='favoritos'> Meus Filmes </Link>
        </header>
    )
}

export default Header;