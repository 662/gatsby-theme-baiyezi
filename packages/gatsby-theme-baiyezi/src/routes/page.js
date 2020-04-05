/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Layout from '../components/layout'
import Panel from '../components/panel'
import 'github-markdown-css'

export default function Page({ data: { page } }) {
  return (
    <Layout>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Panel>
        <h2
          css={css`
            margin-bottom: 24px;
          `}>
          {page.title}
        </h2>
        {page.image && <img src={page.image} alt={page.title} />}
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: page.body }}
        />
      </Panel>
    </Layout>
  )
}
