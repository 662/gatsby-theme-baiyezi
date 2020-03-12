/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import Panel from '../panel'

const style = css`
  overflow: hidden;
  width: 340px;
  color: #666;
`

const Sider = props => {
  return (
    <div css={style}>
      <Panel title="CATEGORIES">11</Panel>
      <Panel title="TAGS">11</Panel>
      <Panel title="RECENT POSTS">11</Panel>
      <Panel title="LINKS">11</Panel>
    </div>
  )
}

Sider.propTypes = {}

export default Sider
