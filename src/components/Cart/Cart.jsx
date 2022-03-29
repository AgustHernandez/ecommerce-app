import './styleCart.css';

import CartItem from "../cartItem/CartItem"
import FormCarrito from '../FormCarrito/FormCarrito';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/cartContext"

function Cart() {
  const { cartList, vaciarCart } = useCartContext()

  const vaciarCarrito = () => {
    vaciarCart()
  }

  return (
    <div className="cart">
      <h2 className="titleCart">CARRITO DE COMPRAS</h2>
      
      {
        cartList.length === 0 && 
        <div>
          <h2 className="textCartVacio"> El carrito está vacio</h2>
          <div className='divBotonLink'>
            <Link to='/productos'>
              <button className="botonLink">Compra aquí !</button>
            </Link>
          </div>
        </div> 
      }

      { cartList.map(producto => <CartItem key={producto.id} producto={producto} />) 

      }

      {
        cartList.length !== 0 && 
        <div className='resumenCompra'>
          <div className='divTotal'>
            <h3 className='titleTotal'>Total:</h3>
            <h4 className="totalCart">$ {cartList.reduce((total, prodvalue) => total = total + (prodvalue.precio*prodvalue.cantidad), 0)} </h4>
          </div>
          <div className='divBotonTotal'>
            <button onClick={ () => vaciarCarrito() } className="botonVaciarCart">
              Vaciar carrito
            </button>
          </div>
        </div>
      }
      <FormCarrito/>
    </div>
  )
}

export default Cart