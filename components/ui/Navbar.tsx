import React, { useContext } from 'react'

import NextLink from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { UiContext } from '../../context'

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'


const Navbar = () => {

  const { asPath } = useRouter()
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
        <Box sx={ { display: { xs: 'none', sm: 'block' } } }>
          <NextLink href='/category/men' passHref>
            <Button
              color={ asPath === '/category/men' ? 'primary' : 'info' }
              sx={ {
                margin: '0px 4px',
                '&:hover': {
                  color: 'black',
                }
              } }
            >
              Men
            </Button>
          </NextLink>
          <NextLink href='/category/women' passHref>
            <Button
              color={ asPath === '/category/women' ? 'primary' : 'info' }
              sx={ {
                margin: '0px 4px',
                '&:hover': {
                  color: 'black',
                }
              } }
            >
              Women
            </Button>
          </NextLink>
          <NextLink href='/category/unisex' passHref>
            <Button
              color={ asPath === '/category/unisex' ? 'primary' : 'info' }
              sx={ {
                margin: '0px 4px',
                '&:hover': {
                  color: 'black',
                }
              } }
            >
              Unisex
            </Button>
          </NextLink>
          <NextLink href='/category/kid' passHref>
            <Button
              color={ asPath === '/category/kid' ? 'primary' : 'info' }
              sx={ {
                margin: '0px 4px',
                '&:hover': {
                  color: 'black',
                }
              } }
            >
              Kids
            </Button>
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
        <Button onClick={ toggleSideMenu }>
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
