import React, { FC } from 'react'
import { GetServerSideProps } from 'next'

import { DriveFileRenameOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Box, Button, capitalize, Card, CardActions, CardMedia, Checkbox, Chip, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, ListItem, Paper, Radio, RadioGroup, TextField } from '@mui/material'

import { IProduct } from '../../../interfaces'
import { dbProducts } from '../../../database'
import AdminLayout from '../../../components/layouts/AdminLayout'


const validTypes = ['running', 'sneakers', 'soccer', 'basketball', 'driving', 'training']
const validGender = ['men', 'women', 'kid', 'unisex']
const validSizes = ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50']

interface ProductAdminPageProps {
  product: IProduct
}

const ProductAdminPage: FC<ProductAdminPageProps> = ({ product }) => {

  const onDeleteTag = (tag: string) => {

  }

  return (
    <AdminLayout
      title={ 'Product' }
      subTitle={ `Editing: ${ product.title }` }
      icon={ <DriveFileRenameOutline /> }
    >
      <form>
        <Box
          display='flex'
          justifyContent='end'
          sx={ { mb: 2 } }>
          <Button
            color="secondary"
            startIcon={ <SaveOutlined /> }
            sx={ { width: '150px', my: 1 } }
            type="submit"
          >
            Save
          </Button>
        </Box>

        <Grid container spacing={ 2 }>
          {/* Data */ }
          <Grid item xs={ 12 } sm={ 6 }>

            <TextField
              label="Title"
              variant="filled"
              fullWidth
              sx={ { mb: 1 } }
            // { ...register('name', {
            //     required: 'Este campo es requerido',
            //     minLength: { value: 2, message: 'Mínimo 2 caracteres' }
            // })}
            // error={ !!errors.name }
            // helperText={ errors.name?.message }
            />

            <TextField
              label="Description"
              variant="filled"
              fullWidth
              multiline
              sx={ { mb: 1 } }
            />

            <TextField
              label="Inventory"
              type='number'
              variant="filled"
              fullWidth
              sx={ { mb: 1 } }
            />

            <TextField
              label="Price"
              type='number'
              variant="filled"
              fullWidth
              sx={ { mb: 1 } }
            />

            <Divider sx={ { my: 1 } } />

            <FormControl sx={ { mb: 1 } }>
              <FormLabel>Type</FormLabel>
              <RadioGroup
                row
              // value={ status }
              // onChange={ onStatusChanged }
              >
                {
                  validTypes.map(option => (
                    <FormControlLabel
                      key={ option }
                      value={ option }
                      control={ <Radio color='secondary' /> }
                      label={ capitalize(option) }
                    />
                  ))
                }
              </RadioGroup>
            </FormControl>

            <FormControl sx={ { mb: 1 } }>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
              // value={ status }
              // onChange={ onStatusChanged }
              >
                {
                  validGender.map(option => (
                    <FormControlLabel
                      key={ option }
                      value={ option }
                      control={ <Radio color='secondary' /> }
                      label={ capitalize(option) }
                    />
                  ))
                }
              </RadioGroup>
            </FormControl>

            <FormGroup>
              <FormLabel>Sizes</FormLabel>
              {
                validSizes.map(size => (
                  <FormControlLabel key={ size } control={ <Checkbox /> } label={ size } />
                ))
              }
            </FormGroup>

          </Grid>

          {/* Tags e imagenes */ }
          <Grid item xs={ 12 } sm={ 6 }>
            <TextField
              label="Slug - URL"
              variant="filled"
              fullWidth
              sx={ { mb: 1 } }
            />

            <TextField
              label="Tags"
              variant="filled"
              fullWidth
              sx={ { mb: 1 } }
              helperText="Press [spacebar] to add"
            />

            <Box sx={ {
              display: 'flex',
              flexWrap: 'wrap',
              listStyle: 'none',
              p: 0,
              m: 0,
            } }
              component="ul">
              {
                product.tags.map((tag) => {

                  return (
                    <Chip
                      key={ tag }
                      label={ tag }
                      onDelete={ () => onDeleteTag(tag) }
                      color="primary"
                      size='small'
                      sx={ { ml: 1, mt: 1 } }
                    />
                  );
                }) }
            </Box>

            <Divider sx={ { my: 2 } } />

            <Box display='flex' flexDirection="column">
              <FormLabel sx={ { mb: 1 } }>Images</FormLabel>
              <Button
                color="secondary"
                fullWidth
                startIcon={ <UploadOutlined sx={ { color: 'white' } } /> }
                sx={ { mb: 3, py: 1 } }
              >
                Upload images
              </Button>

              <Chip
                label="2 images at least"
                color='error'
                variant='outlined'
              />

              <Grid container spacing={ 2 }>
                {
                  product.images.map(img => (
                    <Grid item xs={ 4 } sm={ 3 } key={ img }>
                      <Card>
                        <CardMedia
                          component='img'
                          className='fadeIn'
                          image={ `/products/${ img }` }
                          alt={ img }
                        />
                        <CardActions>
                          <Button fullWidth color="error">
                            Delete
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))
                }
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </form>
    </AdminLayout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const { slug = '' } = query

  const product = await dbProducts.getProductBySlug(slug.toString())

  if (!product) {
    return {
      redirect: {
        destination: '/admin/products',
        permanent: false,
      }
    }
  }


  return {
    props: {
      product
    }
  }
}


export default ProductAdminPage