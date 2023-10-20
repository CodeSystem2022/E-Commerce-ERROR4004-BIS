import React, { FC, useState, useMemo } from 'react'
import NextLink from 'next/link'

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography
} from '@mui/material'

import { IProduct } from '../../interfaces'

interface ProductCardPorps {
  product: IProduct
}

const ProductCard: FC<ProductCardPorps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)

  const productImage = useMemo(() => {
    return isHovered
      ? `products/${ product.images[0] }`
      : `products/${ product.images[1] }`
  }, [isHovered, product.images])

  return (
    <Grid
      item
      xs={ 6 }
      sm={ 4 }
      md={ 3 }
      onMouseEnter={ () => setIsHovered(true) }
      onMouseLeave={ () => setIsHovered(false) }
    >
      <Card>
        <NextLink href='/product/slug' passHref prefetch={ false}>
          <CardActionArea>
            <CardMedia
              className='fadeIn'
              component='img'
              image={ productImage }
              alt={ product.title }
            />
          </CardActionArea>
        </NextLink>
      </Card>
      <Box sx={ { mt: 1 } } className='fadeIn'>
        <Typography fontWeight={ 700 }>
          { product.title }
        </Typography>
        <Typography fontWeight={ 500 }>
          { `$ ${ product.price }` }
        </Typography>
      </Box>
    </Grid>
  )
}

export default ProductCard 
