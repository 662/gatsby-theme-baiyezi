/** @jsx jsx */
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

const titleStyle = css`
  font-size: 32px;
  letter-spacing: 8px;
  font-weight: bold;
  color: #333;
  white-space: nowrap;
`
const domainStyle = css`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  padding: 0 2px;
  white-space: nowrap;
`

const Logo = ({ size }) => {
  return (
    <div>
      <div css={[titleStyle, size === 'small' && { fontSize: 24 }]}>白叶子</div>
      <div css={[domainStyle, size === 'small' && { fontSize: 12 }]}>
        <b css={{ color: 'darkcyan' }}>B</b>
        <b css={{ color: 'darkcyan' }}>A</b>
        <b css={{ color: 'darkcyan' }}>I</b>
        <b css={{ color: '#ccc' }}>Y</b>
        <b css={{ color: '#ccc' }}>E</b>
        <b css={{ color: 'lightslategray' }}>Z</b>
        <b css={{ color: 'lightslategray' }}>I</b>
        <b css={{ color: 'darkred' }}>.</b>
        <b css={{ color: '#ddd' }}>C</b>
        <b css={{ color: '#ddd' }}>O</b>
        <b css={{ color: '#ddd' }}>M</b>
      </div>
    </div>
  )
}

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'default']),
}

Logo.defaultProps = {
  size: 'default',
}

export default Logo
