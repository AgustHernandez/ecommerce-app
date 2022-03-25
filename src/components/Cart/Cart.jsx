import CartItem from "../cartItem/CartItem"
import { useCartContext } from "../../context/cartContext"

function Cart() {
  const { cartList, vaciarCart, total } = useCartContext()

  const vaciarCarrito = () => {
    vaciarCart()
  }

  return (
    <div>
      
      { cartList.map(producto => <CartItem key={producto.id} producto={producto} />) 
      }

      <h3> {cartList.reduce((total, prodvalue) => total = total + (prodvalue.precio*prodvalue.cantidad), 0)} </h3>

      <button onClick={ () => vaciarCarrito() }>
        Vaciar carrito
      </button>
    </div>
  )
}

export default Cart