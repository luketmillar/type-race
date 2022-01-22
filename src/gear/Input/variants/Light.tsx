import Color from 'gear/Color'
import styled from 'styled-components'

import InputComponent, { invalidCss } from '../Component'

const color = {
    text: Color.palette.deep,
    background: Color.palette.white,
    border: Color.palette.granite,
    focus: Color.palette.pink.down,
    selection: Color.palette.pink.default,
    placeholder: Color.palette.dark.down,
    readonly: Color.palette.moody
}

const DefaultInput = styled(InputComponent)`
    color: ${color.text};
    border: 1px solid ${color.border};
    background-color: transparent;
    :focus {
        background-color: ${color.background};
        border: 1px solid transparent;
        box-shadow: 0px 0px 0px 2px ${color.focus};
    }
    ::placeholder {
        color: ${color.placeholder};
    }
    ::selection {
        background: ${color.selection};
        color: #000;
    }
    :read-only {
        color: ${color.readonly};
    }
    ${props => props.invalid && invalidCss}
`

export default DefaultInput
