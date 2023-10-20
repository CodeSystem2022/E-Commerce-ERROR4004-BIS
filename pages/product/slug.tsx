import React from 'react'

import { Box, Button, Chip, Grid, Typography } from '@mui/material'
import ShopLayout from '../../components/layouts/ShopLayout'
import { initialData } from '../../database/products'
import ProductSlideshow from '../../components/products/ProductSlideshow'
import ItemCounter from '../../components/ui/ItemCounter'
import SizeSelector from '../../components/products/SizeSelector'

const product = initialData.products[0]

const ProductPage = () => {
  return (
    <ShopLayout
      title={ product.title }
      pageDescription={ product.title }
    >
      <Grid container spacing={ 3 }>
        <Grid item xs={ 12 } sm={ 7 }>
          <ProductSlideshow images={product.images} />
        </Grid>
        <Grid item xs={ 12 } sm={ 5 }>
          <Box display='flex' flexDirection='column'>
            <Typography variant='h1' component='h1'>
              { product.title }
            </Typography>
            <Typography variant='subtitle1' component='h2'>
              { `$${ product.price }` }
            </Typography>
            <Box sx={ { my: 2 } }>
              <Typography variant='subtitle2'>
                Amount
              </Typography>
              <ItemCounter />
              <SizeSelector
                // selectedSize={product.sizes[3]}
                sizes={product.sizes }
              />
            </Box>
            <Button color='secondary' className='circular-btn'>
              Add to shopping cart
            </Button>
            {/* <Chip label='No stock' color='error' variant='outlined' /> */ }
            <Box sx={ { mt: 3 } }>
              <Typography variant='subtitle2'>
                Description
              </Typography>
              <Typography variant='body2'>
                { product.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default ProductPage