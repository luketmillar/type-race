import Color from 'gear/Color'
import { Size } from 'gear/size'
import * as Utils from 'gear/Utils'
import { Width } from 'gear/width'
import React from 'react'
import styled, { css } from 'styled-components'

const sizeStyles = {
    [Size.Small]: css`
        padding: 0px 12px;
        font-size: 12px;
        height: 32px;
    `,
    [Size.Medium]: css`
        padding: 0px 16px;
        font-size: 13px;
        height: 40px;
    `,
    [Size.Large]: css`
        padding: 0px 16px;
        font-size: 16px;
        height: 48px;
    `
} as any

const widthStyles = {
    [Width.Content]: css``,
    [Width.Grow]: css`
        flex: 1;
        width: 100%;
    `
}

export const invalidCss = css`
    border: 1px solid ${Color.palette.red};
    :focus {
        border: 1px solid ${Color.palette.red};
        box-shadow: none;
    }
`

interface IProps {
    sizeOpt: Size
    width: Width
    invalid?: boolean
    ellipsize?: boolean
    css?: any
    ref?: React.RefObject<HTMLInputElement>
}
const Input = styled.input<IProps>`
    outline: none;
    border: none;
    ${props => sizeStyles[props.sizeOpt]}
    ${props => widthStyles[props.width]}
    ${props => props.ellipsize && `text-overflow: ellipsis;`}
    ${props => props.css}
    border-radius: 9px;
    font-weight: 400;
    box-sizing: border-box;
    will-change: transform;
    :disabled {
        opacity: 0.3;
    }
`

export interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value'> {
    onChange?: (value: string) => void
    onIntermediate?: (value: string) => void
    onEnter?: () => void
    onCancel?: () => void
    // input types
    size: Size
    width: Width
    value: string | undefined
    // custom props
    invalid?: boolean
    ellipsize?: boolean
    selectOnFocus?: boolean
    preventWhitespace?: boolean
    // get out of jail free
    css?: any
}
const BaseInput = React.forwardRef(
    (
        {
            size,
            type = 'text',
            onChange,
            onEnter,
            onCancel,
            onIntermediate,
            value = '',
            onBlur,
            selectOnFocus,
            preventWhitespace,
            ...rest
        }: IInputProps,
        ref: React.ForwardedRef<HTMLInputElement>
    ) => {
        const currentValueRef = React.useRef<string>(value)
        const intermediateValueRef = React.useRef<string>(value)
        const [intermediateValue, setIntermediateValue] = React.useState<string>(value)
        const innerRef = Utils.Hooks.wrapRef(ref as React.RefObject<HTMLInputElement>)
        const updateIntermediateValue = React.useCallback((value: string) => {
            intermediateValueRef.current = value
            setIntermediateValue(value)
        }, [])
        const handleChange = React.useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) => {
                let { value } = e.target
                if (preventWhitespace) {
                    value = value.replace(/\s/g, '')
                }
                updateIntermediateValue(value)
                onIntermediate?.(value)
            },
            [onIntermediate, updateIntermediateValue]
        )
        const notifyChange = React.useCallback(() => {
            if (currentValueRef.current !== intermediateValueRef.current) {
                currentValueRef.current = intermediateValueRef.current
                onChange?.(intermediateValueRef.current)
            } else {
                setIntermediateValue(currentValueRef.current)
                onCancel?.()
            }
        }, [onChange, onCancel])
        const handleBlur = React.useCallback(
            (e: React.FocusEvent<HTMLInputElement>) => {
                notifyChange()
                onBlur?.(e)
            },
            [onBlur, notifyChange]
        )
        const handleFocus = React.useCallback(
            (e: React.FocusEvent<HTMLInputElement>) => {
                if (selectOnFocus) {
                    e.target.select()
                }
            },
            [selectOnFocus]
        )
        const handleKeyDown = React.useCallback(
            (e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.nativeEvent.key === 'Enter' && !e.nativeEvent.shiftKey) {
                    notifyChange()
                    if (onEnter) {
                        e.stopPropagation()
                        e.nativeEvent.stopImmediatePropagation()
                        onEnter()
                        innerRef.current?.blur()
                    }
                } else {
                    e.stopPropagation()
                    e.nativeEvent.stopImmediatePropagation()
                }

                if (e.nativeEvent.key === 'Escape') {
                    updateIntermediateValue(value)
                    innerRef.current?.blur()
                }
            },
            [notifyChange, onEnter, value]
        )
        React.useEffect(() => {
            currentValueRef.current = value
            updateIntermediateValue(value)
        }, [value])
        React.useEffect(() => {
            if (rest.autoFocus) {
                innerRef.current?.focus()
            }
        }, [])
        return (
            <Input
                ref={innerRef}
                type={type}
                sizeOpt={size}
                value={intermediateValue}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                {...rest}
            />
        )
    }
)

export default BaseInput
