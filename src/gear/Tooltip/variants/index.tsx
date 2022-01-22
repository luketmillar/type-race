import { Theme } from 'gear/Theme'

import Dark from './Dark'
import Light from './Light'
import Variant from './variant'

export { Variant }
export const getVariantCss = (variant: Variant) => {
    switch (variant) {
        case Variant.Dark:
            return Dark
        case Variant.Light:
            return Light
    }
}

export const getDefaultVariant = (theme: Theme) => {
    switch (theme) {
        case Theme.Dark:
            return Variant.Light
        case Theme.Light:
            return Variant.Dark
    }
}
