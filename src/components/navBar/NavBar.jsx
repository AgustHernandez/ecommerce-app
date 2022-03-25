import './styleNavBar.css';

import Cart from '../Cart/Cart';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import React from 'react'

const NavBar = () => {

    return (
        <header>
            <nav className='header'>
                <NavLink to="/" className='brand'>MINOU <br/> MINOU</NavLink>
                <div className='contenedorMenu'>
                    <ul className='menu'>
                        <NavLink to="/" className="menuLista">INICIO</NavLink>
                        <NavLink to="/productos" className="menuLista">PRODUCTOS</NavLink>
                        <NavLink to='/categoria/hogar' className="menuLista">HOGAR</NavLink>
                        <NavLink to='/categoria/jardin' className="menuLista">JARDÍN</NavLink>
                        <NavLink to='/categoria/mascotas' className="menuLista">MASCOTAS</NavLink>
                    </ul>
                </div>
                <NavLink to="/cart" element={<Cart/>} className="carrito" > <CartWidget/> </NavLink>
            </nav>
        </header>
    );
}

export default NavBar