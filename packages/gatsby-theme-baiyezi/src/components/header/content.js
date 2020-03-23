/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Logo from './logo'
import Container from '../container'

const containerStyle = css`
  height: 68px;
  padding: 24px 8px;
`

const Content = () => {
  return (
    <Container css={containerStyle}>
      <Logo></Logo>
    </Container>
  )
}

export default Content
