import { NextPage } from 'next'
import { Typography } from '@mui/material'
import ShopLayout from '../../components/layouts/ShopLayout'
import ProductList from '../../components/products/ProductList'
import { useProducts } from '../../hooks'
import FullScreenLoading from '../../components/ui/FullScreenLoading'

const MenPage: NextPage = () => {

  const { products, isLoading } = useProducts('/products?gender=men')

  return (
    <ShopLayout
      title={ 'Oh-la-la-Shoes | Men' }
      pageDescription='Find the best shoes at the best price for men'
    >
      <>
        <Typography variant='h1' component='h1'>
          Men
        </Typography>
        <Typography variant='h2' component='h2' sx={ { mb: 1 } }>
          Products for men
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

export default MenPage