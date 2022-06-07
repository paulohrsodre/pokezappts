import '../App.css';
import Logo from '../images/PokeZappts_logo.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className='menu'>
            <div className='content'>
                <div>
                    <img
                        src={Logo}
                        alt='logo pokezappts'
                    ></img>
                </div>
                <nav className='menu-pages'>                          
                    <Link to='/'>Home</Link>
                    <Link to='pokemons'>Pokemons</Link>
                    <Link to='contato'>Contato</Link>
                </nav>
            </div>    
        </header>
    );
}

