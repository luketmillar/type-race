import { Size } from 'gear/size'
import { Theme } from 'gear/Theme'
import React from 'react'

import ContainerComponent from '../Component'

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    theme?: Theme
    size: Size
}
const Container = React.forwardRef((props: IContainerProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <ContainerComponent
            {...props}
            ref={ref}
            onClick={e => {
                e.stopPropagation()
                props.onClick?.(e)
            }}
        />
    )
})

export default Container
