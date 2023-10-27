import NextLink from 'next/link'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../../components/layouts'

const RegisterPage = () => {
    return (
        <AuthLayout title={ 'Oh-la-la-Shoes | Register' }>
            <Box sx={ { width: 350, padding: '10px 20px' } }>
                <Grid container spacing={ 3 }>
                    <Grid item>
                        <Typography variant='h1' component='h1' my={ 3 }>
                            Create an account
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 }>
                        <TextField label='Full name' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={ 12 }>
                        <TextField label='E-mail' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={ 12 }>
                        <TextField
                            label='Password'
                            type='password'
                            variant='filled'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={ 12 } my={ 3 }>
                        <Button
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
                        <NextLink href='/auth/login' passHref>
                            <Link underline='always'>
                                Already has an account?
                            </Link>
                        </NextLink>
                    </Grid>

                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default RegisterPage