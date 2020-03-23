/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import Navbar from './navbar'
import Content from './content'

const headerStyle = css`
  width: 100%;
  background: #fff;
  margin-bottom: 32px;
`

const Header = props => {
  return (
    <div css={headerStyle}>
      <Content></Content>
      <Navbar></Navbar>
    </div>
  )
}

Header.propTypes = {}

export default Header
