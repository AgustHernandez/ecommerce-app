import React from 'react'
import './styleNavBar.css';

const navBar = () => {

    return (
        <nav className='header'>
            <h1 className='brand'>MINOU <br/> MINOU</h1>
            <div className='contenedorMenu'>
                <ul className='menu'>
                    <li>INICIO</li>
                    <li className='listMenu'>PRODUCTOS</li>
                    <li className='listMenu'>NOSOTROS</li>
                    <li className='listMenu'>CONTACTO</li>
                </ul>
            </div>
            <div className='carrito'>
                <img src="" alt="" />
                <h2>$ 0,00</h2>
            </div>
        </nav>
    );
}

export default navBar