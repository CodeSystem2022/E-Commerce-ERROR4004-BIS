import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

import '../styles/globals.css'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { lightTheme } from '../themes'
import { CartProvider, UiProvider } from '../context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={ {
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      } }
    >
      <CartProvider>
        <UiProvider>
          <ThemeProvider theme={ lightTheme }>
            <CssBaseline />
            <Component { ...pageProps } />
          </ThemeProvider>
        </UiProvider>
      </CartProvider>
    </SWRConfig>
  )
}

export default MyApp