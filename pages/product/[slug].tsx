import React, { useState } from 'react'

import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

import { Box, Button, Chip, Grid, Typography } from '@mui/material'

import { IProduct, ISize } from '../../interfaces'

import ShopLayout from '../../components/layouts/ShopLayout'
import ProductSlideshow from '../../components/products/ProductSlideshow'
import ItemCounter from '../../components/ui/ItemCounter'
import SizeSelector from '../../components/products/SizeSelector'
import { dbProducts } from '../../database'
import { ICartProduct } from '@/interfaces/cart'

interface ProductPageProps {
  product: IProduct
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>(
    {
      _id: product._id,
      image: product.images[0],
      price: product.price,
      size: undefined,
      slug: product.slug,
      title: product.title,
      gender: product.gender,
      quantity: 1
    }
  )

  const selectedSize = (size: ISize) => {
    setTempCartProduct(currentProduct => ({
      ...currentProduct,
      size
    }))
  }

  return (
    <ShopLayout
      title={ product.title }
      pageDescription={ product.title }
    >
      <Grid container spacing={ 3 } my={ 3 }>
        <Grid item xs={ 12 } sm={ 7 }>
          <ProductSlideshow images={ product.images } />
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
                sizes={ product.sizes }
                selectedSize={ tempCartProduct.size }
                onSelectedSize={ selectedSize }
              />
            </Box>
            {
              (product.inStock > 0)
                ? (
                  <Button color='secondary' className='circular-btn'>
                    {
                      tempCartProduct.size
                        ? 'Add to shopping cart'
                        : 'Select a size first!'
                    }
                  </Button>
                )
                : (
                  <Chip label='No stock' color='error' variant='outlined' />
                )
            }
            <Box sx={ { mt: 3 } }>
              <Typography variant='subtitle2'>
                Description
              </Typography>
              <Typography variant='body2'>
                { product.description }
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const productSlugs = await dbProducts.getAllProdcutsSlugs()

  return {
    paths: productSlugs.map(({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug = '' } = params as { slug: string }
  const product = await dbProducts.getProductBySlug(slug)

  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 86400
  }
}
export default ProductPage