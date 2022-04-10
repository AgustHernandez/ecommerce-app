import './styleItem.css';

import * as React from 'react'

import { CardActionArea, CardActions } from '@mui/material';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function Item({prod}) {

  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined" key={prod.id}>
      <CardActionArea>
        <CardMedia>
          component="img"
          height="140"
          src={prod.imagen}
          alt={prod.nombre}
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {prod.nombre}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            $ {prod.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`detalle/${prod.id}`}>
          <Button>
            Ver descripción
          </Button>
        </Link>
      </CardActions>
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