import React, { useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react'
import { PayPalButtons } from '@paypal/react-paypal-js'

import { Box, Card, CardContent, Chip, CircularProgress, Divider, Grid, Typography, } from '@mui/material'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'

import ShopLayout from '../../components/layouts/ShopLayout'
import CartList from '../../components/cart/CartList'
import OrderSummary from '../../components/cart/OrderSummary'
import { dbOrders } from '../../database'
import { IOrder } from '../../interfaces'
import { ohlalaApi } from '../../api'

export type OrderResponseBody = {
  id: string
  status:
  | 'COMPLETED'
  | 'SAVED'
  | 'APPROVED'
  | 'VOIDED'
  | 'PAYER_ACTION_REQUIRED'
  | 'CREATED'
}

interface OrderPagProps {
  order: IOrder
}

const OrderPage: NextPage<OrderPagProps> = ({ order }) => {

  const router = useRouter()
  const { shippingAddress } = order
  const [isPaying, setIsPaying] = useState(false)

  const onOrderCompleted = async (details: OrderResponseBody) => {

    if (details.status !== 'COMPLETED') {
      return alert('No payment at Paypal')
    }

    setIsPaying(true)

    try {
      const { data } = await ohlalaApi.post(`/orders/pay`, {
        transactionId: details.id,
        orderId: order._id
      })

      router.reload()

    } catch (error) {
      setIsPaying(false)
      console.log(error)
      alert('Error')
    }
  }

  return (
    <ShopLayout
      title='Order summary'
      pageDescription={ `Orden summary: ${ order._id }` }
    >
      <>
        <Typography variant='h1' component='h1' my={ 4 }>
          Order:
        </Typography>
        <Typography variant='subtitle1'>
          { order._id }
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
          <Grid item xs={ 11 } sm={ 6 }>
            <CartList products={ order.orderItems } />
          </Grid>
          <Grid item xs={ 11 } sm={ 5 }>
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
                  <Box
                    display='flex'
                    justifyContent='center'
                    className='fadeIn'
                    sx={ { display: isPaying ? 'flex' : 'none' } }
                  >
                    <CircularProgress
                      color='secondary'
                    />
                  </Box>
                  <Box
                    flexDirection='column'
                    sx={ { display: isPaying ? 'none' : 'flex', flex: 1 } }>
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
                                onOrderCompleted(details)
                              })

                            } }
                          />
                        )
                    }
                  </Box>
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
