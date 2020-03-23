/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const containerStyle = css`
  max-width: 1150px;
  margin: 0 auto;
`
const contentStyle = css`
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
`

const Container = ({ children, ...props }) => {
  return (
    <div css={containerStyle}>
      <div css={contentStyle} {...props}>
        {children}
      </div>
    </div>
  )
}

export default Container
