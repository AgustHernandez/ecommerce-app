import './styleCart.css';

import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';

import CartItem from "../cartItem/CartItem"
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/cartContext"
import { useState } from 'react';

function Cart() {
  const [dataForm, setDataForm] = useState( {nombre: '',provincia: '', codigoPostal: '', email: ''})
  const { cartList, vaciarCart, precioTotal } = useCartContext()

  const generarOrden = async () => {
    let orden = {}

    orden.buyer = {nombre: dataForm.nombre, provincia: dataForm.provincia, codigoPostal: dataForm.codigoPostal, email: dataForm.email}
    orden.total = precioTotal()

    orden.item = cartList.map(cartItem => {
      const id = cartItem.id
      const nombre = cartItem.nombre
      const precio = cartItem.precio * cartItem.cantidad
      const cantidad = cartItem.cantidad

      return {id, nombre, precio, cantidad}
    })

    const db = getFirestore()
    const queryCollection = collection(db, 'ordenes')
    addDoc(queryCollection, orden)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizo la compra'))

    const queryUpdate = collection(db, 'productos')
    const queryActualizarStock = query(
      queryUpdate, where(documentId(), 'in', cartList.map(prod => prod.id))
    )

    const batch = writeBatch(db)

    await getDocs(queryActualizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {stock: res.data().stock - cartList.find(prod => prod.id === res.id).cantidad}) ))
    batch.commit()
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizo la compra'))
  }

  const guardarForm = (e) => {
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })
  }

  console.log(dataForm)

  return (
    <div className="cart">
      <h2 className="titleCart">CARRITO DE COMPRAS</h2>
      
      {
        cartList.length === 0 && 
        <div>
          <h2 className="textCartVacio"> El carrito está vacio</h2>
          <div className='divBotonLink'>
            <Link to='/productos'>
              <button className="botonLink">Compra aquí !</button>
            </Link>
          </div>
        </div> 
      }

      { cartList.map(producto => <CartItem key={producto.id} producto={producto} />) 

      }

      {
        cartList.length !== 0 && 
        <div className='resumenCompra'>
          <div className='divTotal'>
            <h3 className='titleTotal'>Total:</h3>
            <h4 className="totalCart">$ {precioTotal()} </h4>
          </div>
          <div className='divBotonTotal'>
            <button onClick={vaciarCart} className="botonVaciarCart">
              Vaciar carrito
            </button>
            <button onClick={generarOrden} className="botonVaciarCart">
              Terminar compra
            </button>
          </div>
        </div>
      }

      {
        cartList.length !== 0 &&
        <div className='formCart'>
          <h3 className='tituloForm'>DATOS DE CONTACTO</h3>
          <form onSubmit={generarOrden}>
              <div className='divForm'>
                  <input type="email" name='email' placeholder='Email' value={dataForm.email} onChange={guardarForm} className='formEmail' />
              </div>
              <div className='divForm'>
                  <input type="checkbox" name="ofertas" id="ofertas" className='inputCheck' />
                  <label htmlFor="ofertas" className='labelCheck'> Quiero recibir ofertas y novedades por email </label>
              </div>
              <div className='divForm'>
                  <input type="text" name='nombre' placeholder='Nombre y Apellido' value={dataForm.nombre} onChange={guardarForm} className='formEmail' />
              </div>
              <div className='divForm'>
                  <label htmlFor="provincia" className='labelProv'> Provincia </label>
                  <select name='provincia' value={dataForm.provincia} onChange={guardarForm} className='selectProv'>
                      <option value="Elegir"> Elegir una opción </option>
                      <option value="CABA"> CABA </option>
                      <option value="Buenos Aires"> Buenos Aires </option>
                  </select>
              </div>
              <div className='divForm'>
                  <input type="number" name='codigoPostal' placeholder='Codigo Postal' value={dataForm.codigoPostal} onChange={guardarForm} className='inputCodPostal' />
              </div>
          </form>
        </div>
      }
    </div>
  )
}

export default Cart