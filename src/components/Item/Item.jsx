import './styleItem.css';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import React from 'react'
import Typography from '@mui/material/Typography';

function Item({prod}) {

  return (
    <Card sx={{ maxWidth: 345 }} key={prod.id}>
      <CardActionArea>
        <CardMedia>
          component="img"
          height="140"
          image={prod.imagen}
          alt={prod.nombre}
        </CardMedia>
      </CardActionArea>
    </Card>
  )
}

export default Item

/*<div key={prod.id} className='cardItem'>
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
    </div>*/