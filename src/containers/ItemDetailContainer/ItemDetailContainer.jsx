import './styleItemDetailContainer.css';

import { Box, CircularProgress, Container } from '@mui/material';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import ItemDetail from '../../components/ItemDetail/ItemDetail';
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
    <Container maxWidth="xl" sx={{ heigth: 'auto', mb: 20 }} >
      { loading ? 
        <Box sx={{ m: 5, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress color="primary" sx={{color: '#b5838d'}}  />
        </Box>
        :
        <ItemDetail producto={producto}/>
      }
      </Container>
    </>
  )
}

export default ItemDetailContainer