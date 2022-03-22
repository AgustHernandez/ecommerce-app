import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const agregarCart = (item) => {
        setCartList([...cartList, item])
    }

    const isInCart = (id) => {
        return cartList.some((prod) => prod.id === id)
    }

    useEffect(() => {
        console.log(cartList)
    }, [cartList])


    const vaciarCart=()=>{
        setCartList([])
    }


    return (
        <CartContext.Provider value={{
            agregarCart,
            vaciarCart,
            isInCart
        }}> 
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider