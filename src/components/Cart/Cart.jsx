import { useCartContext } from "../../context/cartContext"

function Cart() {
  const { cartList } = useCartContext()

  return (
    <div>
      
      { cartList.map(prod => <li> {prod.nombre} {prod.precio} </li>) }

    </div>
  )
}

export default Cart