import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ItemDetailContainer from './components/Containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Containers/ItemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import Cart from './components/Cart/Cart';

import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <div className='body'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

