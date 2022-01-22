import Type from 'gear/Button/type'
import { Theme } from 'gear/Theme'

import Clear from './Clear'
import ClearDark from './ClearDark'
import Dark from './Dark'
import Default from './Default'
import Primary from './Primary'
import Red from './Red'
import { TabDark, TabLight } from './Tab'
import Teal from './Teal'

export const getButtonComponent = (theme: Theme, type: Type) => {
    if (theme === Theme.Light) {
        switch (type) {
            case Type.Primary:
                return Primary
            case Type.Clear:
                return Clear
            case Type.Default:
                return Default
            case Type.Red:
                return Red
            case Type.Teal:
                return Teal
            case Type.Tab:
                return TabLight
        }
    } else {
        switch (type) {
            case Type.Primary:
                return Primary
            case Type.Default:
                return Dark
            case Type.Clear:
                return ClearDark
            case Type.Red:
                return Red
            case Type.Teal:
                return Teal
            case Type.Tab:
                return TabDark
        }
    }
}
