import React, { useState, useEffect } from 'react'

import { Grid, Select, MenuItem } from '@mui/material'
import { PeopleOutline } from '@mui/icons-material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import AdminLayout from '../../components/layouts/AdminLayout'
import useSWR from 'swr'
import { IUser } from '../../interfaces'
import { ohlalaApi } from '../../api'

const UsersPage = () => {

  const { data, error } = useSWR<IUser[]>('/api/admin/users')
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    if (data) {
      setUsers(data)
    }
  }, [data])

  if (!data && !error) return <></>

  const onRoleUpdated = async (userId: string, newRole: string) => {

    const previousUsers = users.map(user => ({ ...user }))
    const updatedUsers = users.map(user => ({
      ...user,
      role: userId === user._id ? newRole : user.role
    }))

    setUsers(updatedUsers)

    try {
      await ohlalaApi.put('/admin/users', { userId, role: newRole })

    } catch (error) {
      setUsers(previousUsers)
      alert(`The user role could not be changed: ${ error }`)
    }

  }

  const rows = users.map(user => ({
    id: user._id,
    email: user.email,
    name: user.name,
    role: user.role
  }))

  const columns: GridColDef[] = [
    {
      field: 'email',
      headerName: 'E-Mail',
      width: 250,
      description: "User's email"
    },
    {
      field: 'name',
      headerName: 'Full name',
      width: 280,
      description: "User's full name"
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 280,
      description: "User's role",

      renderCell: (params) => {
        return (
          <Select
            value={ params.row.role }
            label='Role'
            onChange={ ({ target }) => onRoleUpdated(params.row.id, target.value) }
            sx={ { width: '300px' } }
          >
            <MenuItem value='admin'>Admin</MenuItem>
            <MenuItem value='client'>Client</MenuItem>
            <MenuItem value='super-user'>Super user</MenuItem>
            <MenuItem value='SEO'>SEO</MenuItem>
          </Select>
        )
      }
    }
  ]

  return (
    <AdminLayout
      title='Users'
      subTitle='Maintenance of users'
      icon={ <PeopleOutline /> }
    >
      <Grid
        container
        className='fadeIn'
        justifyContent='center'
        width='100%'
      >
        <Grid
          item
          xs={ 12 }
          md={ 9 }
          lg={ 7 }
          sx={ { height: '530px', width: '100%' } }
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