import React, { FC, ReactElement } from 'react'
import Head from 'next/head'
import SideMenu from '../ui/SideMenu'
import AdminNavbar from '../admin/AdminNavbar'
import { Box, Typography } from '@mui/material'

interface AdminLayoutPops {
  title: string
  subTitle: string
  icon?: JSX.Element
  children: ReactElement
}

const AdminLayout: FC<AdminLayoutPops> = ({
  children,
  title,
  subTitle,
  icon
}) => {
  return (
    <>
      <Head>
        <title>{ `Admin | ${ title }` }</title>
        <meta name='description' content={`Admin panel: ${title}`} />
        <meta name='og:title' content={ title } />
        <meta name='og:description' content={ `Admin panel: ${subTitle}`} />
        <link rel="shortcut icon" href="/logo/logo-name.png" type="image/jpg" />
      </Head>
      <nav>
        <AdminNavbar />
      </nav>
      <SideMenu />
      <main
        style={ {
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0px 30px'
        } }
      >
        <Box display='flex' flexDirection='column'>
          <Typography variant='h2' component='h2' my={ 1 }>
            { icon }{ ' '} { title }
          </Typography>
          <Typography variant='h3' component='h3' mb={ 3 }>
            { subTitle }
          </Typography>
        </Box>
        <Box className='fadeIn'>
          { children }
        </Box >
      </main>
    </>
  )
}

export default AdminLayout