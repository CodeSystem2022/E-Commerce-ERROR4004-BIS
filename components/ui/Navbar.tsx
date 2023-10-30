import React, { useContext, useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CartContext, UiContext } from '../../context'
import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Toolbar, Typography } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { ClearOutlined } from '@mui/icons-material'

const Navbar = () => {

  const { asPath, push } = useRouter()
  const { toggleSideMenu } = useContext(UiContext)
  const { numberOfItems } = useContext(CartContext)

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false)

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return

    push(`/search/${ searchTerm }`)
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
        <Box
          sx={ {
            display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' }
          } }
        >
          <NextLink href='/category/men' passHref>
              <Button
                aria-label='go to men category'
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
                aria-label='go to women category'
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
                aria-label='go to unisex category'
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
                aria-label='go to kid category'
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
                sx={ {
                  display: { xs: 'none', sm: 'block' }
                } }
                className='fadeIn'
                autoFocus
                value={ searchTerm }
                onChange={ (e) => setSearchTerm(e.target.value) }
                onKeyPress={ (e) => e.key === 'Enter' ? onSearchTerm() : null }
                type='text'
                placeholder='Search...'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={ () => setIsSearchVisible(false) }
                      aria-label='search product by word'
                    >
                      <ClearOutlined />
                    </IconButton>
                  </InputAdornment>
                }
              />
            )
            :
            (
              <IconButton
                onClick={ () => setIsSearchVisible(true) }
                className='fadeIn'
                sx={ { display: { xs: 'none', sm: 'flex' } } }
                aria-label='search button by word'
              >
                <SearchOutlinedIcon />
              </IconButton>
            )
        }
        <IconButton
          sx={ { display: { xs: 'flex', sm: 'none' } } }
          onClick={ toggleSideMenu }
          aria-label='search product by word'
        >
          <SearchOutlinedIcon />
        </IconButton>
        <NextLink href='/cart' passHref>
            <IconButton aria-label='go to shopping cart' >
              <Badge badgeContent={ numberOfItems } color='secondary'>
                < ShoppingCartOutlinedIcon aria-label='amunt of items in shopping cart' />
              </Badge>
            </IconButton>
        </NextLink>
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

export default Navbar
