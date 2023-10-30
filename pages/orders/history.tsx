import React from 'react'
import NextLink from 'next/link'
import { Chip, Grid,  Typography } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import ShopLayout from '../../components/layouts/ShopLayout'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'fullName', headerName: 'Full Name', description: 'First Name and Last Name', width: 300 },
  {
    field: 'paid',
    headerName: 'Order paid',
    description: 'Shows if the order is paid or not',
    width: 140,
    // renderCell: (params: GridValueGetterParams ) => {
    renderCell: (params) => {
      return (
        params.row.paid ?
          <Chip color='success' label='Pay - ok' variant='outlined' />
          :
          <Chip color='error' label='Pay - no ok' variant='outlined' />
      )
    }
  },
  {
    field: 'order',
    headerName: 'Order',
    width: 120,
    sortable: false,
    renderCell: (params) => {
      return (
        <NextLink
          href={ `/orders/${ params.row.id }` }
          passHref
          style={ {
            textDecoration: 'none',
            fontWeight: '600',
            textTransform: 'uppercase'
          } }
        >
          See order
        </NextLink>
      )
    }
  },
]

const rows = [
  { id: 1, paid: false, fullName: 'María Eugenia Costa' },
  { id: 2, paid: true, fullName: 'Melisa Flores' },
  { id: 3, paid: false, fullName: 'Andrés Rodriguez' },
  { id: 4, paid: true, fullName: 'Analía Bruni' },
  { id: 5, paid: false, fullName: 'Rodrigo Suarez' }
]

const HistoryPage = () => {
  return (
    <ShopLayout
      title='Orders history'
      pageDescription="Client's orders history"
    >
      <>
        <Typography variant='h1' component='h1' my={ 3 }>
          Orders history
        </Typography>
        <Grid container>
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

export default HistoryPage