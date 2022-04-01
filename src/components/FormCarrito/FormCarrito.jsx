import './styleFormCarrito.css'

import React from 'react'
import { useState } from 'react';

function FormCarrito({generarOrden}) {
    const {dataForm, setDataForm} = useState( {mail: '', provincia: '', codigoPostal: ''})

    const guardarForm = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const guardarOrden = () => {
        generarOrden()
    }


  return (
    <div className='formCart'>
        <h3 className='tituloForm'>DATOS DE CONTACTO</h3>
        <form onSubmit={guardarOrden}>
            <div className='divForm'>
                <input type="email" name='email' placeholder='Email' value={dataForm.mail} onChange={guardarForm} className='formEmail' />
            </div>
            <div className='divForm'>
                <input type="checkbox" name="ofertas" id="ofertas" className='inputCheck' />
                <label htmlFor="ofertas" className='labelCheck'> Quiero recibir ofertas y novedades por email </label>
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
                <input type="number" name='Codigo Postal' placeholder='Codigo Postal' value={dataForm.codigoPostal} onChange={guardarForm} className='inputCodPostal' />
            </div>
        </form>
    </div>
  )
}

export default FormCarrito