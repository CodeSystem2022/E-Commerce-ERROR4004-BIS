import NextLink from 'next/link'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import { Box, Card, CardContent, Chip, Divider, Grid, Typography, } from '@mui/material'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'
import ShopLayout from '../../components/layouts/ShopLayout'
import CartList from '../../components/cart/CartList'
import OrderSummary from '../../components/cart/OrderSummary'
import { dbOrders } from '../../database'
import { IOrder } from '../../interfaces'

interface OrderPagProps { 
  order: IOrder
}

const OrderPage: NextPage<OrderPagProps> = ({ order}) => {

  console.log(order)
  
  return (
    <ShopLayout
      title='Orden summary | 123456'
      pageDescription='Orden summary: 123456'
    >
      <>
        <Typography variant='h1' component='h1' my={ 4 }>
          Order: 123456
        </Typography>
        {/* <Chip
          sx={ { my: 2 } }
          label='Payment pending'
          variant='outlined'
          color='error'
          icon={ <CreditCardOffOutlined />}
        /> */}
        <Chip
          sx={ { my: 2 } }
          label='Paid order'
          variant='outlined'
          color='success'
          icon={ <CreditScoreOutlined /> }
        />
        <Grid container spacing={ 2 }>
          <Grid item xs={ 12 } sm={ 7 }>
            <CartList />
          </Grid>
          <Grid item xs={ 12 } sm={ 5 }>
            <Card className='summary-card'>
              <CardContent>
                <Typography variant='h2' mb={ 4 }>
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
                <Box sx={ { mt: 2 } }>
                  { /* TODO */ }
                  <h1>Pay</h1>
                  <Chip
                    sx={ { my: 2 } }
                    label='Paid order'
                    variant='outlined'
                    color='success'
                    icon={ <CreditScoreOutlined /> }
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    </ShopLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

  const { id = '' } = query

  const session: any = await getSession({ req })

  // Case the is not a session
  if (!session) {
    return {
      redirect: {
        destination: `/auth/login?p=/orders/${ id }`,
        permanent: false,
      }
    }
  }

  const order = await dbOrders.getOrderById(id.toString())

  if (!order) {
    return {
      redirect: {
        destination: '/orders/history',
        permanent: false,
      }
    }
  }

  if (order.user !== session.user._id) {
    return {
      redirect: {
        destination: '/orders/history',
        permanent: false,
      }
    }
  }

  return {
    props: {
      order
    }
  }
}

export default OrderPage
