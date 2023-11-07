import React from 'react'

import NextLink from 'next/link'

import useSWR from 'swr'

import { Box, Button, CardMedia, Grid } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { AddOutlined, CategoryOutlined } from '@mui/icons-material'

import AdminLayout from '../../components/layouts/AdminLayout'
import { IProduct } from '../../interfaces'
import { formatToUSD } from '../../utils/currency'

const columns: GridColDef[] = [
  {
    field: 'img',
    headerName: 'Photo',
    description: 'Photo of the product, if you click on the pic you can see the detail of the product',
    renderCell: (params) => {
      return (
        <a
          href={ `/product/${ params.row.slug }` }
          target="_blank"
          rel="noreferrer"
        >
          <CardMedia
            component='img'
            alt={ params.row.title }
            className='fadeIn'
            image={ params.row.img }
          />
        </a>
      )
    }
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 480,
    description: 'Title of the product, if you click in teh link you can edit the product',
    renderCell: (params) => {
      return (
        <NextLink
          href={ `/admin/products/${ params.row.slug }` }
        >
          <span>{ params.row.title }</span>
        </NextLink>
      )
    }
  },
  {
    field: 'gender',
    headerName: 'Gender',
    description: 'Gender of the product',
    align: 'center',
    renderCell: (params) => {
      return (
        <span>
          { `${ params.row.gender.toString().toUpperCase() }` }
        </span>
      )
    }
  },
  {
    field: 'type',
    headerName: 'Type',
    description: 'Type of product'
  },
  {
    field: 'inStock',
    headerName: 'Inventary',
    description: 'Amount of products',
    align: 'center',
  },
  {
    field: 'price',
    headerName: 'Price',
    description: "Product's price",
    width: 180,
    align: 'center',
    renderCell: (params) => {
      return (
        <span>
          { `${ formatToUSD(params.row.price) }` }
        </span>
      )
    }
  },
  {
    field: 'sizes',
    headerName: 'Sizes',
    description: "Product's sizes",
    width: 310
  },
]

const ProductsPage = () => {

  const { data, error } = useSWR<IProduct[]>('/api/admin/products')

  if (!data && !error) return <></>

  const rows = data!.map(product => ({
    id: product._id,
    img: product.images[0],
    title: product.title,
    gender: product.gender,
    type: product.type,
    inStock: product.inStock,
    price: product.price,
    sizes: product.sizes.join(', '),
    slug: product.slug
  }))

  return (
    <AdminLayout
      title={ `Products (${ data?.length })` }
      subTitle='Maintenance of products'
      icon={ <CategoryOutlined /> }
    >
      <>
        <Box display='flex' justifyContent='end' sx={ { mb: 3 } }>
          <Button
            aria-label='Create a new product'
            startIcon={ <AddOutlined /> }
            color='secondary'
            href='/admin/products/new'
            sx={ {
              textTransform: 'uppercase',
              '&:hover': {
                border: '1px solid #3A64D8',
                color: '#3A64D8'
              }
            } }
          >
            Create product
          </Button>
        </Box>
        <Grid container className='fadeIn'>
          <Grid
            item
            xs={ 12 }
            sx={ { height: '530px', width: '100%' } }
          >
            <DataGrid
              rows={ rows }
              columns={ columns }
              autoPageSize
            />
          </Grid>
        </Grid>
      </>
    </AdminLayout>
  )
}

export default ProductsPage