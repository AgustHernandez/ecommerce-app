import React from 'react'
import Item from '../Item/Item'

import './styleItemList.css';


function ItemList({productos}) {
  return (
    <div className='divProductos'>
      {
        productos.map((prod) => <Item key={prod.id} prod={prod} />)
      }
    </div>
  )
}

export default ItemList