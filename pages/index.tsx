import { NextPage } from 'next'
import { Typography } from '@mui/material'

import ShopLayout from '../components/layouts/ShopLayout'
import { initialData } from '../database/products'
import ProductList from '../components/products/ProductList'

import useSWR from 'swr'

const fetcher = (...args: [key: string]) => fetcher(...args).then(res => res.json())

const HomePage: NextPage = () => {

  const { data, error } = useSWR('/api/products', fetcher)

  if (error) return <div>Fail to load</div>
  if (!data) return <div>Loading...</div>

  console.log({ data })

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

export default HomePage
