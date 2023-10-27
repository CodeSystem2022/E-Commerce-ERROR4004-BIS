import NextLink from 'next/link'
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material'

import ShopLayout from '../../components/layouts/ShopLayout'
import CartList from '../../components/cart/CartList'
import OrderSummary from '../../components/cart/OrderSummary'

const SummaryPage = () => {
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
                  Summary (3 products)
                </Typography>
                <Divider sx={ { my: 1 } } />
                <Box display='flex' justifyContent='space-between' my={ 1 }>
                  <Typography variant='subtitle1' >
                    Delivery address
                  </Typography>
                  <NextLink href='/checkout/address' passHref>
                    <strong>Edit</strong>
                  </NextLink>
                </Box>
                <Typography>María Eugenia Costa</Typography>
                <Typography>123 calle de prueba</Typography>
                <Typography>Buenos Aires, 1122</Typography>
                <Typography>Argentina</Typography>
                <Typography>+ 54 11 2222 3333</Typography>
                <Divider sx={ { my: 1 } } />
                <Box display='flex' justifyContent='end' my={ 1 }>
                  <NextLink href='/cart' passHref>
                    <strong>Edit</strong>
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
