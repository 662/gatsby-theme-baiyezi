/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import Panel from '../panel'
import PostItemSmall from '../post-list-small'
import CategoryList from '../category-list'
import TagList from '../tag-list'

const style = css`
  overflow: hidden;
  width: 336px;
  color: #666;
`

const Sider = props => {
  return (
    <div css={style}>
      <Panel title="CATEGORIES">
        <CategoryList></CategoryList>
      </Panel>
      <Panel title="TAGS">
        <TagList></TagList>
      </Panel>
      <Panel title="RECENT POSTS">
        <PostItemSmall></PostItemSmall>
      </Panel>
      <Panel title="LINKS">11</Panel>
    </div>
  )
}

Sider.propTypes = {}

export default Sider
