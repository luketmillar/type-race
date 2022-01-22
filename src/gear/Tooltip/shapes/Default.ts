import styled from 'styled-components'

import { getVariantCss, Variant } from '../variants'

interface IProps {
    variant: Variant
}
const DefaultTooltip = styled.div<IProps>`
    pointer-events: none;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.01em;
    font-weight: 400;
    ${props => getVariantCss(props.variant)}
`

export default DefaultTooltip
