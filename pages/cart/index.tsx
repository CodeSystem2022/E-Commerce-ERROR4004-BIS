import { useEffect, useContext } from 'react'

import { useRouter } from 'next/router'

import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'

import { CartContext } from '../../context'

import ShopLayout from '../../components/layouts/ShopLayout'
import CartList from '../../components/cart/CartList'
import OrderSummary from '../../components/cart/OrderSummary'

const CartPage = () => {

  const { isLoaded, cart } = useContext(CartContext)
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && cart.length === 0) {
      router.replace('/cart/empty')
    }

  }, [isLoaded, cart, router])

  if (!isLoaded || cart.length === 0) {
    return (<></>)
  }

  return (
    <ShopLayout
      title='Shopping Cart'
      pageDescription='Store shopping cart'
    >
      <>
        <Typography variant='h1' component='h1' my={ 4 }>
          Shopping cart
        </Typography>
        <Grid container spacing={ 2 }>
          <Grid item xs={ 12 } sm={ 7 }>
            <CartList editable />
          </Grid>
          <Grid item xs={ 12 } sm={ 5 }>
            <Card className='summary-card'>
              <CardContent>
                <Typography variant='h2' mb={ 3 }>
                  Order
                </Typography>
                <Divider sx={ { my: 1 } } />
                <OrderSummary />
                <Box sx={ { mt: 3 } }>
                  <Button
                    color='secondary'
                    className='circular-btn'
                    fullWidth
                    aria-label='checkout'
                    href='/checkout/address'
                    sx={ {
                      py: 1,
                      textTransform: 'uppercase'
                    } }
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
