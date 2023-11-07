import { NextPage } from 'next'
import { Typography } from '@mui/material'
import ShopLayout from '../components/layouts/ShopLayout'
import ProductList from '../components/products/ProductList'
import { useProducts } from '../hooks'
import FullScreenLoading from '../components/ui/FullScreenLoading'

const HomePage: NextPage = () => {

  const { products, isLoading } = useProducts('/products')

  return (
    <ShopLayout
      title={ 'Oh-la-la-Shoes | Home' }
      pageDescription='Find the best shoes at the best price'
    >
      <>
        <Typography variant='h1' component='h1' my={ 1 }>
          Shop
        </Typography>
        <Typography variant='h2' component='h2' sx={ { mb: 2 } }>
          All products
        </Typography>
        {
          isLoading ?
            <FullScreenLoading />
            :
            <ProductList products={ products } />
        }
      </>
    </ShopLayout>
  )
}

export default HomePage
