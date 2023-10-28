import { useState, useContext } from 'react'
import NextLink from 'next/link'

import { Box, Button, Chip, Grid, TextField, Typography } from '@mui/material'
import { ErrorOutline } from '@mui/icons-material'

import { AuthContext } from '../../context'

import { useForm } from 'react-hook-form'

import { AuthLayout } from '../../components/layouts'
import { validations } from '../../utils'
import { useRouter } from 'next/router'

type FormData = {
    email: string
    password: string
}

const LoginPage = () => {

    const router = useRouter()
    const { loginUser } = useContext(AuthContext)
    const [showError, setShowError] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()


    const onLoginUser = async ({ email, password }: FormData) => {
        setShowError(false)

        const isValidLogin = await loginUser(email, password)

        if (!isValidLogin) {
            setShowError(true)
            setTimeout(() => { setShowError(false) }, 3000)
            return
        }

        const destination = router.query.p?.toString() || '/'
        router.replace(destination )

    }

    return (
        <AuthLayout title={ 'Oh-la-la-Shoes | Login' }>
            <form onSubmit={ handleSubmit(onLoginUser) } noValidate>
                <Box sx={ { width: 350, padding: '10px 20px' } }>
                    <Grid container spacing={ 3 }>
                        <Grid item>
                            <Typography variant='h1' component='h1' my={ 3 }>
                                Log in
                            </Typography>
                            <Chip
                                label=' Invalid user / passoword'
                                color='error'
                                icon={ <ErrorOutline /> }
                                className='fadeIn'
                                sx={ { display: showError ? 'flex' : 'none' } }
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                type='email'
                                label='E-mail'
                                variant='filled'
                                fullWidth
                                {
                                ...register('email', {
                                    required: 'X - The e-mail field is required',
                                    validate: validations.isEmail
                                }) }
                                error={ !!errors.email }
                                helperText={ errors.email?.message }
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                label='Password'
                                type='password'
                                variant='filled'
                                fullWidth
                                {
                                ...register('password', {
                                    required: 'X - The password field is required',
                                    minLength: { value: 6, message: '6 characters minimum' }
                                }) }
                                error={ !!errors.password }
                                helperText={ errors.password?.message }
                            />
                        </Grid>
                        <Grid item xs={ 12 } my={ 3 }>
                            <Button
                                type='submit'
                                color='secondary'
                                className='circular-btn'
                                size='large'
                                fullWidth
                                aria-label='login'
                            >
                                Log in
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } display='flex' justifyContent='end'>
                            <NextLink href='/auth/register' passHref>
                                Don&#8217;t have an account?
                            </NextLink>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export default LoginPage