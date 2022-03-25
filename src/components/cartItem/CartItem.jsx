import './cartItem.css';

import React from 'react'
import { useCartContext } from '../../context/cartContext';

function CartItem({producto}) {

    const { removerItem } = useCartContext()

    const removerProd = (id) => {
        removerItem(id)
    }

    return (
        <div key={producto.id} className='card' >
            <div className='title'>
                <h2 className='nombreProd'>{producto.nombre}</h2>
            </div>
            <div>
                <img src={producto.imagen} alt={producto.nombre} className='imgProd'/>
            </div>
            <div className='containerDescrip'>
                <p className='descripProd'>{producto.description}</p>
                <p className='precioProd'>$ {producto.precio}</p>
                <p className='precioProd'>Cantidad: {producto.cantidad} </p>
                <button className='buttonProd' onClick={ () => removerProd(producto.id) }> Eliminar producto </button>
            </div>
        </div>
        )
}

export default CartItem