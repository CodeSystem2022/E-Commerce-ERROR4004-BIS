import React, { FC, ReactElement } from 'react'
import Head from 'next/head'
import Navbar from '../ui/Navbar'
import SideMenu from '../ui/SideMenu'
import { Box, Typography } from '@mui/material'
import FooterShopLayout from '../ui/FooterShopLayout'

interface ShopLayoutPops {
  title: string
  pageDescription: string
  imageFullUrl?: string
  children: ReactElement
}

const ShopLayout: FC<ShopLayoutPops> = ({
  children,
  title,
  pageDescription,
  imageFullUrl
}) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name='description' content={ pageDescription } />
        <meta name='og:title' content={ title } />
        <meta name='og:description' content={ pageDescription } />
        {
          imageFullUrl && (
            <meta name='og:image' content={ imageFullUrl } />
          )
        }
        <link rel="shortcut icon" href="/logo/logo-name.png" type="image/jpg" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <SideMenu />
      <main
        style={ {
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0px 30px',
          minHeight: '86vh'
        } }
      >
        { children }
      </main>
      <footer>
        <FooterShopLayout />
      </footer>
    </>
  )
}

export default ShopLayout