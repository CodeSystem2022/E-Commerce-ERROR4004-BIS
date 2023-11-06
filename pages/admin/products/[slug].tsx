import React, { FC, useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { useForm } from 'react-hook-form'

import { Box, Button, capitalize, Card, CardActions, CardMedia, Checkbox, Chip, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, ListItem, Paper, Radio, RadioGroup, TextField } from '@mui/material'
import { DriveFileRenameOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'

import AdminLayout from '../../../components/layouts/AdminLayout'
import { IProduct } from '../../../interfaces'
import { dbProducts } from '../../../database'
import { ohlalaApi } from '../../../api'


const validTypes = ['running', 'sneakers', 'soccer', 'basketball', 'driving', 'training']
const validGender = ['men', 'women', 'kid', 'unisex']
const validSizes = ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50']

interface FormData {
  _id?: string
  description: string
  images: string[]
  inStock: number
  price: number
  sizes: string[]
  slug: string
  tags: string[]
  title: string
  type: string
  gender: string
}
interface ProductAdminPageProps {
  product: IProduct
}

const ProductAdminPage: FC<ProductAdminPageProps> = ({ product }) => {

  const [newTagValue, setNewTagValue] = useState<string>('')
  const [isSaving, setIsSaving] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch
  } = useForm<FormData>({
    defaultValues: product
  })

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {

      if (name === 'title') {
        const newSlug = value.title?.trim()
          .replaceAll(' ', '_')
          .replaceAll("'", '')
          .toLowerCase() || '';

        setValue('slug', newSlug)
      }
    });

    return () => subscription.unsubscribe()

  }, [watch, setValue])

  const onChangeSize = (size: string) => {
    const currentSizes = getValues('sizes')
    // If it's already exist -> deletes
    if (currentSizes.includes(size)) {
      return setValue('sizes', currentSizes.filter(s => s !== size), { shouldValidate: true })
    }

    // If it`s nos existing -> add
    setValue('sizes', [...currentSizes, size], { shouldValidate: true })
  }

  const onNewTag = () => {
    const newTag = newTagValue.trim().toLowerCase()
    setNewTagValue('')
    const currentTags = getValues('tags')

    if (currentTags.includes(newTag)) {
      return
    }

    currentTags.push(newTag)
  }

  const onDeleteTag = (tag: string) => {
    const updatedTags = getValues('tags').filter(t => t !== tag);
    setValue('tags', updatedTags, { shouldValidate: true })
  }

  const onSubmit = async(form: FormData) => {

    // check to have at least 2 image and double post
    if (form.images.length < 2) return alert('2 images at least')
    setIsSaving(true)

    try {
      const res = await ohlalaApi({
        url: '/admin/products',
        method: 'PUT',
        data: form
      })

      console.log({ res })

      if (form._id) {
        // TODO: reload
      } else { 
        setIsSaving(false)
      }

    } catch (error) {
      console.log(error)
      setIsSaving(false)
    }
  }

  return (
    <AdminLayout
      title={ 'Product' }
      subTitle={ `Editing: ${ product.title }` }
      icon={ <DriveFileRenameOutline /> }
    >
      <form onSubmit={ handleSubmit(onSubmit) }>
        <Box
          display='flex'
          justifyContent='end'
          sx={ { mb: 2 } }>
          <Button
            color="secondary"
            startIcon={ <SaveOutlined /> }
            sx={ {
              width: '150px',
              my: 1,
              '&:hover': {
                border: '1px solid #3A64D8',
                color: '#3A64D8'
              }
            } }
            type="submit"
            disabled={ isSaving }
          >
            SAVE
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
              { ...register('title', {
                required: "This field title it's required",
                minLength: { value: 2, message: 'At least 2 caracters' }
              }) }
              error={ !!errors.title }
              helperText={ errors.title?.message }
            />

            <TextField
              label="Description"
              variant="filled"
              fullWidth
              multiline
              sx={ { mb: 1 } }
              { ...register('description', {
                required: "This field description it's required",
                minLength: { value: 3, message: 'At least 3 caracters' }
              }) }
              error={ !!errors.description }
              helperText={ errors.description?.message }
            />

            <TextField
              label="Inventory"
              type='number'
              variant="filled"
              fullWidth
              sx={ { mb: 1 } }
              { ...register('inStock', {
                required: "The field inventory it's required",
                min: { value: 0, message: 'Minimum value: 0' }
              }) }
              error={ !!errors.inStock }
              helperText={ errors.inStock?.message }
            />

            <TextField
              label="Price"
              type='number'
              variant="filled"
              fullWidth
              sx={ { mb: 1 } }
              { ...register('price', {
                required: "The field price it's required",
                min: { value: 0, message: 'Minimum value: 0' }
              }) }
              error={ !!errors.price }
              helperText={ errors.price?.message }
            />

            <Divider sx={ { my: 1 } } />

            <FormControl sx={ { mb: 1 } }>
              <FormLabel>Type</FormLabel>
              <RadioGroup
                row
                value={ getValues('type') }
                onChange={ ({ target }) => setValue('type', target.value, { shouldValidate: true }) }
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
                value={ getValues('gender') }
                onChange={ ({ target }) => setValue('gender', target.value, { shouldValidate: true }) }
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

            <FormGroup sx={ { flexDirection: 'row' } }>
              <FormLabel
                sx={ {
                  marginRight: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%'
                } }
              >
                Sizes
              </FormLabel>
              {
                validSizes.map(size => (
                  <FormControlLabel
                    key={ size }
                    control={ <Checkbox checked={ getValues('sizes').includes(size) } /> }
                    label={ size }
                    onChange={ () => onChangeSize(size) }
                  />
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
              { ...register('slug', {
                required: "The field slug it's required",
                validate: (val) => val.trim().includes(' ') ? 'No blank spaces permited' : undefined
              }) }
              error={ !!errors.slug }
              helperText={ errors.slug?.message }
            />

            <TextField
              label="Tags"
              variant="filled"
              fullWidth
              sx={ { mb: 1 } }
              helperText="Press [spacebar] to add"
              value={ newTagValue }
              onChange={ ({ target }) => setNewTagValue(target.value) }
              onKeyUp={ ({ code }) => code === 'Space' ? onNewTag() : undefined }
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
                getValues('tags').map((tag) => {

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
                startIcon={
                  <UploadOutlined
                    sx={ {
                      color: 'black',
                      '&:hover': { color: '#3A64D8' }
                    } }
                  /> }
                sx={ {
                  mb: 3,
                  py: 1,
                  '&:hover': {
                    border: '1px solid #3A64D8',
                    color: '#3A64D8'
                  }
                } }
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
                    <Grid item xs={ 4 } md={ 3 } key={ img }>
                      <Card>
                        <CardMedia
                          component='img'
                          className='fadeIn'
                          image={ `/products/${ img }` }
                          alt={ img }
                        />
                        <CardActions>
                          <Button
                            fullWidth
                            color="error"
                            aria-label='Delete image of the product'
                            sx={ {
                              '&:hover': {
                                border: '1px solid rgba(211, 47, 47, 0.7)',
                                color: '#d32f2f'
                              }
                            } }
                          >
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