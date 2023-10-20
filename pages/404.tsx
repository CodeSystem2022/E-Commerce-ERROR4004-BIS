import React from 'react'
import {  Box, Typography } from '@mui/material'
import ShopLayout from '../components/layouts/ShopLayout'

const Custom404 = () => {
  return (
    <ShopLayout
      title='Oh-la-la-Shoes | Not Found'
      pageDescription='Nothing to show here'
    >
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={ { flexDirection: {xs: 'column', sm: 'row'} }}
      >
        <Typography
          variant='h1'
          component='h1'
          fontSize='60px'
          fontWeight='400'
          display='flex'
        >
          404
          <Box
            component='span'
            sx={ { display: {xs: 'none', sm:'block'} }}
          >
            |
          </Box>
        </Typography>
        <Typography
          marginLeft={2}
        >
          No products found
        </Typography>
      </Box>
    </ShopLayout>
  )
}

export default Custom404