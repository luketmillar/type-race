import Color from 'gear/Color'
import styled from 'styled-components'

import Base from '../Base'

const color = {
    text: Color.palette.deep,
    base: Color.palette.red,
    hover: '#EE4C31',
    down: '#CD4028',
    disabled: Color.palette.granite
}

const RedButton = styled(Base)`
    color: ${color.text};
    background-color: ${color.base};
    :hover {
        background-color: ${color.hover};
    }
    :active {
        background-color: ${color.down};
    }
    :disabled {
        background-color: ${color.disabled};
    }
`

export default RedButton
