/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const panelStyle = css`
  padding: 32px;
  background-color: #fff;
  overflow: hidden;
  margin: 0 0 50px 0;
  border: 1px solid #eee;
`

const titleStyle = css`
  position: relative;
  margin-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 2px;
  span {
    position: relative;
    display: inline-block;
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: #fff;
    padding: 0 10px 0 0;
    z-index: 1;
    color: #000;
  }

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: #eee;
    top: 50%;
    left: 0;
    margin-top: 1px;
    z-index: 0;
  }
`

const Panel = ({ children, title }) => {
  return (
    <div css={panelStyle}>
      <div css={titleStyle}>
        <span>{title}</span>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Panel
