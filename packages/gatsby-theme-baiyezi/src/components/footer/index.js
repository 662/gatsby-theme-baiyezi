/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const footerStyle = css`
  background-color: #000;
`
const containerStyle = css`
  font-size: 12px;
  padding: 16px 0;
  color: #aaa;
  margin: 0 auto;
  max-width: 1150px;
  display: flex;
  justify-content: space-between;

  a {
    color: #666;
    &:hover {
      color: #aaa;
    }
  }
`

const Footer = () => {
  return (
    <div css={footerStyle}>
      <div css={containerStyle}>
        <div>© 2020 baiyezi</div>
        <div>
          Built with{' '}
          <a href="https://www.gatsbyjs.org" target="_blank">
            Gatsby
          </a>
          , Theme by{' '}
          <a href="https://github.com/662/gatsby-theme-baiyezi" target="_blank">
            Baiyezi
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
