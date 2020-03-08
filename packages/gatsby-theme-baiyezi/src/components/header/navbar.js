/** @jsx jsx */
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

const style = css`
  border-top: solid 1px #eee;
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.03);
  background: #fff;
  .wrapper {
    width: 1150px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  ul {
    display: flex;
  }
  li {
    list-style: none;
  }
`

const Navbar = props => {
  return (
    <div css={style}>
      <div className="wrapper">
        <ul>
          <li>Home</li>
          <li>Archives</li>
          <li>About</li>
          <li>Guestbook</li>
        </ul>
        <div>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
