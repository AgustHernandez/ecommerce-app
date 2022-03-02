import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './styleItemListContainer.css';
//import { getFetch } from '../../helpers/getFetch'

function ItemListContainer() {

  return (
    <div className='listContainer'>
      <ItemCount stock={5} initial={1}/>
    </div>
  )
}

export default ItemListContainer

/*function ItemListContainer() {
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
        {loading ? <h1>Cargando...</h1> 
        :
        productos.map((prod) => <li key={prod.id}>{prod.name}</li>)}
        
    </>
  )
}*/
