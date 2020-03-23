/** @jsx jsx */
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { css, jsx } from '@emotion/core'
import Logo from './logo'
import Container from '../container'

const navbarStyle = css`
  border-top: solid 1px #eee;
  border-bottom: solid 1px #eee;
  transition: all 0.1s;
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
      i {
        margin-right: 8px;
      }
      &:hover,
      &.active {
        background-color: #333;
        color: #fff;
      }
    }
  }
`
const affixStyle = css`
  z-index: 99;
  position: fixed;
  top: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.9);
`

const logoStyle = css`
  display: flex;
  align-items: center;
  transition: all 0.4s;
  overflow: hidden;
`

const Navbar = ({ pages }) => {
  const [affix, setAffix] = useState(false)
  const { pathname } = useLocation()

  const menus = [
    {
      title: 'Home',
      icon: 'home',
      path: '/',
      match: /^(\/category\/|\/tag\/|\/post\/)/,
    },
    { title: 'Archives', icon: 'archive', path: '/archives' },
    { title: 'About', icon: 'address-card', path: '/about' },
    { title: 'Guestbook', icon: 'comments', path: '/guestbook' },
  ]

  const isActive = ({ path, match }) =>
    pathname === path || (match && match.test(pathname))

  useEffect(() => {
    const onScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 117) setAffix(true)
      else setAffix(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div css={[navbarStyle, affix && affixStyle]}>
      <Container>
        <ul>
          <li
            css={[
              logoStyle,
              { width: affix ? 110 : 0, opacity: affix ? 1 : 0 },
            ]}>
            <Logo size="small"></Logo>
          </li>
          {menus.map(menu => (
            <li key={menu.path}>
              <Link to={menu.path} className={isActive(menu) && 'active'}>
                <i className={`fas fa-${menu.icon}`}></i>
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

Navbar.propTypes = {
  pages: PropTypes.array,
}

export default Navbar
