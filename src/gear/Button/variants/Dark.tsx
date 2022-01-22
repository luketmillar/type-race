import Color from 'gear/Color'
import styled from 'styled-components'

import Base from '../Base'

const color = {
    text: Color.palette.white,
    base: Color.alpha(Color.palette.moody, 0.22),
    hover: Color.alpha(Color.palette.moody, 0.28),
    down: Color.alpha(Color.palette.moody, 0.22),
    disabled: Color.palette.moody
}

const PrimaryButton = styled(Base)`
    color: ${color.text};
    background-color: ${color.base};
    background-clip: padding-box;
    :hover {
        background-color: ${color.hover};
    }
    :active {
        color: ${Color.palette.moody};
        background-color: ${color.down};
    }
    :disabled {
        background-color: ${color.disabled};
    }
`

export default PrimaryButton
