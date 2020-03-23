/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from './container'

const footerStyle = css`
  background-color: #000;
  padding: 16px 0;
`
const containerStyle = css`
  font-size: 12px;
  color: #aaa;

  a {
    color: #666;
    &:hover {
      color: #aaa;
    }
  }

  @media (max-width: 420px) {
    flex-direction: column;
    div {
      margin-bottom: 8px;
    }
  }
`

const Footer = () => {
  return (
    <section css={footerStyle}>
      <Container css={containerStyle}>
        <div>
          © {new Date().getFullYear()} baiyezi{' '}
          <a
            href="http://www.beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer">
            渝ICP备17011776号
          </a>
        </div>
        <div>
          Built with{' '}
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Gatsby
          </a>
          , Theme by{' '}
          <a
            href="https://github.com/662/gatsby-theme-baiyezi"
            target="_blank"
            rel="noopener noreferrer">
            Baiyezi
          </a>
        </div>
      </Container>
    </section>
  )
}

export default Footer
