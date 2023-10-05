import { Global, css } from '@emotion/react'

const styles = css`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`

const GlobalStyle: React.FC<React.PropsWithChildren<unknown>> = () => (
  <Global styles={styles} />
)

export default GlobalStyle
