import './styleLandingListContainer.css';

import { collection, getDocs, getFirestore, limit, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import Button from '@mui/material/Button';
import HeroSection from '../../components/heroSection/HeroSection';
import ItemList from '../../components/ItemList/ItemList';
import { Link } from 'react-router-dom';
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';
import MsjBienvenida from '../../components/msjBienvenida/MsjBienvenida';
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


  return (
    <>
      <HeroSection MsjBienvenida={MsjBienvenida} />
      <div className='containerItems'>
        <h2 className='tituloProd'>PRODUCTOS</h2>
        {loading ? 
          <div>
            <LoadingSpinner/>
          </div>
          :
          <div>
            <ItemList productos={productos} />
            <div>
              <Link to='/productos' >
                <Button variant="contained" >VER MAS</Button>
              </Link>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default LandingListContainer