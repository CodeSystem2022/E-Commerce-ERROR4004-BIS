import NextLink from 'next/link'

import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box,  Typography } from '@mui/material'
import ShopLayout from '../../components/layouts/ShopLayout'

const EmptyPage = () => {
  return (
    <ShopLayout
      title='Empty Shopping Cart'
      pageDescription='No items in the shopping cart'
    >
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={ { flexDirection: { xs: 'column', sm: 'row' } } }
      >
        <RemoveShoppingCartOutlined
          sx={ { fontSize: 100 } }
          color='secondary'
        />
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          gap='12px'
        >
          <Typography>No items in the shopping cart</Typography>
          <NextLink href='/' passHref className='btn-link-primary-link'>
            <Typography
              className='btn-link-primary'
            >
              Back to store
            </Typography>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  )
}

export default EmptyPage