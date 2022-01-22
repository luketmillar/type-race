import Color from 'gear/Color'
import styled from 'styled-components'

import Clear from './Clear'

const color = {
    text: Color.palette.white,
    hover: Color.alpha(Color.palette.moody, 0.28),
    down: Color.alpha(Color.palette.moody, 0.12)
}

const ClearDarkButton = styled(Clear)`
    color: ${color.text};
    :hover:not(:disabled) {
        background-color: ${color.hover};
    }
    :active:not(:disabled) {
        color: ${Color.palette.moody};
        background-color: ${color.down};
    }
`

export default ClearDarkButton
