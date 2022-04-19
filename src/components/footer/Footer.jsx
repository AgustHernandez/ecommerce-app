import './styleFooter.css';

import { Box, Typography } from '@mui/material';

import { NavLink } from 'react-router-dom';
import React from 'react'

function Footer() {
    return (
        <footer className='footer'>
            <Box sx={{ width: '100%', maxWidth: 500, color: 'white', display: 'flex', mx: 5, gap: 0.5, flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h5" component="div" gutterBottom>
                    Dirección
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                    Av. Suarez 589, Barracas, CABA
                </Typography>
            </Box>
            <Box sx={{ width: '100%', maxWidth: 500, color: 'white', display: 'flex', mx: 5, gap: 0.5, flexDirection: 'column', justifyContent: 'center' }}>
                <nav classN>
                    <ul className='menuFooter'>
                        <NavLink to="/" className="menuLista">INICIO</NavLink>
                        <NavLink to="/productos" className="menuLista">PRODUCTOS</NavLink>
                        <NavLink to='/categoria/hogar' className="menuLista">HOGAR</NavLink>
                        <NavLink to='/categoria/jardin' className="menuLista">JARDÍN</NavLink>
                        <NavLink to='/categoria/mascotas' className="menuLista">MASCOTAS</NavLink>
                    </ul>
                </nav>
            </Box>
        </footer>
    )
}

export default Footer