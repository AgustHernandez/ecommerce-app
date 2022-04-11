import './styleLandingListContainer.css';

import { Box, Button, CircularProgress, Container } from '@mui/material';
import { collection, getDocs, getFirestore, limit, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import HeroSection from '../../components/heroSection/HeroSection';
import ItemList from '../../components/ItemList/ItemList';
import { Link } from 'react-router-dom';
import MsjBienvenida from '../../components/msjBienvenida/MsjBienvenida';
import { styled } from '@mui/material/styles'
import { useParams } from 'react-router-dom';

function LandingListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryFilter = query( queryCollection, limit(4))
        getDocs(queryFilter)
        .then(resp => setProductos( resp.docs.map(product => ( {id: product.id, ...product.data()} ) ) ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [categoriaId])

    const BotonVerMas = styled(Button) ({
      backgroundColor: '#b5838d',
      borderColor: '#e5989b',
      borderRadius: '5px',
      width: '150px',
      height: '30px',
      margin: '10px',
      fontSize: 16,
      lineHeight: 1.5,
      '&:hover': {
        backgroundColor: '#ffb4a2',
      },
    })

  return (
    <>
      <HeroSection MsjBienvenida={MsjBienvenida} />
      <Container maxWidth="xl">
        <h2 className='tituloProd'>PRODUCTOS</h2>
        {loading ? 
          <Box maxWidth="xl" sx={{ m: '5rem', display: 'flex', justifyContent: 'center' }}>
            <CircularProgress color="primary" sx={{color: '#b5838d'}}  />
          </Box>
          :
          <Box maxWidth="xl" sx={{ m: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <ItemList productos={productos} />
            <Box maxWidth="xl" sx={{ m: '5rem', display: 'flex', justifyContent: 'center' }}>
              <Link to='/productos' >
                <BotonVerMas variant="contained" size="large">VER MAS</BotonVerMas>
              </Link>
            </Box>
          </Box>
        }
      </Container>
    </>
  )
}

export default LandingListContainer