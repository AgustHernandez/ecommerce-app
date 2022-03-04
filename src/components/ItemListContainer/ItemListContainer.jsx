import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import './styleItemListContainer.css';
import { getFetch } from '../../helpers/getFetch'

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setloading] = useState(true)
    useEffect(() => {
        getFetch
        .then((respuesta) => {
            return respuesta
        })
        .then((resp) => setProductos(resp))
        .then(err => console.log(err))
        .finally(() => setloading(false))
    }, [])

  return (
    <div div className='containerItems'>
      { loading ? <h2 className='loading'>Cargando...</h2>
        :
        <ItemList productos={productos} />
      }
    </div>
  )
}

export default ItemListContainer
