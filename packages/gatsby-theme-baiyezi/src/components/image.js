/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const imageStyle = css`
  width: 100%;
  margin-bottom: 32px;
  img {
    width: 100%;
  }
`

const Image = ({ title, src }) => {
  return (
    src && (
      <div css={imageStyle}>
        <img src={src} alt={title} />
      </div>
    )
  )
}

export default Image
