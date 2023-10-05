import 'styled-components'
import { CSSProperties } from 'react'
import type { Theme as MuiTheme } from '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {
  interface ToastPalette {
    info: string
    error: string
    success: string
  }

  interface ExtraPaletteOptions {
    toast: ToastPalette
    tooltip: SimplePaletteColorOptions
    disabled: SimplePaletteColorOptions
  }

  interface Palette extends ExtraPaletteOptions {}

  interface PaletteOptions extends ExtraPaletteOptions {}

  interface SimplePaletteColorOptions {
    xlight?: string
    secondary?: string
  }

  interface TypeText {
    contrast: string
  }

  interface TypeBackground {
    grey: string
    dark: string
    light: string
  }
}

declare module '@mui/material/styles/createTypography' {
  interface FontStyle {
    fontFamilySecondary: CSSProperties['fontFamily']
  }
}

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}
