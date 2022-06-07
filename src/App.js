import './App.css';
import Navbar from './components/Navbar';
import Logo from './images/PokeZappts_logo.png'

function App() {
  return (
    <div className="App">
      <header className='menu'>
        <div className='logo'>
          <img 
            src= { Logo }
            alt='logo pokezappts'
          ></img>
        </div>
        <Navbar />
      </header>
      <div className='main'>
        <div className='center'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
