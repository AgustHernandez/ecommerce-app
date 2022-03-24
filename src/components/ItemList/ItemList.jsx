import './styleItemList.css';

import Item from '../Item/Item'
import { memo } from 'react'

const ItemList = memo(({productos}) => {
  return (
    <div className='divProductos'>
      {
        productos.map((prod) => <Item key={prod.id} prod={prod} />)
      }
    </div>
  )
})

export default ItemList