import React from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import { PeopleOutline } from '@mui/icons-material'

const UsersPage = () => {
  return (
    <AdminLayout
      title='Users'
      subTitle=''
      icon={ <PeopleOutline />}
    >
      <h1>hola</h1>
    </AdminLayout>
  )
}

export default UsersPage