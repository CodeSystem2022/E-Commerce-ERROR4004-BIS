import { GetServerSideProps, NextPage } from 'next'

import { Box, Card, CardContent, Chip, Divider, Grid, Typography, } from '@mui/material'
import { AirplaneTicketOutlined, CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'

import CartList from '../../../components/cart/CartList'
import OrderSummary from '../../../components/cart/OrderSummary'
import { dbOrders } from '../../../database'
import { IOrder } from '../../../interfaces'
import AdminLayout from '../../../components/layouts/AdminLayout'

interface OrderPagProps {
  order: IOrder
}

const OrderPage: NextPage<OrderPagProps> = ({ order }) => {

  const { shippingAddress } = order

  return (
    <AdminLayout
      title='Order summary'
      subTitle={ `Order id: ${ order._id }` }
      icon={ <AirplaneTicketOutlined />}
    >
      <>
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
                  <Box display='flex' flexDirection='column'>
                    {
                      order.isPaid ?
                        (
                          <Chip
                            sx={ { my: 2, flex: 1, p: 0.75 } }
                            label='Paid order'
                            variant='outlined'
                            color='success'
                            icon={ <CreditScoreOutlined /> }
                          />
                        )
                        :
                        (
                          <Chip
                            sx={ { my: 2, flex: 1, p: 0.75 } }
                            label='Payment pending'
                            variant='outlined'
                            color='error'
                            icon={ <CreditCardOffOutlined /> }
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
    </AdminLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

  const { id = '' } = query

  const order = await dbOrders.getOrderById(id.toString())

  if (!order) {
    return {
      redirect: {
        destination: 'admin/orders',
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
