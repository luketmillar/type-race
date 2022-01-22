import { Size } from 'gear/size'
import { Width } from 'gear/width'
import { css } from 'styled-components'

const widthStyles = {
    [Width.Content]: css``,
    [Width.Grow]: css`
        flex: 1;
        width: 100%;
    `
}

export const sizeStyles = {
    [Size.Mini]: css`
        padding: 4px 6px;
        font-size: 10px;
        height: 24px;
        border-radius: 4px;
    `,
    [Size.Small]: css`
        padding: 8px 12px;
        font-size: 12px;
        height: 32px;
        border-radius: 9px;
    `,
    [Size.Medium]: css`
        padding: 12px 16px;
        font-size: 13px;
        height: 40px;
        border-radius: 9px;
    `,
    [Size.Large]: css`
        padding: 12px 16px;
        font-size: 16px;
        height: 48px;
        border-radius: 9px;
    `
}

export interface IProps {
    size: Size
    width: Width
}
const Rectangle = css<IProps>`
    ${props => sizeStyles[props.size]}
    ${props => widthStyles[props.width]}
    font-weight: 500;
`

export default Rectangle
