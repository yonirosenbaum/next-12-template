import { createTheme } from '@mui/material/styles'
import { PaletteOptions } from '@mui/material/styles/createPalette'

export const fontFamily = `Arial, sans-serif`

const fontWeightLight = 300
const fontWeightRegular = 400
const fontWeightMedium = 500
const fontWeightBold = 700

const spacing = 8

//TODO: set color scheme
export const palette: PaletteOptions = {
  primary: {
    main: '',
    light: '',
    xlight: '',
    dark: '',
    contrastText: '',
  },
  secondary: {
    main: '',
    light: '',
    dark: '',
    contrastText: '',
  },
  background: {
    light: '',
    grey: '',
    default: '',
    dark: '',
    paper: '',
  },
  disabled: {
    main: '',
    light: '',
  },
  success: {
    main: '',
    light: '',
    xlight: '',
  },
  warning: {
    main: '',
    xlight: '',
  },
  error: {
    main: '',
    dark: '',
    light: '',
    xlight: '',
  },
  text: {
    primary: '',
    secondary: '',
    contrast: '',
  },
  divider: '',
  tooltip: {
    main: '',
    secondary: '',
  },
  toast: {
    info: '',
    error: '',
    success: '',
  },
  mode: 'light',
}

const theme = createTheme({
  palette,
  spacing,
  typography: {
    fontFamily,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
  },
})

//TODO: set typography theme
theme.typography = {
  ...theme.typography,
  fontFamily,
  fontWeightBold,
  fontWeightLight,
  fontWeightMedium,
  fontWeightRegular,
  h1: {
    ...theme.typography.h1,
    fontWeight: fontWeightBold,
    fontSize: theme.typography.pxToRem(40),
    lineHeight: theme.typography.pxToRem(54),
  },
  h2: {
    ...theme.typography.h2,
    fontWeight: fontWeightBold,
    fontSize: theme.typography.pxToRem(32),
    lineHeight: theme.typography.pxToRem(43),
  },
  h3: {
    ...theme.typography.h3,
    fontWeight: fontWeightBold,
    fontSize: theme.typography.pxToRem(24),
    lineHeight: theme.typography.pxToRem(32),
  },
  h4: {
    ...theme.typography.h4,
    fontWeight: fontWeightBold,
    fontSize: theme.typography.pxToRem(18),
    lineHeight: theme.typography.pxToRem(24),
  },
  h5: {
    ...theme.typography.h5,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(18),
  },
  h6: {
    ...theme.typography.h6,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(16),
  },
  subtitle1: {
    ...theme.typography.subtitle1,
  },
  subtitle2: {
    ...theme.typography.subtitle2,
  },
  body1: {
    ...theme.typography.body1,
    fontWeight: fontWeightRegular,
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(18),
  },
  body2: {
    ...theme.typography.body2,
  },
  button: {
    ...theme.typography.button,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(18),
  },
  caption: {
    ...theme.typography.caption,
    fontWeight: fontWeightRegular,
    fontSize: theme.typography.pxToRem(11),
    lineHeight: theme.typography.pxToRem(16),
  },
  overline: {
    ...theme.typography.overline,
  },
}

export default theme
