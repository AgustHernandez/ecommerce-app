import './styleItemListContainer.css';

import { useEffect, useState } from 'react'

import HeroSection from '../../components/heroSection/HeroSection';
import ItemList from '../../components/ItemList/ItemList';
import MsjBienvenida from '../../components/msjBienvenida/MsjBienvenida';
import { getFetch } from '../../helpers/getFetch'
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()

    useEffect(() => {
      if (categoriaId) {
        getFetch
        .then((respuesta) => {
            return respuesta
        })
        .then((resp) => setProductos(resp.filter(prod => prod.categoria === categoriaId) ))
        .then(err => console.log(err))
        .finally(() => setLoading(false))
      } else {
        getFetch
        .then((respuesta) => {
          return respuesta
        })
        .then((resp) => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
      }
    }, [categoriaId])

  return (
    <>
      <HeroSection MsjBienvenida={MsjBienvenida} />
      <div className='containerItems'>
        <h2 className='tituloProd'>PRODUCTOS</h2>
        {loading ? <h2 className='loading'>Cargando...</h2>
          :
          <ItemList productos={productos} />}
      </div>
    </>
  )
}

export default ItemListContainer
