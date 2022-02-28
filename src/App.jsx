import './App.css';
import HeroSection from './components/heroSection/HeroSection';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MsjBienvenida from './components/msjBienvenida/MsjBienvenida';
import NavBar from './components/navBar/NavBar';


function App() {
  
  return (
    <div className='body'>
        <NavBar/>
        <HeroSection MsjBienvenida={MsjBienvenida}/>
        <ItemListContainer/>
        <ItemCount />
    </div>
  );
}

export default App;
