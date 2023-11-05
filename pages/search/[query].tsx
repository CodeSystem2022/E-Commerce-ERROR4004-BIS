import { GetServerSideProps, NextPage } from 'next'

import { Box, Typography } from '@mui/material'

import ShopLayout from '../../components/layouts/ShopLayout'
import ProductList from '../../components/products/ProductList'
import { IProduct } from '../../interfaces'
import { dbProducts } from '../../database'

interface SearchPageProps {
  products: IProduct[]
  foundProducts: boolean
  query: string
}

const SearchPage: NextPage<SearchPageProps> = ({
  products,
  foundProducts,
  query
}) => {

  return (
    <ShopLayout
      title={ 'Oh-la-la-Shoes | Search' }
      pageDescription='Find the best shoes at the best price'
    >
      <>
        <Typography variant='h1' component='h1'>
          Search products
        </Typography>
        {
          foundProducts ?
            <Typography
              variant='h2'
              component='h2'
              textTransform='capitalize'
              sx={ { mb: 1 } }
            >
              { query }
            </Typography>
            :
            <>
              <Typography variant='h2' component='h2' sx={ { mb: 1 } }>
                No products found:
                <Box
                  component='span'
                  color='#3A64D8'
                  mx={ 1 }
                  textTransform='capitalize'
                >
                  { query }
                </Box>
              </Typography>
            </>
        }
        <ProductList products={ products } />
      </>
    </ShopLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const { query = '' } = params as { query: string }

  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

  let products = await dbProducts.getProductsByTerm(query)
  const foundProducts = products.length > 0

  if (!foundProducts) {
    products = await dbProducts.getAllProducts()
  }

  return {
    props: {
      products,
      foundProducts,
      query
    }
  }
}

export default SearchPage
