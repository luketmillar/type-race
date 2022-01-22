import Color from 'gear/Color'
import Shadows from 'gear/shadows'
import { css } from 'styled-components'

const Light = css`
    color: ${Color.palette.deep};
    background-color: ${Color.palette.white};
    box-shadow: ${Shadows.overlay};
`

export default Light
