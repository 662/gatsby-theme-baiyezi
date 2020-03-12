/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const style = css`
  max-width: 1150px;
  margin: 0 auto;
`

const Container = ({ children, ...props }) => {
  return (
    <div css={style} {...props}>
      {children}
    </div>
  )
}

export default Container
