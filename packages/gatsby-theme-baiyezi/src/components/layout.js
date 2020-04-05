/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core'
import Container from './container'
import Header from './header'
import Footer from './footer'
import Sider from './sider'

const globalStyle = css`
  body {
    padding: 0;
    margin: 0;
    background-color: #f5f5f5;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    transition: all 0.4s;
    color: #000;
    &:hover {
      color: darkcyan;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
`

const Layout = ({ children }) => {
  return (
    <div>
      <Global styles={globalStyle}></Global>
      <Header></Header>
      <Container>
        <div css={{ width: 768 }}>{children}</div>
        <Sider></Sider>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Layout
