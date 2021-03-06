import './styleCart.css';

import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';

import CartItem from "../cartItem/CartItem"
import { Link } from 'react-router-dom';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useCartContext } from "../../context/cartContext"
import { useState } from 'react';
import { Textbox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

function Cart() {
  const [dataForm, setDataForm] = useState( {nombre: '',provincia: '', email: ''})
  const [dataEmail, setDataEmail] = useState( {email: '', valido: false})
  const [emailGuardado, setEmailGuardado] = useState(false)
  const [procesandoPago, setProcesandoPago] = useState(false)
  const [id, setId] = useState('')
  const { cartList, vaciarCart, precioTotal } = useCartContext()
  
  const generarOrden = async (e) => {
    e.preventDefault()
    setProcesandoPago(true)
    let orden = {}

    orden.buyer = dataForm
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
    await addDoc(queryCollection, orden)
    .then(resp => setId(resp.id))
    .catch(err => console.log(err))

    const queryUpdate = collection(db, 'productos')
    const queryActualizarStock = query(
      queryUpdate, where(documentId(), 'in', cartList.map(prod => prod.id))
    )

    const batch = writeBatch(db)

    await getDocs(queryActualizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {stock: res.data().stock - cartList.find(prod => prod.id === res.id).cantidad}) ))
    batch.commit()
    .then(vaciarCart())
    .catch(err => console.log(err))

    setProcesandoPago(false)
  }

  const guardarForm = (name, value) => {
    setDataForm({
        ...dataForm,
        [name]: value
    })

  }

  const guardarProv = (e) => {
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })

  }

  const guardarEmail = (email, valido) => {
    setDataEmail({
        ...dataEmail,email
    })
    setDataEmail({
      ...dataEmail,valido
  })
  }

  const terminarCompra = () => {
    if(dataEmail.valido)
    {
      setEmailGuardado(true)
    }
  }


  return (
    <div className="cart">
      <h2 className="titleCart">CARRITO DE COMPRAS</h2>
      { procesandoPago ?
        <div>
          <h4 className="titleCart">Tu pago se est?? procesando</h4>
          <LoadingSpinner />
        </div>
        :
        <div>
          <div>
            {
              id !== ''  && 
              <div className='textoGracias'>
                <h3 className='gracias'>Gracias por tu compra !</h3>
                <p className='orden'> Tu orden es: <b>{id}</b> </p>
                <div className='divBotonLink'>
                  <Link to='/productos'>
                    <button className="botonLink">Volver a productos!</button>
                  </Link>
                </div>
              </div>
            }
          </div>
          <div>
            {
              (cartList.length === 0 && id === '') &&
              <div>
                <h2 className="textCartVacio"> El carrito est?? vacio</h2>
                <div className='divBotonLink'>
                  <Link to='/productos'>
                    <button className="botonLink">Compra aqu?? !</button>
                  </Link>
                </div>
              </div> 
            }
          </div>
          <div>
          { (cartList.length !== 0 && id === '') &&
            cartList.map(producto => <CartItem key={producto.id} producto={producto} />) 
          }
          </div>
          <div>
            { (cartList.length !== 0 && id === '') &&
              <div className='resumenCompra'>
                <div className='divTotal'>
                  <h3 className='titleTotal'>Total:</h3>
                  <h4 className="totalCart">$ {precioTotal()} </h4>
                </div>
                <div className='divBotonTotal'>
                  <button onClick={vaciarCart} className="botonVaciarCart">
                    Vaciar carrito
                  </button>
                </div>
              </div>
            }
          </div>
          <div>
          {
          (cartList.length !== 0 && emailGuardado) ?
            <div>
              <form onSubmit={generarOrden}>
                <div className='divForm'>
                <Textbox
                        attributesInput={{
                          id: "email",
                          placeholder: "  E-mail",
                          type: "text",
                          className: "formEmail"
                        }}
                        value={dataEmail.email} 
                        onChange={e => {}} 
                        onBlur={e => {}}
                        validationOption={{
                          name: "email",
                          check: true, 
                          required: true,
                          customFunc: email => {
                            const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if (reg.test(String(email).toLowerCase())) {
                              guardarEmail(email, true);
                              return true;
                            } else {
                              guardarEmail(email, false);
                              return "Por favor ingrese un email valido.";
                            }
                          }
                        }}
                      />
                </div>
                <div className='divForm'>
                <Textbox
                        attributesInput={{
                          id: "nombre",
                          placeholder: "  Apellido y nombre",
                          type: "text",
                          className: "formEmail"
                        }}
                        value={dataForm.nombre} 
                        onChange={e => {}} 
                        onBlur={e => {}}
                        validationOption={{
                          name: "nombre",
                          check: true, 
                          required: true,
                          customFunc: nombre => {
                            if (nombre.length > 0) {
                              guardarForm('nombre', nombre)
                              console.log(dataForm)
                              return true;
                            } else {
                              return "Por favor ingrese su nombre y apellido valido.";
                            }
                          }
                        }}
                      />
                </div>
                <div className='divForm'>
                    <label htmlFor="provincia" className='labelProv'> Provincia </label>
                    <select name='provincia' value={dataForm.provincia} onChange={guardarProv} className='selectProv'>
                      <option value="Elegir"> Elegir una opci??n </option>
                      <option value="CABA"> CABA </option>
                      <option value="Buenos Aires"> Buenos Aires </option>
                    </select>
                </div>
              </form>
              <button onClick={generarOrden} className="botonVaciarCart">
                Pagar
              </button>
            </div>
            :
            <div>
              {cartList.length  !== 0 && 
                <div className='formCart'>
                  <h3 className='tituloForm'>DATOS DE CONTACTO</h3>
                  <form>
                      <div className='divForm'>
                      <Textbox
                        attributesInput={{
                          id: "email",
                          placeholder: "  E-mail",
                          type: "text",
                          className: "formEmail"
                        }}
                        value={dataEmail.email} 
                        onChange={e => {}} 
                        onBlur={e => {}}
                        validationOption={{
                          name: "email",
                          check: true, 
                          required: true,
                          customFunc: email => {
                            const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if (reg.test(String(email).toLowerCase())) {
                              guardarEmail(email, true);
                              return true;
                            } else {
                              guardarEmail(email, false);
                              return "Por favor ingrese un email valido.";
                            }
                          }
                        }}
                      />
                      </div>
                      <div className='divForm'>
                          <input type="checkbox" name="ofertas" id="ofertas" className='inputCheck' />
                          <label htmlFor="ofertas" className='labelCheck'> Quiero recibir ofertas y novedades por email </label>
                      </div>
                  </form>
                  <div>
                      <h3>Env??o a domicilio</h3>
                      <div>
                          <input type="radio" checked name="envio" id="envio" className='inputCheck' />
                          <label htmlFor="envio" className='labelCheck'> Env??o 72hs. h??biles </label>
                      </div>
                  </div>
                  {dataEmail.valido ?
                    <Link to='/cart/pago'>
                    <button onClick={terminarCompra} className="botonVaciarCart">
                        Terminar compra
                    </button>
                    </Link>
                  : <br></br> }
                </div>
              }
            </div>
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Cart

/*
{
        (id !== '' && !procesandoPago)  && 
        <div className='textoGracias'>
          <h3 className='gracias'>Gracias por tu compra !</h3>
          <p className='orden'> Tu orden es: <b>{id}</b> </p>
          <div className='divBotonLink'>
            <Link to='/productos'>
              <button className="botonLink">Volver a productos!</button>
            </Link>
          </div>
        </div>
      }

      {
        (cartList.length === 0 && id === '' && !procesandoPago) &&
        <div>
          <h2 className="textCartVacio"> El carrito est?? vacio</h2>
          <div className='divBotonLink'>
            <Link to='/productos'>
              <button className="botonLink">Compra aqu?? !</button>
            </Link>
          </div>
        </div> 
      }
            { 
        (cartList.length !== 0 && id === '' && !procesandoPago) &&
          
        cartList.map(producto => <CartItem key={producto.id} producto={producto} />) 

      }

            {
        (cartList.length !== 0 && id === '' && !procesandoPago) &&
        <div className='resumenCompra'>
          <div className='divTotal'>
            <h3 className='titleTotal'>Total:</h3>
            <h4 className="totalCart">$ {precioTotal()} </h4>
          </div>
          <div className='divBotonTotal'>
            <button onClick={vaciarCart} className="botonVaciarCart">
              Vaciar carrito
            </button>
          </div>
        </div>
      }
      {
          (cartList.length !== 0 && emailGuardado && !procesandoPago) ?
            <div>
              <form onSubmit={generarOrden}>
                <div className='divForm'>
                  <input type="email" name='email' placeholder='Email' value={dataEmail.email} onChange={guardarForm} className='formEmail' />
                </div>
                <div className='divForm'>
                  <input type="text" name='nombre' placeholder='Nombre y Apellido' value={dataForm.nombre} onChange={guardarForm} className='formEmail' />
                </div>
                <div className='divForm'>
                    <label htmlFor="provincia" className='labelProv'> Provincia </label>
                    <select name='provincia' value={dataForm.provincia} onChange={guardarForm} className='selectProv'>
                      <option value="Elegir"> Elegir una opci??n </option>
                      <option value="CABA"> CABA </option>
                      <option value="Buenos Aires"> Buenos Aires </option>
                    </select>
                </div>
                <div className='divForm'>
                    <input type="number" name='codigoPostal' placeholder='Codigo Postal' value={dataForm.codigoPostal} onChange={guardarForm} className='inputCodPostal' />
                </div>
              </form>
              <Pago/>
              <button onClick={generarOrden} className="botonVaciarCart">
                Pagar
              </button>
            </div>
            :
            <div>
            {(cartList.length && !procesandoPago) > 0 && 
            <div className='formCart'>
              <h3 className='tituloForm'>DATOS DE CONTACTO</h3>
              <form>
                  <div className='divForm'>
                      <input type="email" name='email' placeholder='Email' value={dataEmail.email} onChange={guardarEmail} className='formEmail' />
                  </div>
                  <div className='divForm'>
                      <input type="checkbox" name="ofertas" id="ofertas" className='inputCheck' />
                      <label htmlFor="ofertas" className='labelCheck'> Quiero recibir ofertas y novedades por email </label>
                  </div>
              </form>
              <div>
                  <h3>Env??o a domicilio</h3>
                  <div>
                      <input type="radio" checked name="envio" id="envio" className='inputCheck' />
                      <label htmlFor="envio" className='labelCheck'> Env??o 72hs. h??biles </label>
                  </div>
              </div>
              <Link to='/cart/pago'>
                <button onClick={terminarCompra} className="botonVaciarCart">
                    Terminar compra
                </button>
              </Link>
            </div>}




<div className='divForm'>
    <input type="text" name='nombre' placeholder='Nombre y Apellido' value={dataForm.nombre} onChange={guardarForm} className='formEmail' />
</div>
<div className='divForm'>
    <label htmlFor="provincia" className='labelProv'> Provincia </label>
    <select name='provincia' value={dataForm.provincia} onChange={guardarForm} className='selectProv'>
      <option value="Elegir"> Elegir una opci??n </option>
      <option value="CABA"> CABA </option>
      <option value="Buenos Aires"> Buenos Aires </option>
    </select>
</div>
<div className='divForm'>
    <input type="number" name='codigoPostal' placeholder='Codigo Postal' value={dataForm.codigoPostal} onChange={guardarForm} className='inputCodPostal' />
</div>*/

/*{
  (cartList.length !== 0 && id === '' ) &&
  <div className='formCart'>
    <h3 className='tituloForm'>DATOS DE CONTACTO</h3>
    <form>
        <div className='divForm'>
            <input type="email" name='email' placeholder='Email' value={dataEmail.email} onChange={guardarEmail} className='formEmail' />
        </div>
        <div className='divForm'>
            <input type="checkbox" name="ofertas" id="ofertas" className='inputCheck' />
            <label htmlFor="ofertas" className='labelCheck'> Quiero recibir ofertas y novedades por email </label>
        </div>
    </form>
    <div>
        <h3>Env??o a domicilio</h3>
        <div>
            <input type="radio" checked name="envio" id="envio" className='inputCheck' />
            <label htmlFor="envio" className='labelCheck'> Env??o 72hs. h??biles </label>
        </div>
    </div>
    <Link to='/cart/pago'>
      <button className="botonVaciarCart">
          Terminar compra
      </button>
    </Link>
  </div>
}
{
  (cartList.length !== 0 && emailGuardado === true ) &&
  <div>
    <form onSubmit={generarOrden}>
      <div className='divForm'>
        <input type="email" name='email' placeholder='Email' value={dataEmail.email} onChange={guardarForm} className='formEmail' />
      </div>
      <div className='divForm'>
        <input type="text" name='nombre' placeholder='Nombre y Apellido' value={dataForm.nombre} onChange={guardarForm} className='formEmail' />
      </div>
      <div className='divForm'>
          <label htmlFor="provincia" className='labelProv'> Provincia </label>
          <select name='provincia' value={dataForm.provincia} onChange={guardarForm} className='selectProv'>
            <option value="Elegir"> Elegir una opci??n </option>
            <option value="CABA"> CABA </option>
            <option value="Buenos Aires"> Buenos Aires </option>
          </select>
      </div>
      <div className='divForm'>
          <input type="number" name='codigoPostal' placeholder='Codigo Postal' value={dataForm.codigoPostal} onChange={guardarForm} className='inputCodPostal' />
      </div>
    </form>
    <Pago/>
    <button onClick={generarOrden} className="botonVaciarCart">
      Pagar
    </button>
  </div>
}*/