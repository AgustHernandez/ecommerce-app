import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const [total, setTotal] = useState(0)

    const agregarCart = (item) => {
        if(!isInCart(item.id))
        {
            setCartList([...cartList, item]);
            calcularTotal()
            return;
        }
        let newItem = item;
        let oldItem = cartList.filter((p)=> p.id === item.id)[0]
        newItem.cantidad = Math.min(newItem.cantidad + oldItem.cantidad, item.stock) ;
        let newCartList = cartList.filter((p)=> p.id !== item.id)
        setCartList([...newCartList, newItem])
        calcularTotal()
    }

    const isInCart = (id) => {
        return cartList.some((prod) => prod.id === id)
    }

    const calcularTotal = () => {
        setTotal(0)
        setTotal( cartList.reduce((total, prodvalue) => total = total + (prodvalue.precio*prodvalue.cantidad), 0) )
    }

    const vaciarCart = () => {
        setCartList([])
        setTotal(0)
    }

    const removerItem = (id) => {
        setCartList(cartList.filter((p)=> p.id !== id))
        calcularTotal()
    }

    return (
        <CartContext.Provider value={{
            cartList,
            total,
            agregarCart,
            vaciarCart,
            removerItem,
        }}> 
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
