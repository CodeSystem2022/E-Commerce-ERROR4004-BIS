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
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${ product.images[0] }`
      : `/products/${ product.images[1] }`
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
        <NextLink href={ `/product/${product.slug}`} passHref prefetch={ false }>
          <CardActionArea
            sx={ {
              height: {
                xs: '130px',
                sm: '200px'
              }
            } }
          >
            <CardMedia
              className='fadeIn'
              component='img'
              image={ productImage }
              alt={ product.title }
              sx={ {
                height: {
                  xs: '110px',
                  sm: '180px'
                },
                objectFit: 'contain'
              } }
              onLoad={ () => setIsImageLoaded(true) }
            />
          </CardActionArea>
        </NextLink>
      </Card>
      <Box
        sx={ {
          mt: 1,
          display: isImageLoaded ? 'block' : 'none'
        } }
        className='fadeIn'
      >
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
