import { createContext, useState, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const agregarCart = (Item) => {
        
        if (cartList.find(prod => prod.id === Item.id)) {
            const itemCarrito = cartList.find(prod => prod.id === Item.id)
            itemCarrito.cantidad += Item.cantidad
            const nuevoCartList = cartList.filter(prod => prod.id !== Item.id)
            setCartList([...nuevoCartList, itemCarrito])
            return;
        }
        setCartList([...cartList, Item])
        console.log(cartList)
    }

    const vaciarCart=()=>{
        setCartList([])
    }


    return (
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCart
        }}> 
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider