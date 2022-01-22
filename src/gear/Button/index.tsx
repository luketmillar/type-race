import { Size } from 'gear/size'
import ThemeContext, { Theme } from 'gear/Theme'
import Tooltip from 'gear/Tooltip'
import * as Utils from 'gear/Utils'
import { Width } from 'gear/width'
import React from 'react'

import * as Contents from './contents'
import { Shape } from './shapes'
import Type from './type'
import * as Variants from './variants'

export interface IProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    theme?: Theme
    type?: Type
    size?: Size
    shape?: Shape
    width?: Width
    tooltip?: string
    propagateClicks?: boolean
    propagateActionKeys?: boolean
    buttonType?: 'submit' | 'reset' | 'button'
    innerRef?: React.RefObject<HTMLButtonElement>
}
export const Button = ({
    theme,
    type = Type.Default,
    size = Size.Medium,
    width = Width.Content,
    shape = Shape.Rectangle,
    onClick,
    innerRef,
    tooltip,
    buttonType = 'button',
    propagateClicks,
    propagateActionKeys,
    ...rest
}: IProps) => {
    const currentTheme = ThemeContext.use(theme)
    const ref = Utils.Hooks.wrapRef(innerRef)
    const Component = Variants.getButtonComponent(currentTheme, type)
    const handleClick = React.useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (onClick) {
                if (!propagateClicks) {
                    e.stopPropagation()
                }
                onClick(e)
            }
        },
        [onClick, propagateClicks]
    )

    const handleKeyDown = React.useCallback(
        (e: React.KeyboardEvent<HTMLButtonElement>) => {
            if ((e.key === 'Enter' || e.key === ' ') && !propagateActionKeys) {
                e.stopPropagation()
            }
        },
        [propagateActionKeys]
    )
    return (
        <>
            <Component
                type={buttonType}
                onKeyDown={handleKeyDown}
                ref={ref}
                size={size}
                width={width}
                shape={shape}
                onClick={handleClick}
                {...rest}
            />
            {tooltip && (
                <Tooltip key={tooltip} targetRef={ref}>
                    {tooltip}
                </Tooltip>
            )}
        </>
    )
}

Button.Size = Size
Button.Width = Width
Button.Type = Type
Button.Shape = Shape
Button.Contents = Contents
export { Shape, Size, Type }

export default Button
