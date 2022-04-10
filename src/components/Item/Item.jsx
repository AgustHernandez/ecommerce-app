import './styleItem.css';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React from 'react'

function Item({prod}) {

  return (
    <div key={prod.id} className='cardItem'>
        <div className='titleItem'>
          <h2 className='nombreProdItem'>{prod.nombre}</h2>
        </div>
        <div>
          <img src={prod.imagen} alt={prod.nombre} className='imgProdItem'/>
        </div>
        <div className='containerDescripItem'>
          <p className='descripProdItem'>{prod.description}</p>
          <p className='precioProdItem'>$ {prod.precio}</p>
          <Link to={`detalle/${prod.id}`}>
            <Button variant="outlined" > Ver descripción </Button>
          </Link>
        </div>
    </div>
  )
}

export default Item

/*className='buttonProdItem'*/