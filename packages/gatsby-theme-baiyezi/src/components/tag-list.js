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

const TagItem = () => <a href="/tag/nginx">Nginx</a>

const TagList = () => {
  return (
    <ul css={tagListStyle}>
      <li>
        <TagItem></TagItem>
      </li>
      <li>
        <TagItem></TagItem>
      </li>
      <li>
        <TagItem></TagItem>
      </li>
      <li>
        <TagItem></TagItem>
      </li>
      <li>
        <TagItem></TagItem>
      </li>
      <li>
        <TagItem></TagItem>
      </li>
      <li>
        <TagItem></TagItem>
      </li>
    </ul>
  )
}

export default TagList
