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

      <h3> {total} </h3>

      <button onClick={ () => vaciarCarrito() }>
        Vaciar carrito
      </button>
    </div>
  )
}

export default Cart