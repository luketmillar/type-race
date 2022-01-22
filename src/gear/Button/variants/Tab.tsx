import Color from 'gear/Color'
import { Size } from 'gear/size'
import styled, { css } from 'styled-components'

import Base from '../Base'

const fontSizes = (size: Size) => {
    switch (size) {
        case Size.Small:
            return '14px'
        case Size.Medium:
            return '16px'
        case Size.Large:
            return '18px'
    }
}
const TabStyles = css<{ size: Size }>`
    font-weight: 400;
    font-size: ${props => fontSizes(props.size)};
    background-color: transparent;
    :disabled {
        background-color: transparent;
    }
`

export const TabLight = styled(Base)`
    ${TabStyles}
    color: ${Color.palette.moody};
    :hover {
        color: ${Color.palette.deep};
    }
    :active {
        background-color: ${Color.palette.silver};
    }
`

const darkColors = {
    text: Color.palette.white,
    hover: Color.alpha(Color.palette.moody, 0.28),
    down: Color.alpha(Color.palette.moody, 0.12)
}

export const TabDark = styled(Base)`
    ${TabStyles}
    color: ${darkColors.text};
    :hover:not(:disabled) {
        background-color: ${darkColors.hover};
    }
    :active:not(:disabled) {
        color: ${Color.palette.moody};
        background-color: ${darkColors.down};
    }
`
