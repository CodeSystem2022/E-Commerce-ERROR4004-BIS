import React, { FC } from 'react'
import NextLink from 'next/link'

import { Box, Button, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import { initialData } from '../../database/products'
import ItemCounter from '../ui/ItemCounter'


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface CartListPorps {
  editable?: boolean
}

const CartList: FC<CartListPorps> = ({ editable = false }) => {
  return (
    <>
      { productsInCart.map((product) => (
        <Grid container spacing={ 2 } key={ product.slug } sx={ { mb: 4 } }>
          <Grid item xs={ 3 }>
            <NextLink href='/product/slug' passHref>
              { /* TODO: llevar a la pagina del producto*/ }
              <CardActionArea>
                <CardMedia
                  image={ `/products/${ product.images[0] }` }
                  component='img'
                  sx={ { borderRadius: '12px', objectFit: 'contain' } }
                  height='140px'
                  width='100%'
                />
              </CardActionArea>
            </NextLink>
          </Grid>
          <Grid item xs={ 7 }>
            <Box display='flex' flexDirection='column'>
              <Typography variant='h2'>
                { product.title }
              </Typography>
              <Typography variant='body1'>
                Size: <strong>40</strong>
              </Typography>
              {
                editable ?
                  <ItemCounter />
                  :
                  <Typography variant='body1'><strong>3 items</strong></Typography>
              }
            </Box>
          </Grid>
          <Grid
            item
            xs={ 2 }
            display='flex'
            alignItems='center'
            flexDirection='column'
          >
            <Typography variant='subtitle1' mb={ 3 } textAlign='center'>
              <strong>{ `$${ product.price }` }</strong>
              { /* Editable*/ }
              {
                editable &&
                <Button color='secondary' variant='outlined'>
                  Remove
                </Button>
              }
            </Typography>
          </Grid>
        </Grid>
      )) }
    </>
  )
}

export default CartList