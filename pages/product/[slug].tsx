import React, { useContext, useState } from 'react'

import { useRouter } from 'next/router'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

import { CartContext } from '../../context'

import { Box, Button, Chip, Grid, Typography } from '@mui/material'

import { IProduct, ISize } from '../../interfaces'
import { ICartProduct } from '../../interfaces/cart'
import ShopLayout from '../../components/layouts/ShopLayout'
import ProductSlideshow from '../../components/products/ProductSlideshow'
import ItemCounter from '../../components/ui/ItemCounter'
import SizeSelector from '../../components/products/SizeSelector'
import { dbProducts } from '../../database'

interface ProductPageProps {
  product: IProduct
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {

  const router = useRouter()
  const { addProductToCart } = useContext(CartContext)

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

  const onUpdateQuantity = (quantity: number) => {
    setTempCartProduct(currentProduct => ({
      ...currentProduct,
      quantity
    }))
  }

  const onAddProduct = () => {
    if (!tempCartProduct.size) {
      return
    }

    addProductToCart(tempCartProduct)
    router.push('/cart')
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
            <Typography variant='subtitle1'>
              { `$${ product.price }` }
            </Typography>
            <Box sx={ { my: 2 } }>
              <Typography variant='subtitle2'>
                Amount
              </Typography>
              <ItemCounter
                currentValue={ tempCartProduct.quantity }
                updatedQuantity={ onUpdateQuantity }
                maxValue={ product.inStock > 5 ? 5 : product.inStock }
              />
              <SizeSelector
                sizes={ product.sizes }
                selectedSize={ tempCartProduct.size }
                onSelectedSize={ selectedSize }
              />
            </Box>
            {
              (product.inStock > 0) ?
                (
                  <Button
                    color='secondary'
                    className='circular-btn'
                    onClick={ onAddProduct }
                    aria-label='select a size and the add to cart'
                    sx={ { py: 1 } }
                  >
                    {
                      tempCartProduct.size
                        ? 'Add to shopping cart'
                        : 'Select a size first'
                    }
                  </Button>
                )
                : (
                  <Chip label='No stock' color='error' variant='filled' />
                )
            }
            <Box sx={ { mt: 3 } }>
              <Typography variant='subtitle2' my={ 1 }>
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
    fallback: 'blocking'
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