/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const postItemSmallStyle = css`
  display: flex;
  background-color: #fff;
  border-top: 1px solid #eee;
  padding: 16px 0;
  &:first-child {
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

const PostItemSmall = () => {
  return (
    <div css={postItemSmallStyle}>
      <div className="thumb">
        <a
          href="/post/hi"
          css={{
            background: `url(https://4.bp.blogspot.com/-9qcDqK1Y9C0/WjQEt1JLQDI/AAAAAAAAKG4/gVDqHBjHbRYalLfHawAqHez5IzS8EYhxgCLcBGAs/s1600/07.jpeg) no-repeat center center`,
            backgroundSize: 'cover',
          }}></a>
      </div>
      <div className="detail">
        <div className="title">
          <a href="/post/hi">Beautiful women relaxing at the luxury poolside</a>
        </div>
      </div>
    </div>
  )
}

const PostListSmall = () => {
  return (
    <div>
      <PostItemSmall></PostItemSmall>
      <PostItemSmall></PostItemSmall>
      <PostItemSmall></PostItemSmall>
      <PostItemSmall></PostItemSmall>
    </div>
  )
}

export default PostListSmall
