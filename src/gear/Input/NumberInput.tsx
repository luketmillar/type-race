import { wrapRef } from 'gear/Utils/Hooks'
import React from 'react'

import Base, { IProps as IBaseProps } from './Base'

const parse = (str: string, original: number) => {
    if (str === '') {
        return original
    }
    try {
        return parseFloat(str)
    } catch (err) {
        return original
    }
}

const clamp = (value: number, min: number | undefined, max: number | undefined) => {
    let clamppedValue = value
    if (min !== undefined) {
        clamppedValue = Math.max(min, clamppedValue)
    }
    if (max !== undefined) {
        clamppedValue = Math.min(max, clamppedValue)
    }
    return clamppedValue
}

const round = (value: number, precision: number | undefined) => {
    if (precision === undefined) {
        return value
    }
    const factor = Math.pow(10, precision)
    return Math.round(value * factor) / factor
}

interface IProps extends Omit<IBaseProps, 'value' | 'onChange' | 'onIntermediate'> {
    value: number
    onChange?: (value: number) => void
    onIntermediate?: (value: number) => void
    min?: number
    max?: number
    precision?: number
}
const NumberInput = ({ value, onChange, onIntermediate, min, max, precision, innerRef, ...rest }: IProps) => {
    const ref = wrapRef(innerRef)
    const normalize = React.useCallback(
        (v: string) => {
            const nextValue = parse(v, value)
            const clampedValue = clamp(nextValue, min, max)
            return round(clampedValue, precision)
        },
        [value, min, max, precision]
    )
    const handleChange = React.useCallback(
        (v: string) => {
            const normalizedValue = normalize(v)
            // we need to hard replace the value when we normalize since the value prop may not have changed
            ref.current!.value = `${normalizedValue}`
            onChange?.(normalizedValue)
        },
        [onChange, normalize]
    )
    const handleIntermediate = React.useCallback(
        (v: string) => {
            // we dont normalize here because we want to let people type in invalid intermediate values
            //  ('1' can be the first character when typing '10' and the min may be 2)
            onIntermediate?.(parse(v, value))
        },
        [onIntermediate]
    )
    return (
        <Base
            type="number"
            value={`${value}`}
            onChange={handleChange}
            onIntermediate={handleIntermediate}
            innerRef={ref}
            {...rest}
        />
    )
}

export default NumberInput
