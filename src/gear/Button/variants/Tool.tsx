import Color from 'gear/Color'
import styled from 'styled-components'
import Base from '../Base'

const color = {
    text: Color.palette.white,
    base: 'transparent',
    hover: Color.alpha(Color.palette.white, 0.2),
    down: Color.alpha(Color.palette.white, 0.5)
}

const ToolButton = styled(Base)`
    color: ${color.text};
    background-color: ${color.base};
    :hover {
        background-color: ${color.hover};
    }
    :active {
        background-color: ${color.down};
    }
    :disabled {
        opacity: 0;
    }
`

export default ToolButton
