import '../App.css';
import Logo from '../images/PokeZappts_logo.png'

function Navbar() {
    return (
        <><header className='menu'>
            <div className='logo'>
                <img
                    src={Logo}
                    alt='logo pokezappts'
                ></img>
            </div>
                <nav className='menu-pages'>
                    <ul>
                        <li>
                            <a href='../pages/Home.js'>Home</a>
                        </li>
                        <li>
                            <a href='../pages/Pokemons.js'>Pokemons</a>
                        </li>
                        <li>
                            <a href='../pages/Contato.js'>Contato</a>
                        </li>
                    </ul>
                </nav>
            </header></>
    );
}

export default Navbar;