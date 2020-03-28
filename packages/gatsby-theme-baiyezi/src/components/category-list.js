/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const categoryListStyle = css`
  li {
    padding: 6px 0;
    border-bottom: 1px dotted #f0f0f0;
    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }
    a {
      font-size: 14px;
      font-weight: 400;
      &:before {
        content: '\f105';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        margin-right: 6px;
        font-size: 14px;
        color: #333;
      }
    }
  }
`

const CategoryItem = ({ node }) => <a href={node.path}>{node.name}</a>

const CategoryList = ({ edges }) => {
  return (
    <ul css={categoryListStyle}>
      {edges.map(({ node }) => (
        <li key={node.id}>
          <CategoryItem node={node}></CategoryItem>
        </li>
      ))}
    </ul>
  )
}

export default CategoryList
