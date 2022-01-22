import { Size } from 'gear/size'
import { css } from 'styled-components'

import { sizeStyles as rectangleSizeStyles } from './Rectangle'

const sizeStyles = {
    [Size.Mini]: css`
        ${rectangleSizeStyles[Size.Mini]};
        padding: 4px;
        width: 24px;
    `,
    [Size.Small]: css`
        ${rectangleSizeStyles[Size.Small]};
        padding: 8px;
        width: 32px;
    `,
    [Size.Medium]: css`
        ${rectangleSizeStyles[Size.Medium]};
        padding: 12px;
        width: 40px;
    `,
    [Size.Large]: css`
        ${rectangleSizeStyles[Size.Large]};
        padding: 12px;
        width: 48px;
    `
}

export interface IProps {
    size: Size
}
const Square = css<IProps>`
    ${props => sizeStyles[props.size]}
    font-weight: 500;
`

export default Square
