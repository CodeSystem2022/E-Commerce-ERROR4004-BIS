import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import { PayPalButtons } from '@paypal/react-paypal-js'

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

const OrderPage: NextPage<OrderPagProps> = ({ order }) => {

  const { shippingAddress } = order

  return (
    <ShopLayout
      title='Orden summary'
      pageDescription={ `Orden summary: ${ order._id }` }
    >
      <>
        <Typography variant='h1' component='h1' my={ 4 }>
          Order: { order._id }
        </Typography>
        {
          order.isPaid ?
            (
              <Chip
                sx={ { my: 2 } }
                label='Paid order'
                variant='outlined'
                color='success'
                icon={ <CreditScoreOutlined /> }
              />
            )
            :
            (
              <Chip
                sx={ { my: 2 } }
                label='Payment pending'
                variant='outlined'
                color='error'
                icon={ <CreditCardOffOutlined /> }
              />
            )
        }
        <Grid container spacing={ 2 } className='fadeIn'>
          <Grid item xs={ 12 } sm={ 7 }>
            <CartList products={ order.orderItems } />
          </Grid>
          <Grid item xs={ 12 } sm={ 5 }>
            <Card className='summary-card'>
              <CardContent>
                <Typography variant='h2' mb={ 4 }>
                  Summary ({ order.numberOfItems } { order.numberOfItems > 1 ? 'products' : 'product' })
                </Typography>
                <Divider sx={ { my: 1 } } />
                <Box display='flex' justifyContent='space-between' my={ 1 }>
                  <Typography variant='subtitle1' >
                    Delivery address
                  </Typography>
                </Box>
                <Typography>{ shippingAddress.firstName } { shippingAddress.lastName }</Typography>
                <Typography>{ shippingAddress.address } { shippingAddress.address2 ? `, ${ shippingAddress.address2 }` : '' }</Typography>
                <Typography>{ shippingAddress.city }, { shippingAddress.zip }</Typography>
                <Typography>{ shippingAddress.country }</Typography>
                <Typography>{ shippingAddress.phone }</Typography>
                <Divider sx={ { my: 2 } } />
                <OrderSummary
                  orderValues={ {
                    numberOfItems: order.numberOfItems,
                    subTotal: order.subTotal,
                    total: order.total,
                    tax: order.tax
                  } }
                />
                <Box sx={ { mt: 2 } } display='flex' flexDirection='column'>
                  {
                    order.isPaid ?
                      (
                        <Chip
                          sx={ { my: 2 } }
                          label='Paid order'
                          variant='outlined'
                          color='success'
                          icon={ <CreditScoreOutlined /> }
                        />
                      )
                      :
                      (
                        <PayPalButtons
                          createOrder={ (data, actions) => {

                            return actions.order.create({
                              purchase_units: [
                                {
                                  amount: {
                                    value: `${ order.total }`,
                                  },
                                },
                              ],
                            })

                          } }

                          onApprove={ (data, actions) => {

                            return actions.order!.capture().then((details) => {
                              console.log({ details })
                              const name = details.payer.name.given_name
                            })

                          } }
                        />
                      )
                  }
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
