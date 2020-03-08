/** @jsx jsx */
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import Navbar from './navbar'

const style = css`
  width: 100%;
`

const Header = props => {
  return (
    <div>
      <div>BAIYEZI</div>
      <Navbar></Navbar>
    </div>
  )
}

Header.propTypes = {}

export default Header
