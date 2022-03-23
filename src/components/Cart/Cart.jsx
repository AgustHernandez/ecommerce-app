import { useCartContext } from "../../context/cartContext"
import CartItem from "../cartItem/CartItem"

function Cart() {
  const { cartList, vaciarCart } = useCartContext()

  const vaciarCarrito = () => {
    vaciarCart()
  }

  return (
    <div>
      
      { cartList.map(producto => <CartItem key={producto.id} producto={producto} />) 
      }

      <button onClick={ () => vaciarCarrito() }>
        Vaciar carrito
      </button>

    </div>
  )
}

export default Cart