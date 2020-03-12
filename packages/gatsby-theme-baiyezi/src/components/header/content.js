/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from '../container'

const contentStyle = css`
  display: flex;
  padding: 24px 8px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1150px;
`
const logoStyle = css`
  height: 68px;
  line-height: 68px;
`

const Content = () => {
  return (
    <div css={contentStyle}>
      <div css={logoStyle}>LOGO</div>
      <div>AD</div>
    </div>
  )
}

export default Content
