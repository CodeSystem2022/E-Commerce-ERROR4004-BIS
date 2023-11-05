import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import NextLink from 'next/link'

import { Chip, Grid, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import { getSession } from 'next-auth/react'
import ShopLayout from '../../components/layouts/ShopLayout'
import { dbOrders } from '../../database'
import { IOrder } from '../../interfaces'

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    description: 'Order ID'
  },
  {
    field: 'fullname',
    headerName: 'Full Name',
    description: 'First Name and Last Name',
    width: 300
  },
  {
    field: 'paid',
    headerName: 'Order paid',
    description: 'Shows if the order is paid or not',
    width: 140,
    renderCell: (params) => {
      return (
        params.row.paid ?
          <Chip color='success' label='Paid' variant='outlined' />
          :
          <Chip color='error' label='Not paid' variant='outlined' />
      )
    }
  },
  {
    field: 'order',
    headerName: 'Order',
    width: 280,
    sortable: false,
    renderCell: (params) => {
      return (
        <NextLink
          href={ `/orders/${ params.row.orderId }` }
          passHref
          style={ {
            textDecoration: 'none',
            fontWeight: '600',
            textTransform: 'uppercase'
          } }
        >
          { params.row.orderId }
        </NextLink>
      )
    }
  },
]

interface HistoryPagePorps {
  orders: IOrder[]
}

const HistoryPage: NextPage<HistoryPagePorps> = ({ orders }) => {

  const rows = orders.map((order, index) => ({
    id: index + 1,
    paid: order.isPaid,
    fullname: `${ order.shippingAddress.firstName } ${ order.shippingAddress.lastName }`,
    orderId: order._id
  }))

  return (
    <ShopLayout
      title='Orders history'
      pageDescription="Client's orders history"
    >
      <>
        <Typography variant='h1' component='h1' my={ 3 }>
          Orders history
        </Typography>
        <Grid container className='fadeIn'>
          <Grid
            item
            xs={ 12 }
            sx={ { height: '650px', width: '100%' } }
          >
            <DataGrid
              rows={ rows }
              columns={ columns }
              autoPageSize
            />
          </Grid>
        </Grid>
      </>
    </ShopLayout>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ req }) => {

  const session: any = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login?p=/orders/history',
        permanent: false
      }
    }
  }

  const orders = await dbOrders.getOrdersByUser(session.user._id)

  return {
    props: {
      orders
    }
  }
}

export default HistoryPage