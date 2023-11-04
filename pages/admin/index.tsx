import React from 'react'

import { DashboardOutlined } from '@mui/icons-material'

import AdminLayout from '../../components/layouts/AdminLayout'

const DashboardPage = () => {
  return (
    <AdminLayout
      title='Dashboard'
      subTitle='General Stadistics'
      icon={ <DashboardOutlined /> }
    >
      <h3>Hi</h3>
    </AdminLayout>
  )
}

export default DashboardPage