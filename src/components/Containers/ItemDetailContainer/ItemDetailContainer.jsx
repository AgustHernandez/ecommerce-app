import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFetch } from '../../../helpers/getFetch';
import ItemDetail from '../../ItemDetail/ItemDetail';

import './styleItemDetailContainer.css';

function ItemDetailContainer() {
    // llamada a api
  const [producto, setProducto] = useState({})
  const {detalleId} = useParams()
  const [loading, setloading] = useState(true)

  
  useEffect(() => {
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))
        .finally(() => setloading(false))
    }, [detalleId])

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