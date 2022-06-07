import '../App.css';

function Navbar() {
    return (
        <nav className='menu-pages'>
            <ul>
                <li>
                    <a href='./Home.js'>Home</a>
                </li>
                <li>
                    <a href='./Pokemons.js'>Pokemons</a>
                </li>
                <li>
                    <a href='./Contato.js'>Contato</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;