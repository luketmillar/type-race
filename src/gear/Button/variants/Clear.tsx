import Color from 'gear/Color'
import styled from 'styled-components'

import Base from '../Base'

const color = {
    text: Color.palette.deep,
    base: 'transparent',
    hover: Color.palette.light.hover,
    down: Color.palette.granite
}

const ClearButton = styled(Base)`
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

export default ClearButton
