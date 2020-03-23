/** @jsx jsx */
import { css, jsx } from '@emotion/core'

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
  .excerpt {
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

const PostItem = () => {
  return (
    <div css={postItemStyle}>
      <div className="cover">
        <a
          className="thumb"
          href="/post/hi"
          css={{
            background: `url(https://4.bp.blogspot.com/-9qcDqK1Y9C0/WjQEt1JLQDI/AAAAAAAAKG4/gVDqHBjHbRYalLfHawAqHez5IzS8EYhxgCLcBGAs/s1600/07.jpeg) no-repeat center center`,
            backgroundSize: 'cover',
          }}></a>
        <a className="category" href="/category/linux">
          {`Linux`.toUpperCase()}
        </a>
      </div>
      <div className="detail">
        <div className="title">
          <a href="/post/hi">Beautiful women relaxing at the luxury poolside</a>
        </div>
        <div className="date">4 YEARS AGO</div>
        <div className="excerpt">
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo conseq...
        </div>
        <div className="bottom">
          <span> 3 MINUTEREAD</span>
          <span> 3 MINUTEREAD</span>
        </div>
      </div>
    </div>
  )
}

const PostList = () => {
  return (
    <div>
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
    </div>
  )
}

export default PostList
