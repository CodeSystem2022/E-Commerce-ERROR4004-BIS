import React from 'react'

import useSWR from 'swr'

import { Chip, Grid } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { ConfirmationNumberOutlined } from '@mui/icons-material'

import AdminLayout from '../../components/layouts/AdminLayout'
import { IOrder, IUser } from '../../interfaces'
import { formatToUSD } from '../../utils/currency'

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Order ID',
    width: 250,
    description: 'Order ID'
  },
  {
    field: 'total',
    headerName: 'Total',
    width: 180,
    description: "Order's total",
    renderCell: (params) => {
      return (
        formatToUSD(params.row.total)
      )
    }
  },
  {
    field: 'isPaid',
    headerName: 'Paid',
    width: 180,
    description: "Order's total",
    sortable: false,
    renderCell: (params) => {
      return (
        params.row.isPaid ?
          <Chip color='success' label='Paid' variant='outlined' />
          :
          <Chip color='error' label='Pending' variant='outlined' />
      )
    }
  },
  {
    field: 'noProducts',
    headerName: 'No.Products',
    align: 'center',
    width: 160,
    description: "Order's total amount of products"
  },
  {
    field: 'check',
    headerName: 'See order',
    width: 160,
    description: "Order's total",
    sortable: false,
    renderCell: (params) => {
      return (
        <a href={ `/admin/orders/${ params.row.id }` } target="_blank" rel="noreferrer">
          See order
        </a>
      )
    }
  },
  {
    field: 'createdAt',
    headerName: 'Created at',
    width: 260,
    description: "Order created at"
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 300,
    description: 'Email'
  },
  {
    field: 'name',
    headerName: 'Full name',
    width: 300,
    description: 'Full name'
  }
]

const OrdersPage = () => {

  const { data, error } = useSWR<IOrder[]>('/api/admin/orders')

  if (!data && !error) return <></>

  const rows = data!.map(order => ({
    id: order._id,
    total: order.total,
    isPaid: order.isPaid,
    noProducts: order.numberOfItems,
    createdAt: order.createdAt,
    email: (order.user as IUser)?.email ? (order.user as IUser)?.email : '',
    name: (order.user as IUser)?.name ? (order.user as IUser)?.name : '',
  }))

  return (
    <AdminLayout
      title='Orders'
      subTitle='Maintenance of orders'
      icon={ <ConfirmationNumberOutlined /> }
    >
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
    </AdminLayout>
  )
}

export default OrdersPage