import React, { useContext } from 'react'
import NextLink from 'next/link'
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material'
import { CartContext } from '../../context'
import ShopLayout from '../../components/layouts/ShopLayout'
import CartList from '../../components/cart/CartList'
import OrderSummary from '../../components/cart/OrderSummary'
import { countries } from '../../utils'

const SummaryPage = () => {
  const { shippingAddress, numberOfItems } = useContext(CartContext)

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
                    <Link
                      underline='always'
                      color='secondary'
                      sx={ { fontWeight: '700' } }
                    >
                      Edit
                    </Link>
                  </NextLink>
                </Box>
                <Typography>{ firstName } { lastName }</Typography>
                <Typography>{ address } { address2 ? `, ${ address2 }` : '' }</Typography>
                <Typography>{ city }, { zip }</Typography>
                <Typography>{ countries.find(c => c.code === country)?.name }</Typography>
                <Typography>{ phone }</Typography>
                <Divider sx={ { my: 1 } } />
                <Box display='flex' justifyContent='end' my={ 1 }>
                  <NextLink href='/cart' passHref>
                    <Link
                      underline='always'
                      color='secondary'
                      sx={ { fontWeight: '700' } }
                    >
                      Edit
                    </Link>
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
