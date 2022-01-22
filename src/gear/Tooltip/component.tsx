import ThemeContext from 'gear/Theme'
import React from 'react'

import { getTooltipComponent, Shape } from './shapes'
import { getDefaultVariant, Variant } from './variants'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: Variant
}
const TooltipComponent = React.forwardRef(({ variant, ...rest }: IProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const currentTheme = ThemeContext.use()
    const currentVariant = variant ?? getDefaultVariant(currentTheme)
    const ComponentType = getTooltipComponent(Shape.Default)
    return <ComponentType variant={currentVariant} {...rest} ref={ref} />
})

export default TooltipComponent
