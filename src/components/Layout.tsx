import Head from 'next/head'
import { PropsWithChildren } from 'react'
import styled from '@emotion/styled'

const Main = styled.main`
  flex: 1;
`

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        {/*TODO: Add social media metadata here */}
        <title>{/*TODO: Add page title here */}</title>
      </Head>
      <Container>
        <Main id="main-pass">{children}</Main>
      </Container>
    </>
  )
}

export default Layout
