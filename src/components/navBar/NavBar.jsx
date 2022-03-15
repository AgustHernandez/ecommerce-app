import React from 'react'
import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import CartWidget from '../cartWidget/CartWidget';
import HeroSection from '../heroSection/HeroSection';
import MsjBienvenida from '../msjBienvenida/MsjBienvenida';

import './styleNavBar.css';

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
                        <NavLink to="nosotros" className="menuLista">NOSOTROS</NavLink>
                        <NavLink to="contacto" className="menuLista">CONTACTO</NavLink>
                    </ul>
                </div>
                <NavLink to="/cart" element={<Cart/>} className="carrito" > <CartWidget/> </NavLink>
            </nav>
            <HeroSection MsjBienvenida={MsjBienvenida}/>
        </header>
    );
}

export default NavBar