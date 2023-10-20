import { NextPage } from 'next'
import { Typography } from '@mui/material'

import ShopLayout from '../components/layouts/ShopLayout'
import { initialData } from '../database/products'
import ProductList from '../components/products/ProductList'

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={ 'Oh-la-la-Shoes | Home' }
      pageDescription='Find the beast shoes at the beast price'
    >
      <>
        <Typography variant='h1' component='h1'>
          Shop
        </Typography>
        <Typography variant='h2' sx={ { mb: 1 } }>
          All products
        </Typography>
        <ProductList
          products={ initialData.products as any }
        />
      </>
    </ShopLayout>
  )
}

export default Home
