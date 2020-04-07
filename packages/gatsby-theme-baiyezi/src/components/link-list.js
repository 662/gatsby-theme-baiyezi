/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const linkistStyle = css`
  li {
    list-style: square;
    margin: 8px 0 8px 24px;
    font-size: 14px;
  }
`

const LinkItem = ({ link }) => (
  <a target="_blank" href={link.url} rel="noopener noreferrer">
    {link.title}
  </a>
)

const LinkList = ({ links }) => {
  return (
    <ul css={linkistStyle}>
      {links.map(link => (
        <li key={link.url}>
          <LinkItem link={link}></LinkItem>
        </li>
      ))}
    </ul>
  )
}

export default LinkList
