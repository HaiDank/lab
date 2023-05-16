import logo from './logo.svg';
import './App.css';
import Navigation from './components/header/Navigation';
import Footer from './components/footer/Footer'
import Player from './components/content/Player';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Player/>
      <Footer/>
    </div>
  );
}

export default App;
