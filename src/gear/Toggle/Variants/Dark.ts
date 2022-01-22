import Color from 'gear/Color'
import { IToggleColors } from 'gear/Toggle/Variants/colors'

const colors: IToggleColors = {
    background: {
        on: Color.palette.green,
        off: Color.palette.moody
    },
    thumb: Color.palette.white,
    focus: Color.palette.pink.default
}

export default colors
