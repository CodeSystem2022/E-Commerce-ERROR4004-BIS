import { useState, useContext } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { signIn, getSession } from 'next-auth/react'

import { Box, Button, Chip, Grid, TextField, Typography } from '@mui/material'
import { ErrorOutline } from '@mui/icons-material'
import { AuthContext } from '../../context'
import { useForm } from 'react-hook-form'
import { AuthLayout } from '../../components/layouts'
import { validations } from '../../utils'

type FormData = {
    name: string
    email: string
    password: string
}

const RegisterPage = () => {
    const router = useRouter()
    const { registerUser } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const [showError, setShowError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const onRegisterForm = async ({ name, email, password }: FormData) => {

        setShowError(false)
        const { hasError, message } = await registerUser(name, email, password)

        if (hasError) {
            setShowError(true)
            setErrorMessage(message!)
            setTimeout(() => { setShowError(false) }, 3000)
            return
        }

        await signIn('credentials', { email, password })
    }

    return (
        <AuthLayout title={ 'Oh-la-la-Shoes | Register' }>
            <form onSubmit={ handleSubmit(onRegisterForm) } noValidate>
                <Box sx={ { width: 350, padding: '10px 20px' } }>
                    <Grid container spacing={ 3 }>
                        <Grid item>
                            <Typography variant='h1' component='h1' my={ 3 }>
                                Create an account
                            </Typography>
                            <Chip
                                label=' Invalid user / password'
                                color='error'
                                icon={ <ErrorOutline /> }
                                className='fadeIn'
                                sx={ { display: showError ? 'flex' : 'none' } }
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                label='Full name'
                                variant='outlined'
                                fullWidth
                                {
                                ...register('name', {
                                    required: 'X - The name field is required',
                                    minLength: { value: 2, message: '2 characters minimum' }
                                }) }
                                error={ !!errors.name }
                                helperText={ errors.name?.message }
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                type='email'
                                label='E-mail'
                                variant='outlined'
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
                                variant='outlined'
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
                                sx={ {
                                    mb: 1,
                                    textTransform: 'uppercase',
                                    py: '12px',
                                    letterSpacing: '1px'
                                } }
                            >
                                Register
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } display='flex' justifyContent='end'>
                            <NextLink
                                href={ router.query.p ? `/auth/login?p=${ router.query.p }` : '/auth/login' }
                                passHref
                            >
                                Already has an account?
                            </NextLink>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

    const session = await getSession({ req })
    const { p = '/' } = query

    if (session) {
        return {
            redirect: {
                destination: p.toString(),
                permanent: false
            }
        }
    }


    return {
        props: {}
    }
}

export default RegisterPage