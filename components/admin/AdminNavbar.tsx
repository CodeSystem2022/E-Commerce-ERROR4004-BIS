import React, { useContext } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { UiContext } from '../../context'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

const AdminNavbar = () => {

  const { toggleSideMenu } = useContext(UiContext)

  return (
    <AppBar>
      <Toolbar>
        <NextLink
          href='/'
          passHref
          style={ {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'black'
          } }
        >
          <Image
            src='/logo/logo-name.png'
            alt='Oh-la-la-Shoes'
            width='50'
            height='50'
            style={ { borderRadius: '50%' } }
          />
          <Typography sx={ { ml: 0.5 } }>Shop</Typography>
        </NextLink>
        <Box flex={ 1 } />
        <Button
          onClick={ toggleSideMenu }
          aria-label='menu open and close'
        >
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default AdminNavbar
