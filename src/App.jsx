import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Cart from './components/Cart/Cart';
import CartContextProvider from './context/cartContext';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';

function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className='body'>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/cart/pago' element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

