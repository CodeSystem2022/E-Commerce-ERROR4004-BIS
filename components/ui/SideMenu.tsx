import React from 'react'
import {
  Box,
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

const SideMenu = () => {
  return (
    <Drawer
      open={ false}
      anchor='right'
      sx={ {
        backdropFilter: 'blur(4px)',
        transition: 'all 0.5s ease-out'
      } }
    >
      <Box sx={ { width: 250, paddingTop: 5 } } >
        <List>
          <ListItem>
            <Input
              type='text'
              placeholder="Search..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
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
          <ListItem sx={ { display: { xs: '', sm: 'none' } } }>
            <ListItemIcon>
              <MaleOutlined />
            </ListItemIcon>
            <ListItemText primary={ 'Men' } />
          </ListItem>
          <ListItem sx={ { display: { xs: '', sm: 'none' } } }>
            <ListItemIcon>
              <FemaleOutlined />
            </ListItemIcon>
            <ListItemText primary={ 'Women' } />
          </ListItem>
          <ListItem sx={ { display: { xs: '', sm: 'none' } } }>
            <ListItemIcon>
              <EscalatorWarningOutlined />
            </ListItemIcon>
            <ListItemText primary={ 'Kid' } />
          </ListItem>
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
    </Drawer>
  )
}

export default SideMenu
