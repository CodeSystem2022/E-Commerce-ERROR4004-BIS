import { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import NextLink from 'next/link'
import { signIn, getSession, getProviders } from 'next-auth/react'

import { Box, Button, Chip, Grid, Divider, TextField, Typography } from '@mui/material'
import { ErrorOutline } from '@mui/icons-material'

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

    const [showError, setShowError] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const [providers, setProviders] = useState<any>({})

    useEffect(() => {
        getProviders().then(prov => setProviders(prov))
    }, [])

    const onLoginUser = async ({ email, password }: FormData) => {
        setShowError(false)

        await signIn('credentials', { email, password })
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
                                    textTransform: 'uppercase',
                                    py: '12px',
                                    letterSpacing: '1px'
                                } }
                            >
                                Log in
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } display='flex' justifyContent='end'>
                            <NextLink
                                href={ router.query.p ? `/auth/register?p=${ router.query.p }` : '/auth/register' }
                                passHref
                            >
                                Don&#8217;t have an account?
                            </NextLink>
                        </Grid>

                        <Grid
                            item
                            xs={ 12 }
                            display='flex'
                            flexDirection='column'
                            justifyContent='end'
                        >
                            <Divider sx={ { width: '100%', mb: 3 } } />
                            {
                                Object.values(providers).map((provider: any) => {

                                    if (provider.id === 'credentials') {
                                        return (<div key="credentials"></div>)
                                    }

                                    return (
                                        <Button
                                            key={ provider.id }
                                            variant='outlined'
                                            fullWidth
                                            color='secondary'
                                            sx={ {
                                                mb: 1,
                                                textTransform: 'uppercase',
                                                py: '12px',
                                                letterSpacing: '1px'
                                            } }
                                            onClick={ () => signIn(provider.id) }
                                        >
                                            { provider.name }
                                        </Button>
                                    )
                                })
                            }
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


export default LoginPage