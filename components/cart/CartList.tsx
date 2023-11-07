import React, { FC, useContext } from 'react'
import NextLink from 'next/link'
import { Box, Button, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import ItemCounter from '../ui/ItemCounter'
import { CartContext } from '../../context'
import { ICartProduct, IOrderItem } from '../../interfaces'

interface CartListPorps {
  editable?: boolean
  products?: IOrderItem[]
}

const CartList: FC<CartListPorps> = ({ editable = false, products }) => {

  const { cart, updateCartQuantity, removeCartProduct } = useContext(CartContext)

  const onNewCartQuantityValue = (product: ICartProduct, newQuantityValue: number) => {
    product.quantity = newQuantityValue
    updateCartQuantity(product)
  }

  const productsToShow = products ? products : cart

  return (
    <>
      {
        productsToShow.map(product => (
          <Grid
            container
            spacing={ 2 }
            key={ product.slug + product.size }
            sx={ { mb: 4 } }
          >
            <Grid item xs={ 6 } sm={ 3 }>
              <NextLink
                href={ `/product/${ product.slug }` }
                passHref
              >
                <CardActionArea>
                  <CardMedia
                    image={ product.image }
                    component='img'
                    sx={ {
                      borderRadius: '12px',
                      objectFit: 'contain'
                    } }
                    height='140px'
                    width='100%'
                    alt={ product.title }
                  />
                </CardActionArea>
              </NextLink>
            </Grid>
            <Grid item xs={ 5 } sm={ 6 }>
              <Box display='flex' flexDirection='column'>
                <Typography variant='h2' component='h2'>
                  { product.title }
                </Typography>
                <Typography variant='body1'>
                  Size: <strong>{ product.size }</strong>
                </Typography>
                {
                  editable ?
                    (
                      <ItemCounter
                        currentValue={ product.quantity }
                        maxValue={ 10 }
                        updatedQuantity={ (value) => onNewCartQuantityValue(product as ICartProduct, value) }
                      />
                    )
                    :
                    <Typography variant='body1'>
                      <strong>
                        { product.quantity } { product.quantity > 1 ? 'items' : 'item' }
                      </strong>
                    </Typography>
                }
              </Box>
            </Grid>
            <Grid
              item
              xs={ 12 }
              sm={ 3 }
              display='flex'
              alignContent='center'
              justifyContent='flex-start'
              alignItems='center'
              flexDirection='column'
            >
              <Typography variant='subtitle1' mb={ 3 } textAlign='center'>
                <strong>{ `$${ product.price }` }</strong>
              </Typography>
              {
                editable &&
                <Button
                  color='secondary'
                  variant='outlined'
                  aria-label='remove'
                  onClick={ () => removeCartProduct(product as ICartProduct) }
                >
                  Remove
                </Button>
              }
            </Grid>
          </Grid>
        )) }
    </>
  )
}

export default CartList