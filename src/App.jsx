import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Cart from './components/Cart/Cart';
import CartContextProvider from './context/cartContext';
import Footer from './components/footer/Footer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import LandingListContainer from './containers/LandingListContainer/LandingListContainer'
import NavBar from './components/navBar/NavBar';

function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className='body'>
          <NavBar />
          <Routes>
            <Route path='/' element={<LandingListContainer />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/cart/pago' element={<Cart />} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

