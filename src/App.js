import './App.css';
import Navbar from './components/Navbar';
import RouterApp from './routes'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className='main'>
        <div className='center'>
          <RouterApp />
        </div>
      </div>
    </div>
  );
}

export default App;
