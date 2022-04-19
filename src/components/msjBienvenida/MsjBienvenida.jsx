import './styleMsjBienvenida.css';

import { Box } from '@mui/material';
import React from 'react'
import Typography from '@mui/material/Typography';

const MsjBienvenida = () => {

    return (
        <Box component="span" className='msjBienvenida' >
            <Typography variant="h1" gutterBottom component="h3">
                Bienvenido !
            </Typography>
        </Box>
    )
}

export default MsjBienvenida