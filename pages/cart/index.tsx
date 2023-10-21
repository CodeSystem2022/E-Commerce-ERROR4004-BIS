import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import { CartList } from '../../components/cart';
import ShopLayout from '../../components/layouts/ShopLayout'


const CartPage = () => {
  return (
    <ShopLayout
      title='Shopping cart - 3'
      pageDescription='Store shopping cart'
    >
      <>
        <Typography variant='h1' component='h1'>
          Shopping cart
        </Typography>
        <Grid container>
          <Grid item xs={ 12 } sm={ 7 }>
            <CartList />
          </Grid>
          <Grid item xs={ 12 } sm={ 5 }>
            <Card className='summary-card'>
              <CardContent>
                <Typography variant='h2'>
                  Order
                </Typography>
                <Divider sx={ { my: 1 } } />
                <Box sx={ { mt: 3 } }>
                  <Button
                    color='secondary'
                    className='circular-btn'
                    fullWidth
                  >
                    Checkout
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    </ShopLayout>
  )
}

export default CartPage
