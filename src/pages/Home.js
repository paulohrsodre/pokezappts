import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>          
            <h1>Qual Pokemon você escolheria?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin sed nisi dui. Donec at neque sollicitudin, aliquet 
                lorem et, luctus nulla. Nam vestibulum in dui sit amet 
                egestas. Integer a iaculis orci, in euismod elit. 
                Aliquam pretium ex lectus, ut ultricies lacus congue eget. 
                Vivamus volutpat urna nec nisl laoreet pulvinar. 
                Aenean mi tellus, tristique id ornare quis, 
                molestie sed velit. Fusce sit amet porttitor diam, 
                a ullamcorper massa. Nam eget aliquam elit. 
                Pellentesque tellus lectus, mattis eu nunc quis, 
                feugiat pellentesque erat. Phasellus vehicula eros vitae 
                consequat tincidunt. Pellentesque habitant morbi tristique 
                senectus et netus et malesuada fames ac turpis egestas. 
                In hac habitasse platea dictumst. Sed et arcu urna.</p>

                <button onClick={() => navigate('/pokemons')}>
                    Veja os Pokemons
                </button>
        </div>

        
        
    );
}