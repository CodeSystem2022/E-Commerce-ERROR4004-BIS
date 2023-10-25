import type { AppProps } from 'next/app'

import { SWRConfig } from 'swr'

import { UiProvider } from '../context'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from '../themes'
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={ {
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      } }
    >
      <UiProvider>
        <ThemeProvider theme={ lightTheme }>
          <CssBaseline />
          <Component { ...pageProps } />
        </ThemeProvider>
      </UiProvider>
    </SWRConfig>

  )
}
