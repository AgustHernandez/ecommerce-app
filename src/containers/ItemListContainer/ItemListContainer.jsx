import { Box, CircularProgress, Container } from '@mui/material';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()

    useEffect(() => {
      const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      if (categoriaId) {
        const queryFilter = query( queryCollection, where( 'categoria', '==', categoriaId ))
        getDocs(queryFilter)
        .then(resp => setProductos( resp.docs.map(product => ( {id: product.id, ...product.data()} ) ) ))
        .then(err => console.log(err))
        .finally(() => setLoading(false))
      } else {
        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(product => ( {id: product.id, ...product.data()} ) ) ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
      }
    }, [categoriaId])


  return (
    <>
      <Container maxWidth="xl" sx={{ heigth: 'auto', mb: 20 }} >
        <h2 className='tituloProd'>PRODUCTOS</h2>
        {loading ? 
          <Box maxWidth="xl" sx={{ m: '5rem', display: 'flex', justifyContent: 'center' }}>
            <CircularProgress color="primary" sx={{color: '#b5838d'}}  />
          </Box>
          :
          <ItemList productos={productos} />}
      </Container>
    </>
  )
}

export default ItemListContainer
