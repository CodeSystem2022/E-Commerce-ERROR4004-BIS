import { Divider, Grid, Typography } from '@mui/material'

const OrderSummary = () => {
  return (
    <Grid container>
      { /* Amounto of products */ }
      <Grid item xs={ 6 }>
        <Typography>
          Amount of items:
        </Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>
          3
        </Typography>
      </Grid>
      { /* Subtotal */ }
      <Grid item xs={ 6 }>
        <Typography>Subtotal:</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>
          { `$${ 155.36 }` }
        </Typography>
      </Grid>
      { /* Taxes*/ }
      <Grid item xs={ 6 }>
        <Typography>
          Taxes (15%):
        </Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>
          { `$${ 33.34 }` }
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
          { `$${ 186.34 }` }
        </Typography>
      </Grid>
    </Grid>
  )
}

export default OrderSummary