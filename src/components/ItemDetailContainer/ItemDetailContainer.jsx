import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail';

import './styleItemDetailContainer.css';

function ItemDetailContainer() {
    // llamada a api
  const [producto, setProducto] = useState({})
  const [loading, setloading] = useState(true)
  const {detalleId} = useParams()
    
  useEffect(() => {
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))
        .finally(() => setloading(false))
    }, [])
    console.log(producto)
  return (
    <>
        { loading ? <h2 className='loading'>Cargando...</h2>
        :
        <ItemDetail producto={producto}/>
        }
    </>
  )
}

export default ItemDetailContainer