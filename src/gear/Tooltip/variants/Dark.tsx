import Color from 'gear/Color'
import Shadows from 'gear/shadows'
import { css } from 'styled-components'

const Dark = css`
    color: ${Color.palette.white};
    background-color: ${Color.palette.deep};
    box-shadow: ${Shadows.overlay};
`

export default Dark
