import { createContext, useState, useContext, useEffect } from "react";

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
        let oldItem = cartList.filter((p)=> p.id === item.id)
        newItem.cantidad = Math.Min(newItem.cantidad + oldItem.cantidad, item.stock) ;
        let newCartList = cartList.filter((p)=> p.id !== item.id)
        setCartList([...newCartList, newItem]);
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
