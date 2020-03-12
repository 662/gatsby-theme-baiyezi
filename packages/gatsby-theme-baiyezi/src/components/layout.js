/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core'
import Header from './header'
import Footer from './footer'
import Sider from './sider'

const globalStyle = css`
  body {
    padding: 0;
    margin: 0;
    background-color: #f5f5f5;
  }
  main {
    display: flex;
    justify-content: space-between;
    margin: 40px auto;
    max-width: 1150px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`

const Layout = ({ children }) => {
  return (
    <div>
      <Global styles={globalStyle}></Global>
      <Header></Header>
      <main>
        <div>{children}</div>
        <Sider></Sider>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
