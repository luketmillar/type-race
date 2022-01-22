import React from 'react'

import * as Shapes from './Shapes'
import { IContainerProps } from './Shapes/Base'

const getContainerComponent = (shape: Shapes.Shape) => {
    switch (shape) {
        case Shapes.Shape.Default:
            return Shapes.Plain
        case Shapes.Shape.Drawer:
            return Shapes.Drawer
        case Shapes.Shape.Flyout:
            return Shapes.Flyout
        case Shapes.Shape.FullScreen:
            return Shapes.FullScreen
    }
}

interface IProps extends IContainerProps {
    shape?: Shapes.Shape
    innerRef?: React.RefObject<HTMLDivElement>
}
const Container = ({ shape = Shapes.Shape.Default, innerRef, ...rest }: IProps) => {
    const ContainerComponent = getContainerComponent(shape)
    return <ContainerComponent ref={innerRef} {...rest} />
}
Container.Shape = Shapes.Shape
export default Container
