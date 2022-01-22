import React from 'react'

import Base, { IProps as IBaseProps } from './Base'
import { Variant } from './variants'

interface IAutoWidthInputProps extends IBaseProps {
    fontSize?: number
    fontFamily?: string
    fontWeight?: number
    maxWidth?: number
}

const AutoWidthInput = ({ fontSize, fontFamily, fontWeight, maxWidth, value = '', ...rest }: IAutoWidthInputProps) => {
    const fontSpec = {
        fontSize: fontSize ?? 14,
        fontFamily: fontFamily ?? 'Arial',
        fontWeight: fontWeight ?? 500
    }
    const [width, setWidth] = React.useState(0)
    const measuredRef = React.useRef<HTMLDivElement>(null)
    const [measurableText, setMeasurableText] = React.useState(value.length > 0 ? value : rest.placeholder)

    const handleIntermediate = React.useCallback((value: string) => {
        rest.onIntermediate?.(value)
        if (value.length > 0) {
            setMeasurableText(value)
        } else {
            setMeasurableText(rest.placeholder)
        }
    }, [])

    React.useEffect(() => {
        if (measuredRef.current) {
            setWidth(measuredRef.current.getBoundingClientRect().width)
        }
    }, [measurableText, measuredRef])

    React.useEffect(() => {
        // if the incoming value changes, we reset the measurable text.
        // this handles the case where a collaborator changes an auto-width input value.
        setMeasurableText(value.length > 0 ? value : rest.placeholder)
    }, [value, rest.placeholder])

    return (
        <>
            <div style={{ position: 'relative' }}>
                <Base
                    {...rest}
                    value={value}
                    style={{ ...fontSpec, width, boxSizing: 'content-box', maxWidth: maxWidth }}
                    onIntermediate={handleIntermediate}
                    ellipsize
                />
            </div>
            <div
                ref={measuredRef}
                style={{
                    position: 'absolute',
                    width: 'fit-content',
                    visibility: 'hidden',
                    whiteSpace: 'pre',
                    ...fontSpec
                }}
            >
                {measurableText}
            </div>
        </>
    )
}

AutoWidthInput.Variant = Variant

export default AutoWidthInput
