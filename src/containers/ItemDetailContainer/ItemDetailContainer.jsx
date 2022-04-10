import './styleItemDetailContainer.css';

import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import ItemDetail from '../../components/ItemDetail/ItemDetail';
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    // llamada a api
  const [producto, setProducto] = useState({})
  const {detalleId} = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    const queryDb = doc(db, 'productos', detalleId)
    getDoc(queryDb)
    .then(resp => setProducto({ id: resp.id, ...resp.data() }))
    .finally(() => setLoading(false))
}, [detalleId])

  return (
    <>
        { loading ? 
          <div>
            <LoadingSpinner/>
          </div>
        :
        <ItemDetail producto={producto}/>
        }
    </>
  )
}

export default ItemDetailContainer