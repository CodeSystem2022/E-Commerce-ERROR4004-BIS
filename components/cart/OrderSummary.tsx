import React, { FC, useContext } from 'react'
import { Divider, Grid, Typography } from '@mui/material'
import { CartContext } from '../../context'
import { currency } from '../../utils'

interface OrderSummaryProps {
  orderValues?: {
    numberOfItems: number
    subTotal: number
    total: number
    tax: number
  }
}

const OrderSummary: FC<OrderSummaryProps> = ({ orderValues }) => {
  const { numberOfItems, subTotal, total, tax } = useContext(CartContext)

  const summaryValues = orderValues ? orderValues : { numberOfItems, subTotal, total, tax }

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
          { summaryValues.numberOfItems } { summaryValues.numberOfItems > 1 ? 'items' : 'item' }
        </Typography>
      </Grid>
      { /* Subtotal */ }
      <Grid item xs={ 6 }>
        <Typography>Subtotal:</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>
          { currency.formatToUSD(summaryValues.subTotal) }
        </Typography>
      </Grid>
      { /* Taxes*/ }
      <Grid item xs={ 6 }>
        <Typography>
          Taxes ({ Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100 }%):
        </Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>
          { currency.formatToUSD(summaryValues.tax) }
        </Typography>
      </Grid>
      <Grid item xs={ 12 } my={ 1 }>
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
          { currency.formatToUSD(summaryValues.total) }
        </Typography>
      </Grid>
    </Grid>
  )
}

export default OrderSummary