import { GetServerSideProps, NextPage } from 'next'
import { Typography } from '@mui/material'

import ShopLayout from '../../components/layouts/ShopLayout'
import ProductList from '../../components/products/ProductList'
import Product from '../../models/Product';
import { dbProducts } from '@/database'
import { IProduct } from '@/interfaces'

interface Props {
    products : IProduct[];
}

const SearchPage: NextPage<Props> = ({ products }) => {


  return (
    <ShopLayout
      title={ 'Oh-la-la-Shoes | Search' }
      pageDescription='Find the best shoes at the best price'
    >
      <>
        <Typography variant='h1' component='h1'>
          Shop
        </Typography>
        <Typography variant='h2' sx={ { mb: 1 } }>
          All products
        </Typography>
        
        <ProductList products={ products } />
        
      </>
    </ShopLayout>
  )
} 

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    
    const {query = '' } = params as { query:string };

    if( query.length === 0){
        return{
            redirect: {
                destination: '/',
                permanent: true
            }
        }
    }

    let products = await dbProducts.getProductsByTerm( query );

    // TODO: retornar otros productos

    return {
        props: {
            products
        }
    }
}

export default SearchPage
