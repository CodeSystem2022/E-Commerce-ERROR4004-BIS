import React, { FC } from 'react'
import { Grid } from '@mui/material'

import { IProduct } from '../../interfaces'
import ProductCard from './ProductCard'

interface ProductListPorps {
  products: IProduct[]
}

const ProductList: FC<ProductListPorps> = ({ products }) => {
  return (
    <Grid container spacing={ 4 }>
      { products.map(product => (
        <ProductCard
          key={ product.slug }
          product={ product }
        />
      )) }
    </Grid>
  )
}

export default ProductList