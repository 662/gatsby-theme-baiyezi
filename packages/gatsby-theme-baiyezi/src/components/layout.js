/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Header from './header'
import Footer from './footer'
import Sider from './sider'

const style = css`
  main {
    display: flex;
  }
`

const Layout = ({ children }) => {
  return (
    <div css={style}>
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
