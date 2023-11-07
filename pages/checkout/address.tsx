import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Button, FormControl, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import ShopLayout from '../../components/layouts/ShopLayout'
import { countries } from '../../utils'
import { CartContext } from '../../context'

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

const getAddressFromCookies = (): FormData => {
  return {
    firstName: Cookies.get('firstName') || '',
    lastName: Cookies.get('lastName') || '',
    address: Cookies.get('address') || '',
    address2: Cookies.get('address2') || '',
    zip: Cookies.get('zip') || '',
    city: Cookies.get('city') || '',
    country: Cookies.get('country') || '',
    phone: Cookies.get('phone') || '',
  }
}

const AddressPage = () => {

  const router = useRouter()
  const { updateAddress } = useContext(CartContext)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      address: '',
      address2: '',
      zip: '',
      city: '',
      country: countries[0].code,
      phone: '',
    }
  })

  useEffect(() => {
    reset(getAddressFromCookies())

  }, [reset])

  const onSubmitAddress = (data: FormData) => {
    updateAddress(data)
    router.push('/checkout/summary')
  }

  return (
    <ShopLayout
      title='Checkout address'
      pageDescription='Confirm destination address'
    >
      <form onSubmit={ handleSubmit(onSubmitAddress) }>
        <Typography variant='h1' component='h1' my={ 4 }>
          Address
        </Typography>
        <Grid container spacing={ 1 }>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField
              label='First Name'
              variant='outlined'
              fullWidth
              {
              ...register('firstName', {
                required: 'X - The first name field is required',
                minLength: { value: 2, message: '2 characters minimum' }
              }) }
              error={ !!errors.firstName }
              helperText={ errors.firstName?.message }
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField
              label='Last Name'
              variant='outlined'
              fullWidth
              {
              ...register('lastName', {
                required: 'X - The last name field is required',
                minLength: { value: 2, message: '2 characters minimum' }
              }) }
              error={ !!errors.lastName }
              helperText={ errors.lastName?.message }
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField
              label='Address'
              variant='outlined'
              fullWidth
              {
              ...register('address', {
                required: 'X - The address field is required',
              }) }
              error={ !!errors.address }
              helperText={ errors.address?.message }
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField
              label='Address 2 (alternative)'
              variant='outlined'
              fullWidth
              {
              ...register('address2')
              }
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField
              label='ZIP Code'
              variant='outlined'
              fullWidth
              {
              ...register('zip', {
                required: 'X - The zip code field is required',
                minLength: { value: 4, message: '4 characters minimum' }
              }) }
              error={ !!errors.zip }
              helperText={ errors.zip?.message }
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField
              label='City'
              variant='outlined'
              fullWidth
              {
              ...register('city', {
                required: 'X - The city field is required',
                minLength: { value: 2, message: '2 characters minimum' }
              }) }
              error={ !!errors.city }
              helperText={ errors.city?.message }
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField
              fullWidth
              variant='outlined'
              label='Country'
              {
              ...register('country', {
                required: 'X - The country field is required'
              }) }
              error={ !!errors.country }
              helperText={ errors.country?.message }
            >

            </TextField>
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField
              label='Telephone'
              variant='outlined'
              fullWidth
              {
              ...register('phone', {
                required: 'X - The phone field is required',
                minLength: { value: 10, message: '10 characters minimum' }
              }) }
              error={ !!errors.phone }
              helperText={ errors.phone?.message }
            />
          </Grid>
        </Grid>
        <Box sx={ { mt: 5 } } display='flex' justifyContent='center'>
          <Button
            type='submit'
            color='secondary'
            className='circular-btn'
            size='large'
            aria-label='Check out order'
            sx={ {
              textTransform: 'uppercase',
              letterSpacing: '1px',
              py: 1
            } }
          >
            Check out order
          </Button>
        </Box>
      </form>
    </ShopLayout>
  )
}

export default AddressPage