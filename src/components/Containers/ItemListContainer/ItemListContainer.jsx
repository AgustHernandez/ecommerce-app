import { useEffect, useState } from 'react'
import { getFetch } from '../../../helpers/getFetch'
import { useParams } from 'react-router-dom';
import ItemList from '../../ItemList/ItemList';

import './styleItemListContainer.css';

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setloading] = useState(true)
  const { categoriaId } = useParams()

    useEffect(() => {
      if (categoriaId) {
        getFetch
        .then((respuesta) => {
            return respuesta
        })
        .then((resp) => setProductos(resp.filter(prod => prod.categoria === categoriaId) ))
        .then(err => console.log(err))
        .finally(() => setloading(false))
      } else {
        getFetch
        .then((respuesta) => {
          return respuesta
        })
        .then((resp) => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setloading(false))
      }
    }, [categoriaId])

  return (
    <div className='containerItems'>
      <h2 className='tituloProd'>PRODUCTOS</h2>
      { loading ? <h2 className='loading'>Cargando...</h2>
        :
        <ItemList productos={productos} />
      }
    </div>
  )
}

export default ItemListContainer
