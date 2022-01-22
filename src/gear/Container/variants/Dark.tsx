import Color from 'gear/Color'
import { css } from 'styled-components'

const DarkContainer = css`
    background-color: ${Color.palette.shadow};
    color: ${Color.palette.granite};
    border: 1px solid ${Color.alpha(Color.palette.white, 0.08)};
`

export default DarkContainer
