import React from 'react'
import CartWidget from '../cartWidget/CartWidget';
import './styleNavBar.css';

const NavBar = () => {

    return (
        <header>
            <nav className='header'>
                <h1 className='brand'>MINOU <br/> MINOU</h1>
                <div className='contenedorMenu'>
                    <ul className='menu'>
                        <li>INICIO</li>
                        <li>PRODUCTOS</li>
                        <li>NOSOTROS</li>
                        <li>CONTACTO</li>
                    </ul>
                </div>
                <CartWidget/>
            </nav>
        </header>
    );
}

export default NavBar