import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HeroSection from './components/heroSection/HeroSection';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MsjBienvenida from './components/msjBienvenida/MsjBienvenida';
import NavBar from './components/navBar/NavBar';
import Cart from './components/Cart/Cart';

import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <div className='body'>
        <NavBar/>
        <HeroSection MsjBienvenida={MsjBienvenida}/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
