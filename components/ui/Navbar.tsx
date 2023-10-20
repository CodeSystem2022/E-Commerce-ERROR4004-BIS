import React from 'react'
import NextLink from 'next/link'

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Image from 'next/image'

const Navbar = () => {
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
          <Image src='/logo/logo-name.jpg' alt='Oh-la-la-Shoes' width='50' height='50'/>
          <Typography sx={ { ml: 0.5 } }>Shop</Typography>
        </NextLink>
        <Box flex={ 1 } />
        <Box sx={ { display: { xs: 'none', sm: 'block' } } }>
          <NextLink href='/category/men' passHref>
              <Button>Men</Button>
          </NextLink>
          <NextLink href='/category/women' passHref>
              <Button>Women</Button>
          </NextLink>
          <NextLink href='/category/kid' passHref>
              <Button>Kid</Button>
          </NextLink>
        </Box>
        <Box flex={ 1 } />
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <NextLink href='/cart' passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={ 2 } color='secondary'>
                < ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
        <Button>
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
