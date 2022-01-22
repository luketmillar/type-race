import Default from './Default'
import Shape from './shape'

export { Shape }
export const getTooltipComponent = (shape: Shape) => {
    switch (shape) {
        case Shape.Default:
            return Default
    }
}
