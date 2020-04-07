/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Panel from '../components/panel'
import Comments from '../components/comments'
import Image from '../components/image'
import SiteMetadata from '../components/site-metadata'
import 'github-markdown-css'

const postStyle = css`
  .post-header {
    h1 {
      font-size: 32px;
      line-height: 40px;
      font-family: 'Montserrat';
      font-weight: 700;
      letter-spacing: -0.4px;
      margin-bottom: 16px;
      text-transform: none;
      color: #000;
    }
  }
  .post-meta {
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(68, 68, 68, 0.1);
    padding-bottom: 8px;
    font-size: 12px;
    & > * {
      margin-right: 16px;
    }
  }
  .post-category {
    text-transform: uppercase;
    i {
      margin-right: 4px;
    }
  }
  .post-timestamp {
    font-weight: 300;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: #b7b7b7;
  }
  .post-reading-time {
    font-weight: 300;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: #757575;
  }

  .post-footer {
    margin-top: 64px;
  }
  .tags {
    * {
      margin-right: 8px;
    }
    span {
      display: inline-block;
      font-size: 10px;
      background-color: #f0f0f0;
      color: #222;
      padding: 6px;
    }
    a {
      display: inline-block;
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

export default function Post({ data: { post, previous, next } }) {
  return (
    <Layout>
      <SiteMetadata
        title={post.title}
        description={post.description}></SiteMetadata>
      <Panel css={postStyle}>
        <div className="post-header">
          <h1>{post.title}</h1>
        </div>
        <div className="post-meta">
          <span className="post-category">
            <i className={`fas fa-folder`}></i>
            <Link to={post.category.path}>{post.category.name}</Link>
          </span>
          <span className="post-timestamp">{post.date}</span>
          <span className="post-reading-time">
            {post.reading.words} WORDS {post.reading.minutes} MINUTEREAD
          </span>
        </div>
        <Image src={post.image} title={post.title}></Image>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
        <div className="post-footer">
          <div className="tags">
            <span>Tags :</span>
            {post.tags.map(tag => (
              <Link key={tag.path} to={tag.path}>
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      </Panel>
      <Comments></Comments>
    </Layout>
  )
}
