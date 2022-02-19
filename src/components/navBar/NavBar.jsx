import React from 'react'
import CartWidget from '../cartWidget/CartWidget';
import './styleNavBar.css';

const NavBar = () => {

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
            <CartWidget/>
        </nav>
    );
}

export default NavBar