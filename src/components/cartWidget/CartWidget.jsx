import './styleCartWidget.css';

import { Badge, IconButton } from '@mui/material';

import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {useCartContext} from '../../context/cartContext'

function CartWidget() {

  const { cartList } = useCartContext()

  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={cartList.reduce((cantidad, prodvalue) => cantidad = cantidad + prodvalue.cantidad, 0)} color="secondary" anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <ShoppingBagOutlinedIcon className='bag' fontSize='large' />
      </Badge>
    </IconButton>
  )
}

export default CartWidget

/*<div className='carrito'>
            <svg className='bag' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                <path d="M21,6H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A3,3,0,0,0,21,6ZM12,2a4,4,0,0,1,4,4H8A4,4,0,0,1,12,2ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A1,1,0,0,1,3,8H6v2a1,1,0,0,0,2,0V8h8v2a1,1,0,0,0,2,0V8h3a1,1,0,0,1,1,1Z"/>
            </svg>
            {
              cartList.length !== 0 && 
              <div className='divbuttonCartWidget'>
                <button className='buttonCartWidget' > {cartList.reduce((cantidad, prodvalue) => cantidad = cantidad + prodvalue.cantidad, 0)} </button>
              </div> 
            }
        </div>*/