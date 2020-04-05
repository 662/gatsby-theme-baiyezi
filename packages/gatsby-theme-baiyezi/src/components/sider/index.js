/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Panel from '../panel'
import PostItemSmall from '../post-list-small'
import CategoryList from '../category-list'
import TagList from '../tag-list'

const style = css`
  overflow: hidden;
  width: 336px;
  color: #666;
`

const Sider = () => {
  const { recentPosts, categories, tags } = useStaticQuery(graphql`
    query Layout {
      recentPosts: allBaiyeziPost(
        limit: 5
        sort: { fields: date, order: DESC }
      ) {
        edges {
          node {
            id
            title
            path
            image
          }
        }
      }
      tags: allBaiyeziTag {
        edges {
          node {
            name
            path
            id
          }
        }
      }
      categories: allBaiyeziCategory {
        edges {
          node {
            id
            name
            path
          }
        }
      }
    }
  `)
  
  return (
    <div css={style}>
      <Panel title="CATEGORIES" icon="folder">
        <CategoryList edges={categories.edges}></CategoryList>
      </Panel>
      <Panel title="TAGS" icon="star">
        <TagList edges={tags.edges}></TagList>
      </Panel>
      <Panel title="RECENT POSTS" icon="file">
        <PostItemSmall edges={recentPosts.edges}></PostItemSmall>
      </Panel>
      {/* <Panel title="LINKS" icon="folder">11</Panel> */}
    </div>
  )
}

Sider.propTypes = {}

export default Sider
