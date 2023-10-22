import React from 'react'
import { Typography } from '@mui/material'
import ShopLayout from '../../components/layouts/ShopLayout'

const AddressPage = () => {
  return (
    <ShopLayout
      title='Checkout address'
      pageDescription='Confirm destination address'
    >
      <Typography variant='h1' component='h1'>
        Address
      </Typography>
    </ShopLayout>
  )
}

export default AddressPage