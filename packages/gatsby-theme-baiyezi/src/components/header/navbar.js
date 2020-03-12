/** @jsx jsx */
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'
import Container from '../container'

const menuItemActiveStyle = css`
  background-color: #000;
  color: #fff;
`

const navbarStyle = css`
  border-top: solid 1px #eee;
  border-bottom: solid 1px #eee;
  ul {
    display: flex;
  }
  li {
    list-style: none;
    a {
      display: block;
      height: 48px;
      line-height: 48px;
      padding: 0 16px;
      color: #000;
      &:hover {
        ${menuItemActiveStyle}
      }
    }
  }
`
const contentStyle = css`
  margin: 0 auto;
  max-width: 1150px;
  display: flex;
  justify-content: space-between;
`

const Navbar = ({ pages }) => {
  return (
    <div css={navbarStyle}>
      <div css={contentStyle}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/archives">Archives</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/guestbook">Guestbook</Link>
          </li>
        </ul>
        {/* todo: search
        <div>
          <input type="text" />
        </div> */}
      </div>
    </div>
  )
}

Navbar.propTypes = {
  pages: PropTypes.array,
}

export default Navbar
