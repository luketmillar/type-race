import Color from 'gear/Color'
import styled from 'styled-components'

import Base from '../Base'

const color = {
    text: Color.palette.deep,
    base: Color.palette.teal,
    hover: '#8EEFF5',
    down: '#6EE3EB'
}

const TealButton = styled(Base)`
    color: ${color.text};
    background-color: ${color.base};
    background-clip: padding-box;
    :hover {
        background-color: ${color.hover};
    }
    :active {
        background-color: ${color.down};
    }
`

export default TealButton
