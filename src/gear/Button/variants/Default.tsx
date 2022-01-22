import Color from 'gear/Color'
import styled from 'styled-components'

import Base from '../Base'

const color = {
    text: Color.palette.deep,
    base: Color.palette.silver,
    hover: Color.palette.light.hover,
    focus: Color.palette.pink.down,
    down: Color.palette.granite
}

const DefaultButton = styled(Base)`
    color: ${color.text};
    background-color: ${color.base};
    :hover {
        background-color: ${color.hover};
    }
    :active {
        background-color: ${color.down};
    }
    :disabled {
        background-color: ${color.base};
    }
`

export default DefaultButton
