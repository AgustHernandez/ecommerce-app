import React from 'react'

function FormCarrito() {
  return (
    <div>
        <h3>DATOS DE CONTACTO</h3>
        <div>
            <input type="email" autoComplete='email' placeholder='Email' />
        </div>
        <div>
            <input type="checkbox" name="ofertas" id="ofertas" />
            <label htmlFor="ofertas"> Quiero recibir ofertas y novedades por email </label>
        </div>
        <div>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="apellido">Apellido</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="apellido">Apellido</label>
            <input type="text" />
        </div>
    </div>
  )
}

export default FormCarrito