/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const tagListStyle = css`
  display: flex;
  flex-wrap: wrap;
  margin: -8px;

  li {
    margin: 8px;
    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }
    a {
      display: block;
      font-size: 12px;
      font-weight: 400;
      padding: 6px;
      background: #000;
      color: #fff;
      &:hover {
        background: darkcyan;
      }
    }
  }
`

const TagItem = ({ node }) => <a href={node.path}>{node.name}</a>

const TagList = ({ edges }) => {
  return (
    <ul css={tagListStyle}>
      {edges.map(({ node }) => (
        <li key={node.id}>
          <TagItem node={node}></TagItem>
        </li>
      ))}
    </ul>
  )
}

export default TagList
