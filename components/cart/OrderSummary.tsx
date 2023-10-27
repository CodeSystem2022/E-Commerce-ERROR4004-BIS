import React, { useContext} from 'react'
import { Divider, Grid, Typography } from '@mui/material'
import { CartContext } from '../../context'
import { currency } from '../../utils'

const OrderSummary = () => {
  const { numberOfItems, subTotal, total, tax} = useContext(CartContext)

  return (
    <Grid container>
      { /* Amount of products */ }
      <Grid item xs={ 6 }>
        <Typography>
          Products:
        </Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>
          { numberOfItems } { numberOfItems > 1? 'items': 'item' }
        </Typography>
      </Grid>
      { /* Subtotal */ }
      <Grid item xs={ 6 }>
        <Typography>Subtotal:</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>
          { currency.formatToUSD(subTotal) }
        </Typography>
      </Grid>
      { /* Taxes*/ }
      <Grid item xs={ 6 }>
        <Typography>
          Taxes ({ Number(process.env.NEXT_PUBLIC_TAX_RATE)*100 }%):
        </Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>
          { currency.formatToUSD(tax) }
        </Typography>
      </Grid>
      <Grid item xs={ 12 } my={ 1}>
        <Divider />
      </Grid>
      { /* Total*/ }
      <Grid item xs={ 6 }>
        <Typography variant='subtitle1'>
          Total:
        </Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography variant='subtitle1' sx={ { my: 1 } }>
          { currency.formatToUSD(total) }
        </Typography>
      </Grid>
    </Grid>
  )
}

export default OrderSummary