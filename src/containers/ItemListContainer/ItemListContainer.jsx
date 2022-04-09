import './styleItemListContainer.css';

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import HeroSection from '../../components/heroSection/HeroSection';
import ItemList from '../../components/ItemList/ItemList';
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';
import MsjBienvenida from '../../components/msjBienvenida/MsjBienvenida';
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
      <HeroSection MsjBienvenida={MsjBienvenida} />
      <div className='containerItems'>
        <h2 className='tituloProd'>PRODUCTOS</h2>
        {loading ? 
          <div>
            <LoadingSpinner/>
          </div>
          :
          <ItemList productos={productos} />}
      </div>
    </>
  )
}

export default ItemListContainer
