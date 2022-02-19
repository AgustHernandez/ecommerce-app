import './App.css';
import HeroSection from './components/heroSection/HeroSection';
import NavBar from './components/navBar/NavBar';

function App() {
  
  return (
    <div className='body'>
      <header>
        <NavBar/>
        <HeroSection/>
      </header>
    </div>
  );
}

export default App;
