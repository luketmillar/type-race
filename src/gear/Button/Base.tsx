import Color from 'gear/Color'
import { Size } from 'gear/size'
import { Width } from 'gear/width'
import styled from 'styled-components'

import { getShapeCss, Shape } from './shapes'

export interface IBaseButtonProps {
    size: Size
    shape: Shape
    width: Width
}
const BaseButton = styled.button<IBaseButtonProps>`
    border: solid 1px transparent;
    outline: none;
    user-select: none;
    ${props => getShapeCss(props.shape)}
    display: flex;
    align-items: center;
    justify-content: center;
    :not(:disabled) {
        cursor: pointer;
    }
    :disabled {
        opacity: 0.3;
    }
    [data-whatinput='keyboard'] &:focus {
        box-shadow: 0px 0px 0px 2px ${Color.palette.pink.down};
    }
`

export default BaseButton
