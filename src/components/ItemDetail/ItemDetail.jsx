import './styleItemDetail.css';

import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/cartContext"
import { useState } from 'react'

function ItemDetail({producto}) {
  const [agregado, estaAgregado] = useState(false)

  const { agregarCart } = useCartContext()

  const Add = (cantidad) => {
    agregarCart({...producto, cantidad: cantidad})
    estaAgregado(true);
  }

  return (
    <div className='containerDetail'>
      <div>
        <img src={producto.imagen} alt={producto.nombre} className="imagenProd"/>
      </div>
      <div className='detail'>
        <div>
          <h2 className='tituloProd'>{producto.nombre}</h2>
          <p className='parrafoProd'>Diseño personalizable</p>
        </div>
        <div>
          <div className='precioProducto'>
            <p>$ {producto.precio}</p>
          </div>
          <div className='divColor'>
            <label className='color'>Color:</label>
            <button className='buttonColor1'/>
            <button className='buttonColor2'/>
          </div>
          <div>
            { agregado ?
            <div>
              <h2>Se ha agregado el producto al carrito</h2>
              <Link to='/productos'>
                <button>Seguir comprando</button>
              </Link>
              <Link to='/cart'>
                <h3>Terminar compra</h3>
              </Link>
            </div>
            :
              <div>
                {(producto.stock > 0) ?
                    <div>
                      <label className='textoDisponibles'>Disponibles: {producto.stock}</label>
                      <ItemCount stock={producto.stock} Add={Add} />
                    </div>
                    :
                    <div>
                      <label className='textoSinStock'>Producto sin stock</label>
                      <br></br>
                      <Link to='/productos'>
                        <button>Seguir comprando</button>
                      </Link>
                      </div>
                }
              </div>
            }
          </div>
        </div>
        <div className='costoYenvio'>
          <div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-shop" viewBox="0 0 16 16">
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                </svg>
            </div>
              <p className="parrafoCostoEnvio">Calculá el costo <br/> de tu envio</p>
          </div>
          <div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
            </div>
            <p className="parrafoEnvio">Envíos y <br/> devoluciones</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
