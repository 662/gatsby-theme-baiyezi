/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const postItemSmallStyle = css`
  display: flex;
  background-color: #fff;
  border-top: 1px solid #eee;
  padding: 16px 0;
  &:first-of-type {
    border-top: none;
    padding-top: 0;
  }

  .thumb {
    a {
      width: 80px;
      display: block;
      height: 60px;
    }
  }
  .detail {
    padding-left: 16px;
  }

  .title a {
    font-size: 13px !important;
    font-family: 'Montserrat';
    font-weight: 700;
    letter-spacing: -0.4px;
    line-height: 18px;
  }
`

const PostItemSmall = ({ node }) => {
  return (
    <div css={postItemSmallStyle}>
      <div className="thumb">
        <a
          href={node.path}
          css={{
            background: `url(${node.image}) no-repeat center center`,
            backgroundSize: 'cover',
          }}></a>
      </div>
      <div className="detail">
        <div className="title">
          <a href={node.path}>{node.title}</a>
        </div>
      </div>
    </div>
  )
}

const PostListSmall = ({ edges }) => {
  return (
    <div>
      {edges.map(({ node }) => (
        <PostItemSmall key={node.id} node={node}></PostItemSmall>
      ))}
    </div>
  )
}

export default PostListSmall
