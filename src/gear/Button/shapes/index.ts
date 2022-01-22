import Circle from './Circle'
import Oval from './Oval'
import Rectangle from './Rectangle'
import Shape from './shape'
import Square from './Square'

export const getShapeCss = (shape: Shape) => {
    switch (shape) {
        case Shape.Circle:
            return Circle
        case Shape.Oval:
            return Oval
        case Shape.Square:
            return Square
        case Shape.Rectangle:
            return Rectangle
    }
}

export { Circle, Rectangle, Shape }
