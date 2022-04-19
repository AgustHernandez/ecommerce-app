import './styleItemCount.css';

import React, { useState } from 'react'

import { Box } from '@mui/material';

function ItemCount({stock, Add}) {
  const [cant, setCant] = useState(1)
  const [stockRemanente, setStockRemanente] = useState(stock)

  let sumaCant = () => {
    setCant(cant + 1)
    setStockRemanente(stockRemanente - 1)
  }

  let restaCant = () => {
    setCant(cant - 1)
    setStockRemanente(stockRemanente + 1)
  }

  if (cant <= 1) {
    restaCant = () => setCant(1)
  }

  if (stockRemanente === 0) {
    sumaCant = () => setCant(stock)
  }

  const agregarCarrito = () => {
    Add(cant)
  }

  return (
    <Box>
      <div className='containerCant'>
        <button onClick={restaCant} className='buttonCantMenos'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={15} height={15}>
            <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
          </svg>
        </button>
        <label className='labelCant'>{cant}</label>
        <button onClick={sumaCant} className='buttonCantMas'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={15} height={15}>
            <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
          </svg>
        </button>
      </div>
      <button onClick={agregarCarrito} className='buttonAgregar'>
        Agregar al carrito
      </button>
    </Box>
  )
}

export default ItemCount