import React from 'react'

import { Grid } from '@mui/material'
import { PeopleOutline } from '@mui/icons-material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

import AdminLayout from '../../components/layouts/AdminLayout'
import useSWR from 'swr'
import { IUser } from '../../interfaces'

const UsersPage = () => {

  const { data, error } = useSWR<IUser>('/api/admin/users')

  if (!data && !error) return <></>

  const rows = data!.map(user => ({
    id: user._id,
    email: user.email,
    name: user.name,
    role: user.role
  }))  

  const columns: GridColDef[] = [
    { field: 'email', headerName: 'E-Mail', width: 250 },
    { field: 'name', headerName: 'Full name', width: 300 },
    { field: 'role', headerName: 'role', width: 200 }
  ]

  return (
    <AdminLayout
      title='Users'
      subTitle=''
      icon={ <PeopleOutline /> }
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

export default UsersPage