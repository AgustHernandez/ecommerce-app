import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const agregarCart = (item) => {
        if(!isInCart(item.id))
        {
            setCartList([...cartList, item]);
            return;
        }
        let newItem = item;
        let oldItem = cartList.filter((p)=> p.id === item.id)[0]
        newItem.cantidad = Math.min(newItem.cantidad + oldItem.cantidad, item.stock) ;
        let newCartList = cartList.filter((p)=> p.id !== item.id)
        setCartList([...newCartList, newItem])
    }

    const isInCart = (id) => {
        return cartList.some((prod) => prod.id === id)
    }


    const vaciarCart = () => {
        setCartList([])
    }

    const removerItem = (id) => {
        setCartList(cartList.filter((p)=> p.id !== id))
    }

    const precioTotal = () => {
        return cartList.reduce((total, prodvalue) => total = total + (prodvalue.precio * prodvalue.cantidad), 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCart,
            removerItem,
            precioTotal,
        }}> 
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
