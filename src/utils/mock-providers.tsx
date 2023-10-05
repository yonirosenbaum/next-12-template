import { ThemeProvider } from '@emotion/react'
import theme from 'src/styles/theme'
import { CssBaseline } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

const MockProviders = ({ children }: { children?: React.ReactNode }) => (
  <StyledEngineProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  </StyledEngineProvider>
)

export default MockProviders
