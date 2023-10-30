import { NextPage } from 'next'
import { Typography } from '@mui/material'
import ShopLayout from '../../components/layouts/ShopLayout'
import ProductList from '../../components/products/ProductList'
import { useProducts } from '../../hooks'
import FullScreenLoading from '../../components/ui/FullScreenLoading'

const KidsPage: NextPage = () => {

  const { products, isLoading } = useProducts('/products?gender=kid')

  return (
    <ShopLayout
      title={ 'Oh-la-la-Shoes | Kids' }
      pageDescription='Find the best shoes at the best price for your kids'
    >
      <>
        <Typography variant='h1' component='h1'>
          Kids
        </Typography>
        <Typography variant='h2' sx={ { mb: 1 } }>
          Products for kids
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

export default KidsPage