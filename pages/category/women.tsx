import { NextPage } from 'next'
import { Typography } from '@mui/material'
import ShopLayout from '../../components/layouts/ShopLayout'
import ProductList from '../../components/products/ProductList'
import { useProducts } from '../../hooks'
import FullScreenLoading from '../../components/ui/FullScreenLoading'

const WomenPage: NextPage = () => {

  const { products, isLoading } = useProducts('/products?gender=women')

  return (
    <ShopLayout
      title={ 'Oh-la-la-Shoes | Women' }
      pageDescription='Find the best shoes at the best price for women'
    >
      <>
        <Typography variant='h1' component='h1'>
          Women
        </Typography>
        <Typography variant='h2' component='h2' sx={ { mb: 1 } }>
          Products for women
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

export default WomenPage