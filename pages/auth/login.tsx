import NextLink from 'next/link'

import { Box, Button, Grid, TextField, Typography } from '@mui/material'

import { useForm } from 'react-hook-form'

import { AuthLayout } from '../../components/layouts'

type FormData = {
    email: string
    password: string
}

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const onLoginUser = (data: FormData) => {
        console.log({ data })
    }

    return (
        <AuthLayout title={ 'Oh-la-la-Shoes | Loguin' }>
            <form onSubmit={ handleSubmit(onLoginUser) }>
                <Box sx={ { width: 350, padding: '10px 20px' } }>
                    <Grid container spacing={ 3 }>
                        <Grid item>
                            <Typography variant='h1' component='h1' my={ 3 }>
                                Log in
                            </Typography>
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                type='email'
                                label='E-mail'
                                variant='filled'
                                fullWidth
                                {...register('email')}
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                label='Password'
                                type='password'
                                variant='filled'
                                fullWidth
                                {...register('password')}
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