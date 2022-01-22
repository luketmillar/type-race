import AutoWidthInput from './AutoWidthInput'
import BaseInput from './Base'
import ComplexInput from './ComplexInput'
import NumberInput from './NumberInput'

export default {
    Regular: BaseInput,
    Complex: ComplexInput,
    AutoWidth: AutoWidthInput,
    Number: NumberInput,
    Size: BaseInput.Size,
    Width: BaseInput.Width
}
