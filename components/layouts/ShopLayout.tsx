import React, { FC, ReactElement } from 'react'
import Head from 'next/head'

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
      </Head>
      <nav>
        { /* TODO: navbar */ }
      </nav>
      { /* TODO: sidebar */ }
      <main
        style={ {
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0px 30px'
        } }
      >
        { children }
      </main>
      <footer>
        { /* TODO: footer */ }
      </footer>
    </>
  )
}

export default ShopLayout