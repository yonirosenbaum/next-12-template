import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { Hydrate } from 'react-query/hydration'
import { ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { CssBaseline } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { StyledEngineProvider } from '@mui/material/styles'

import theme from 'src/styles/theme'
import SkipLink from 'src/components/SkipLink'
import PageLayout from 'src/components/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')

    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  return (
    <StyledEngineProvider>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SkipLink href="#main-pass">Skip to main content</SkipLink>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <PageLayout>
                <Component {...pageProps} />
              </PageLayout>
            </Hydrate>
          </QueryClientProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
