import './App.css';
import Navbar from './components/Navbar';
import RouterApp from './routes'
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <RouterApp />
    </Router>
  );
}

export default App;
