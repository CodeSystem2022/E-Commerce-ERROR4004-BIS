import React, { useContext, useEffect } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'

import { CartContext } from '../../context'
import ShopLayout from '../../components/layouts/ShopLayout'
import CartList from '../../components/cart/CartList'
import OrderSummary from '../../components/cart/OrderSummary'

const SummaryPage = () => {

  const router = useRouter()
  const { shippingAddress, numberOfItems } = useContext(CartContext)

  useEffect(() => {
    if (!Cookies.get('firstName')) {
      router.push('/checkout/address')
    }
  }, [router])

  if (!shippingAddress) {
    return <></>
  }

  const { firstName, lastName, address, address2 = '', city, zip, phone, country } = shippingAddress

  return (
    <ShopLayout
      title='Orden summary'
      pageDescription='Purchase summary'
    >
      <>
        <Typography variant='h1' component='h1' my={ 4 }>
          Orden summary
        </Typography>
        <Grid container spacing={ 2 }>
          <Grid item xs={ 12 } sm={ 7 }>
            <CartList />
          </Grid>
          <Grid item xs={ 12 } sm={ 5 }>
            <Card className='summary-card'>
              <CardContent>
                <Typography variant='h2' component='h2' mb={ 4 }>
                  Summary ({ numberOfItems } { numberOfItems === 1 ? 'Product' : 'Products' })
                </Typography>
                <Divider sx={ { my: 1 } } />
                <Box display='flex' justifyContent='space-between' my={ 1 }>
                  <Typography variant='subtitle1' >
                    Delivery address
                  </Typography>
                  <NextLink href='/checkout/address' passHref>
                    Edit
                  </NextLink>
                </Box>
                <Typography>{ firstName } { lastName }</Typography>
                <Typography>{ address } { address2 ? `, ${ address2 }` : '' }</Typography>
                <Typography>{ city }, { zip }</Typography>
                <Typography>{ country }</Typography>
                <Typography>{ phone }</Typography>
                <Divider sx={ { my: 1 } } />
                <Box display='flex' justifyContent='end' my={ 1 }>
                  <NextLink href='/cart' passHref>
                    Edit
                  </NextLink>
                </Box>
                <OrderSummary />
                <Box sx={ { mt: 3 } }>
                  <Button
                    color='secondary'
                    className='circular-btn'
                    fullWidth
                    aria-label='confirm order'
                  >
                    Confirm order
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

export default SummaryPage
