import Color from 'gear/Color'
import styled from 'styled-components'

import Base from '../Base'

const color = {
    text: Color.palette.deep,
    base: Color.palette.pink.default,
    hover: '#dbadff',
    down: '#e08efa',
    disabled: Color.palette.granite
}

const PrimaryButton = styled(Base)`
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

export default PrimaryButton
