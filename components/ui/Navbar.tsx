import React, { useContext, useState } from 'react'

import NextLink from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { UiContext } from '../../context'

import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { ClearOutlined } from '@mui/icons-material'


const Navbar = () => {

  const { asPath, push } = useRouter()
  const { toggleSideMenu } = useContext(UiContext)

  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false)

  const navigateTo = (url: string) => {
    toggleSideMenu()
    push(url)
  }

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return

    navigateTo(`/search/${ searchTerm }`)
  }

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

        {
          isSearchVisible ?
            (
              <Input
                className='fadeIn'
                autoFocus
                value={ searchTerm }
                onChange={ (e) => setSearchTerm(e.target.value) }
                onKeyPress={ (e) => e.key === 'Enter' ? onSearchTerm() : null }
                type='text'
                placeholder='Search...'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton onClick={ () => { } }>
                      <ClearOutlined />
                    </IconButton>
                  </InputAdornment>
                }
              />
            )
            :
            (
              <IconButton>
                <SearchOutlinedIcon />
              </IconButton>
            )
        }
        <IconButton
          sx={ { display: { xs: 'flex', sm: 'none' } } }
          onClick={ toggleSideMenu }
        >
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
