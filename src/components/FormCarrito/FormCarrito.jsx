import './styleFormCarrito.css'

import React from 'react'

function FormCarrito() {
  return (
    <div className='formCart'>
        <h3 className='tituloForm'>DATOS DE CONTACTO</h3>
        <form action="#">
            <div className='divForm'>
                <input type="email" placeholder='Email' className='formEmail' />
            </div>
            <div className='divForm'>
                <input type="checkbox" name="ofertas" id="ofertas" className='inputCheck' />
                <label htmlFor="ofertas" className='labelCheck'> Quiero recibir ofertas y novedades por email </label>
            </div>
            <div className='divForm'>
                <label htmlFor="provincia" className='labelProv'> Provincia </label>
                <select name='provincia' className='selectProv'>
                    <option value="Elegir"> Elegir una opción </option>
                    <option value="CABA"> CABA </option>
                    <option value="Buenos Aires"> Buenos Aires </option>
                </select>
            </div>
            <div className='divForm'>
                <input type="number" placeholder='Codigo Postal' className='inputCodPostal' />
            </div>
        </form>
    </div>
  )
}

export default FormCarrito