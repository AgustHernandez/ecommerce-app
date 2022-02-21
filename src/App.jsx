import './App.css';
import HeroSection from './components/heroSection/HeroSection';
import MsjBienvenida from './components/msjBienvenida/MsjBienvenida';
import NavBar from './components/navBar/NavBar';


function App() {
  
  return (
    <div className='body'>
        <NavBar/>
        <HeroSection MsjBienvenida={MsjBienvenida}/>
    </div>
  );
}

export default App;
