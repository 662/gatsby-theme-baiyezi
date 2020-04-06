/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const panelStyle = css`
  padding: 32px;
  background-color: #fff;
  overflow: hidden;
  margin: 0 0 50px 0;
  border: 1px solid #eee;
`
const miniPanelStyle = css`
  padding: 8px;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 16px;
`

const titleStyle = css`
  margin-bottom: 24px;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #000;
  i {
    font-size: 16px;
    margin-right: 4px;
  }
`

const Panel = ({ children, icon, title, mini, ...props }) => {
  return (
    <div css={mini ? miniPanelStyle : panelStyle} {...props}>
      {(title || icon) && (
        <div css={titleStyle}>
          {icon && <i className={`fas fa-${icon}`}></i>}
          <span>{title}</span>
        </div>
      )}
      <div>{children}</div>
    </div>
  )
}

export default Panel
