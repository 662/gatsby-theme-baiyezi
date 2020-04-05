/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'gatsby'

const postItemStyle = css`
  display: flex;
  margin-bottom: 48px;
  background-color: #fff;

  .cover {
    width: 50%;
    position: relative;
    .thumb {
      width: 100%;
      display: block;
      height: 270px;
    }
    .category {
      position: absolute;
      top: 16px;
      left: 16px;
      font-size: 12px;
      background-color: darkcyan;
      color: #fff;
      padding: 4px 8px;
      &:hover {
        background-color: #333;
      }
    }
  }
  .detail {
    width: 50%;
    padding: 32px;
  }

  .title a {
    font-size: 22px;
    line-height: 28px;
    font-family: 'Montserrat';
    font-weight: 700;
    letter-spacing: -0.4px;
    margin: 0 0 5px;
    text-transform: none;
  }
  .date {
    position: relative;
    display: inline-block;
    font-size: 11px;
    font-weight: 300;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: #b7b7b7;
    margin-bottom: 16px;
  }
  .description {
    color: #666666;
    font-family: 'Droid Serif';
    font-size: 13px;
    line-height: 22px;
    margin: 0 0 10px;
  }
  .bottom {
    position: relative;
    font-size: 10px;
    padding: 10px 0 0;
    border-top: 1px dotted #e6e6e6;
  }
`

const PostItem = ({ node }) => {
  return (
    <div css={postItemStyle}>
      <div className="cover">
        <Link
          className="thumb"
          to={node.path}
          css={{
            background: `url(${node.image}) no-repeat center center`,
            backgroundSize: 'cover',
          }}></Link>
        <Link className="category" to={node.category.path}>
          {node.category.name.toUpperCase()}
        </Link>
      </div>
      <div className="detail">
        <div className="title">
          <Link to={node.path}>{node.title}</Link>
        </div>
        <div className="date">{node.date}</div>
        <div className="description">{node.description}</div>
        <div className="bottom">
          <span> {node.reading.words} WORDS</span>
          <span> {node.reading.minutes} MINUTEREAD</span>
        </div>
      </div>
    </div>
  )
}

const PostList = ({ edges }) => {
  return (
    <div>
      {edges.map(({ node }) => (
        <PostItem key={node.id} node={node}></PostItem>
      ))}
    </div>
  )
}

export default PostList
