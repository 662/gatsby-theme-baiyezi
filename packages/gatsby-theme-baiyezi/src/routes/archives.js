/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Panel from '../components/panel'

const groupStyle = css`
  margin-bottom: 64px;
  h2 {
    font-size: 22px;
    color: #666;
    border-bottom: 1px solid rgba(68, 68, 68, 0.1);
    margin-bottom: 16px;
    padding: 8px 0;
  }

  ul {
    padding-left: 32px;
  }

  li {
    font-size: 14px;
    margin-bottom: 16px;
    .date {
      color: #999;
      margin-right: 16px;
    }
    .title {
    }
  }
`

export default function Posts({ data: { archives } }) {
  const groups = []

  archives.edges.forEach(({ node }) => {
    const group = groups.find(({ key }) => key === node.year)
    if (group) {
      group.value.push(node)
    } else {
      groups.push({ key: node.year, value: [node] })
    }
  })

  return (
    <Layout>
      <Panel>
        {groups.map(group => (
          <div key={group.key} css={groupStyle}>
            <h2>{group.key}</h2>
            <ul>
              {group.value.map(post => (
                <li key={post.id}>
                  <Link to={post.path}>
                    <span className="date">{post.date}</span>
                    <span className="title">{post.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Panel>
    </Layout>
  )
}
