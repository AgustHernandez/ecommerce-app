import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './styleItem.css';

function Item({prod}) {

  return (
    <div key={prod.id} className='card' >
        <div className='title'>
          <h2 className='nombreProd'>{prod.nombre}</h2>
        </div>
        <div>
          <img src={prod.imagen} alt={prod.nombre} className='imgProd' />
        </div>
        <div className='containerDescrip'>
          <p className='descripProd'>{prod.description}</p>
          <p className='precioProd'>$ {prod.precio}</p>
          <button className='buttonProd'> Ver descripción </button>
        </div>
        <ItemCount stock={5} initial={1}/>
    </div>
  )
}

export default Item

//<li key={prod.id}>{prod.name}</li>