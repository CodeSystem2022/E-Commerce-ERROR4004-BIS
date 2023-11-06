import React from 'react'

import NextLink from 'next/link'

import useSWR from 'swr'

import { CardMedia, Grid } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { CategoryOutlined } from '@mui/icons-material'

import AdminLayout from '../../components/layouts/AdminLayout'
import { IProduct } from '../../interfaces'

const columns: GridColDef[] = [
  {
    field: 'img',
    headerName: 'Photo',
    description: 'Photo of the product',
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
            image={ `/products/${ params.row.img }` }
          />
        </a>
      )
    }
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 250,
    description: 'Title of the product',
    renderCell: (params) => {
      return (
        <NextLink
          href={ `/admin/products/${params.row.slug}`}
        >
          <span>{ params.row.title}</span>
        </NextLink>
      )
    }
  },
  {
    field: 'gender',
    headerName: 'Gender',
    description: 'Gender of the product'
  },
  {
    field: 'type',
    headerName: 'Type',
    description: 'Type of product'
  },
  {
    field: 'inStock',
    headerName: 'Inventary',
    description: 'Amount of products'
  },
  {
    field: 'price',
    headerName: 'Price',
    description: "Product's price"
  },
  {
    field: 'sizes',
    headerName: 'Sizes',
    description: "Product's sizes",
    width: 280
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

export default ProductsPage