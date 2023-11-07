import React, { useContext, useState } from 'react'

import { useRouter } from 'next/router'

import { AuthContext, UiContext } from '../../context'
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@mui/material'

import {
  AccountCircleOutlined,
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  DashboardOutlined,
  EscalatorWarningOutlined,
  FemaleOutlined,
  LoginOutlined,
  MaleOutlined,
  SearchOutlined,
  VpnKeyOutlined
} from '@mui/icons-material'
import WcOutlinedIcon from '@mui/icons-material/WcOutlined'

const SideMenu = () => {
  const router = useRouter()
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext)
  const { user, isLoggedIn, logout } = useContext(AuthContext)

  const [searchTerm, setSearchTerm] = useState('')

  const navigateTo = (url: string) => {
    toggleSideMenu()
    router.push(url)
  }

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return

    navigateTo(`/search/${ searchTerm }`)
  }

  return (
    <Drawer
      open={ isMenuOpen }
      anchor='right'
      sx={ {
        backdropFilter: 'blur(4px)',
        transition: 'all 0.5s ease-out'
      } }
      onClose={ toggleSideMenu }
    >
      <Box sx={ { width: 250, paddingTop: 5 } } >
        <List>
          <ListItem>
            <Input
              autoFocus
              value={ searchTerm }
              onChange={ (e) => setSearchTerm(e.target.value) }
              onKeyPress={ (e) => e.key === 'Enter' ? onSearchTerm() : null }
              type='text'
              placeholder='Search...'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    onClick={ onSearchTerm }
                    aria-label='search product by word'
                  >
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>
          {
            isLoggedIn && (
              <>
                {/* <ListItem>
                  <ListItemIcon aria-label='go to profile'>
                    <AccountCircleOutlined />
                  </ListItemIcon>
                  <ListItemText primary={ 'Profile' } />
                </ListItem> */}
                <Button
                  sx={ {
                    paddingRight: '24px',
                    margin: '6px',
                    minWidth: '196px'
                  } }
                  onClick={ () => navigateTo('/orders/history') }
                  aria-label='button to go and check the orders'
                >
                  <ListItem>
                    <ListItemIcon aria-label='go to my orders'>
                      <ConfirmationNumberOutlined />
                    </ListItemIcon>
                    <ListItemText primary={ 'My orders' } />
                  </ListItem>
                </Button>
              </>
            )
          }
          <Button
            onClick={ () => navigateTo('/category/men') }
            fullWidth
            sx={ {
              display: { xs: '', sm: 'none' },
              paddingRight: '24px',
              margin: '6px',
              minWidth: '196px'
            } }
            aria-label='go to men category'
          >
            <ListItem >
              <ListItemIcon aria-label='men'>
                <MaleOutlined />
              </ListItemIcon>
              <ListItemText primary={ 'Men' } />
            </ListItem>
          </Button>
          <Button
            onClick={ () => navigateTo('/category/women') }
            fullWidth
            sx={ {
              display: { xs: '', sm: 'none' },
              paddingRight: '24px',
              margin: '6px',
              minWidth: '196px'
            } }
            aria-label='go to women category'
          >
            <ListItem >
              <ListItemIcon aria-label='women'>
                <FemaleOutlined />
              </ListItemIcon>
              <ListItemText primary={ 'Women' } />
            </ListItem>
          </Button>
          <Button
            onClick={ () => navigateTo('/category/kid') }
            fullWidth
            sx={ {
              display: { xs: '', sm: 'none' },
              paddingRight: '24px',
              margin: '6px',
              minWidth: '196px'
            } }
            aria-label='go to kids category'
          >
            <ListItem >
              <ListItemIcon aria-label='go to kids category'>
                <EscalatorWarningOutlined />
              </ListItemIcon>
              <ListItemText primary={ 'Kids' } />
            </ListItem>
          </Button>
          <Button
            onClick={ () => navigateTo('/category/unisex') }
            fullWidth
            sx={ {
              display: { xs: '', sm: 'none' },
              paddingRight: '24px',
              margin: '6px',
              minWidth: '196px'
            } }
            aria-label='go to unisex category'
          >
            <ListItem >
              <ListItemIcon aria-label='go to unisex category'>
                <WcOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={ 'Unisex' } />
            </ListItem>
          </Button>
          { isLoggedIn ?
            (
              <Button
                aria-label='logout'
                onClick={ logout }
                sx={ {
                  paddingRight: '24px',
                  margin: '6px',
                  minWidth: '196px'
                } }
              >
                <ListItem>
                  <ListItemIcon
                    aria-label='logout icon'
                  >
                    <LoginOutlined />
                  </ListItemIcon>
                  <ListItemText primary={ 'Exit' } />
                </ListItem>
              </Button>
            )
            :
            (
              <ListItem>
                <Button
                  aria-label='user login'
                  onClick={ () => navigateTo(`/auth/login?p=${ router.asPath }`) }
                  sx={ {
                    paddingRight: '24px',
                    minWidth: '196px'
                  } }
                >
                  <ListItemIcon
                    aria-label='login icon'
                  >
                    <VpnKeyOutlined />
                  </ListItemIcon>
                  <ListItemText primary={ 'Login' } />
                </Button>
              </ListItem>
            )
          }
          {/* Admin */ }
          {
            user?.role === 'admin' && (
              <>
                <Divider />
                <ListSubheader>Admin Panel</ListSubheader>
                <ListItem >
                  <Button
                    aria-label='go to dashboard panel'
                    onClick={ () => navigateTo('/admin') }
                  >
                    <ListItemIcon aria-label='dashboard'>
                      <DashboardOutlined />
                    </ListItemIcon>
                    <ListItemText primary={ 'Dashboard' } />
                  </Button>
                </ListItem>
                <ListItem >
                  <Button
                     aria-label='go to products'
                     onClick={ () => navigateTo('/admin/products') }
                  >
                    <ListItemIcon aria-label='products'>
                      <CategoryOutlined />
                    </ListItemIcon>
                    <ListItemText primary={ 'Products' } />
                  </Button>
                </ListItem>
                <ListItem >
                  <Button
                    aria-label='go to orders'
                    onClick={ () => navigateTo('/admin/orders') }
                  >
                    <ListItemIcon aria-label='orders'>
                      <ConfirmationNumberOutlined />
                    </ListItemIcon>
                    <ListItemText primary={ 'Orders' } />
                  </Button>
                </ListItem>
                <ListItem >
                  <Button
                    aria-label='go to users'
                    onClick={ () => navigateTo('/admin/users') }
                  >
                    <ListItemIcon aria-label='users'>
                      <AdminPanelSettings />
                    </ListItemIcon>
                    <ListItemText primary={ 'Users' } />
                  </Button>
                </ListItem>
              </>
            )
          }
        </List>
      </Box>
    </Drawer >
  )
}

export default SideMenu
