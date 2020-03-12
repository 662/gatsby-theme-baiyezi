/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import Navbar from './navbar'
import Content from './content'

const style = css`
  width: 100%;
  background: #fff;
`

const Header = props => {
  return (
    <div css={style}>
      <Content></Content>
      <Navbar></Navbar>
    </div>
  )
}

Header.propTypes = {}

export default Header
