import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
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
    <>
      { loading ? <h3>Cargando...</h3>
        :
        <ItemList productos={productos} />
      }
      <ItemCount stock={5} initial={1}/>
    </>
  )
}

export default ItemListContainer
