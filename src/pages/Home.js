import { useNavigate } from 'react-router-dom';
import Painel from '../images/pikachu-painel.png'

export default function Home() {
    const navigate = useNavigate();

    return (
        <main className='home'>
            <aside className='menu-lateral'>
                <h1>Qual Pokemon você <span>escolheria</span>?</h1>
                <p>Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades</p>
                <button onClick={() => navigate('/pokemons')}>
                    Veja os Pokemons
                </button>           
            </aside>          
            <section className='painel'>
                <img alt="painel pikachu" src={Painel}/>
            </section>
        </main>      
    );
}