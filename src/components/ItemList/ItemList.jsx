import './styleItemList.css';

import { Box, Grid } from '@mui/material';

import Item from '../Item/Item'
import { memo } from 'react'

const ItemList = memo(({productos}) => {
  return (
    <Box mt={2}>
      <Grid container spacing={12}>
        {
          productos.map((prod) => 
          <Grid item xs={3}>
            <Item key={prod.id} prod={prod} />
          </Grid>)
        }
      </Grid>
    </Box>
  )
})

export default ItemList