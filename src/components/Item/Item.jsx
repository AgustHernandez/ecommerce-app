import React from 'react'
import { Link } from 'react-router-dom';
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
          <Link to={`detalle/${prod.id}`}>
            <button className='buttonProd'> Ver descripción </button>
          </Link>
        </div>
    </div>
  )
}

export default Item

//<li key={prod.id}>{prod.name}</li>