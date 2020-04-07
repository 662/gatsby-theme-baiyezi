/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Layout from '../components/layout'
import Panel from '../components/panel'
import Comments from '../components/comments'
import Image from '../components/image'
import SiteMetadata from '../components/site-metadata'
import 'github-markdown-css'

export default function Page({ data: { page } }) {
  return (
    <Layout>
      <SiteMetadata
        title={page.title}
        description={page.description}></SiteMetadata>

      <Panel>
        <h2
          css={css`
            margin-bottom: 24px;
          `}>
          {page.title}
        </h2>
        <Image src={page.image} title={page.title}></Image>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: page.body }}
        />
      </Panel>

      {page.allowComment && <Comments></Comments>}
    </Layout>
  )
}
