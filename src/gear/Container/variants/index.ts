import Dark from './Dark'
import Light from './Light'
import Variant from './variants'

export const getVariantCss = (variant: Variant) => {
    switch (variant) {
        case Variant.Light:
            return Light
        case Variant.Dark:
            return Dark
    }
}

export { Variant }
