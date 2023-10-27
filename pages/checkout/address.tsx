import React from 'react'

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'

import ShopLayout from '../../components/layouts/ShopLayout'

const AddressPage = () => {
  return (
    <ShopLayout
      title='Checkout address'
      pageDescription='Confirm destination address'
    >
      <>
        <Typography variant='h1' component='h1' my={ 4 }>
          Address
        </Typography>
        <Grid container spacing={ 1 }>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField label='First Name' variant='filled' fullWidth />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField label='Last Name' variant='filled' fullWidth />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField label='Address' variant='filled' fullWidth />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField label='Address 2 (alternative)' variant='filled' fullWidth />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField label='ZIP Code' variant='filled' fullWidth />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField label='City' variant='filled' fullWidth />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <FormControl fullWidth>
              <Select
                variant='filled'
                label='Country'
                value={ 1 }
              >
                <MenuItem value={ 1 }>Argentina</MenuItem>
                <MenuItem value={ 2 }>Brasil</MenuItem>
                <MenuItem value={ 3 }>Uruguay</MenuItem>
                <MenuItem value={ 4 }>Chile</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField label='Telephone' variant='filled' fullWidth />
          </Grid>
        </Grid>
        <Box sx={ { mt: 5} } display='flex' justifyContent='center'>
          <Button
            color='secondary'
            className='circular-btn'
            size='large'
            aria-label='Check out order'
          > 
            Check out order
          </Button>
        </Box>
      </>
    </ShopLayout>
  )
}

export default AddressPage