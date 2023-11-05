import React from 'react'

import AdminLayout from '../../components/layouts/AdminLayout'
import { ConfirmationNumberOutlined } from '@mui/icons-material'

const OrdersPage = () => {
  return (
    <AdminLayout
      title='Orders'
      subTitle='Maintenance of orders'
      icon={ <ConfirmationNumberOutlined /> }
    >
      <h2>Orders</h2>
    </AdminLayout>
  )
}

export default OrdersPage