import React from 'react'

import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'

import ShopLayout from '../../components/layouts/ShopLayout'
import { countries } from '../../utils'

type FormData = {
  firstName: string
  lastName: string
  address: string
  address2: string
  zip: string
  city: string
  country: string
  phone: string
}

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
                value={ 'CRI' }
              >
                {
                  countries.map(country => (
                    <MenuItem
                      key={ country.code }
                      value={ country.code }
                    >
                      { country.name }
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField label='Telephone' variant='filled' fullWidth />
          </Grid>
        </Grid>
        <Box sx={ { mt: 5 } } display='flex' justifyContent='center'>
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