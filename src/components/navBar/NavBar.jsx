import React from 'react'
import { NavLink } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';
import './styleNavBar.css';

const NavBar = () => {

    return (
        <header>
            <nav className='header'>
                <NavLink to="/" className='brand'>MINOU <br/> MINOU</NavLink>
                <div className='contenedorMenu'>
                    <ul className='menu'>
                        <NavLink to="/">INICIO</NavLink>
                        <NavLink to="productos">PRODUCTOS</NavLink>
                        <NavLink to="nosotros">NOSOTROS</NavLink>
                        <NavLink to="contacto">CONTACTO</NavLink>
                    </ul>
                </div>
                <CartWidget/>
            </nav>
        </header>
    );
}

export default NavBar