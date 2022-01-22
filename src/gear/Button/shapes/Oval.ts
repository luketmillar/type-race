import { Size } from 'gear/size'
import { css } from 'styled-components'

const sizeStyles = {
    [Size.Mini]: css`
        padding: 4px 6px;
        font-size: 10px;
        height: 24px;
        border-radius: 12px;
    `,
    [Size.Small]: css`
        padding: 8px 12px;
        font-size: 12px;
        height: 32px;
        border-radius: 16px;
    `,
    [Size.Medium]: css`
        padding: 12px 16px;
        font-size: 13px;
        height: 48px;
        border-radius: 24px;
    `,
    [Size.Large]: css`
        padding: 24px 28px;
        font-size: 16px;
        height: 72px;
        border-radius: 36px;
    `
}

interface IProps {
    size: Size
}
const Oval = css<IProps>`
    font-weight: 400;
    ${props => sizeStyles[props.size]}
`

export default Oval
