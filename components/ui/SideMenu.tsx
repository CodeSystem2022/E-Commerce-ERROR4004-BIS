import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { UiContext } from '../../context'
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
  EscalatorWarningOutlined,
  FemaleOutlined,
  LoginOutlined,
  MaleOutlined,
  SearchOutlined,
  VpnKeyOutlined
} from '@mui/icons-material'
import WcOutlinedIcon from '@mui/icons-material/WcOutlined'
import { useFormState } from 'react-dom'

const SideMenu = () => {
  const router = useRouter()
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext)

  const [searchTerm, setSearchTerm] = useState('');

  const onSearchTerm = () => {
    if(searchTerm.trim().length === 0)return;
    navigateTo(`/search/${ searchTerm }`);
  }
  
  const navigateTo = (url: string) => {
    toggleSideMenu()
    router.push(url)
  }

  return (
    <Drawer
      open={ isMenuOpen }
      anchor='right'
      sx={ {
        backdropFilter: 'blur(4px)',
        transition: 'all 0.5s ease-out'
      } }
      onClose={ toggleSideMenu}
    >
      <Box sx={ { width: 250, paddingTop: 5 } } >
        <List>
          <ListItem>
            <Input
              value={ searchTerm }
              onChange={(e) => setSearchTerm( e.target.value ) }
              onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null }
              type='text'
              placeholder="Search..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={ onSearchTerm }
                  >
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccountCircleOutlined />
            </ListItemIcon>
            <ListItemText primary={ 'Profile' } />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary={ 'My orders' } />
          </ListItem>
          <Button
            onClick={ () => navigateTo('/category/men') }
            fullWidth
            sx={ { display: { xs: '', sm: 'none' } } }
          >
            <ListItem >
              <ListItemIcon>
                <MaleOutlined />
              </ListItemIcon>
              <ListItemText primary={ 'Men' } />
            </ListItem>
          </Button>
          <Button
            onClick={ () => navigateTo('/category/women') }
            fullWidth
            sx={ { display: { xs: '', sm: 'none' } } }
          >
            <ListItem >
              <ListItemIcon>
                <FemaleOutlined />
              </ListItemIcon>
              <ListItemText primary={ 'Women' } />
            </ListItem>
          </Button>
          <Button
            onClick={ () => navigateTo('/category/kid') }
            fullWidth
            sx={ { display: { xs: '', sm: 'none' } } }
          >
            <ListItem >
              <ListItemIcon>
                <EscalatorWarningOutlined />
              </ListItemIcon>
              <ListItemText primary={ 'Kids' } />
            </ListItem>
          </Button>
          <Button
            onClick={ () => navigateTo('/category/unisex') }
            fullWidth
            sx={ { display: { xs: '', sm: 'none' } } }
          >
            <ListItem >
              <ListItemIcon>
                <WcOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={ 'Unisex' } />
            </ListItem>
          </Button>
          <ListItem >
            <ListItemIcon>
              <VpnKeyOutlined />
            </ListItemIcon>
            <ListItemText primary={ 'Login' } />
          </ListItem>
          <ListItem >
            <ListItemIcon>
              <LoginOutlined />
            </ListItemIcon>
            <ListItemText primary={ 'Exit' } />
          </ListItem>
          {/* Admin */ }
          <Divider />
          <ListSubheader>Admin Panel</ListSubheader>
          <ListItem >
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={ 'Products' } />
          </ListItem>
          <ListItem >
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary={ 'Orders' } />
          </ListItem>
          <ListItem >
            <ListItemIcon>
              <AdminPanelSettings />
            </ListItemIcon>
            <ListItemText primary={ 'Users' } />
          </ListItem>
        </List>
      </Box>
    </Drawer >
  )
}

export default SideMenu
