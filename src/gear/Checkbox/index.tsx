import Color from 'gear/Color'
import Check from 'gear/Icons/Check'
import * as Layout from 'gear/Layout'
import React, { ChangeEvent, ReactNode, useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 16px;
    width: 16px;
    position: relative;
    display: inline-block;
`

const Box = styled(props => <Layout.AbsoluteFull {...props} />)`
    border-radius: 3px;
    background-color: ${Color.palette.granite};
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Input = styled.input.attrs({
    type: 'checkbox'
})`
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

    :indeterminate + ${Box}, :checked + ${Box} {
        background-color: ${Color.palette.deep};
    }
    :focus + ${Box} {
        box-shadow: 0px 0px 0px 2px ${Color.palette.pink.down};
    }
    :hover + ${Box} {
        background-color: ${Color.palette.dark.hover};
    }
    :hover:not(:checked):not(:indeterminate) + ${Box} {
        background-color: ${Color.palette.light.hover};
    }
`

const Label = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    ${Container} {
        margin-right: 12px;
    }
`

interface IProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
    onChange: (value: boolean) => void
    indeterminate?: boolean
}
const BaseCheckbox = ({ onChange, indeterminate, ...rest }: IProps) => {
    const ref = useRef<HTMLInputElement>(null)
    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.checked)
        },
        [onChange]
    )

    useEffect(() => {
        if (indeterminate && ref.current) {
            ref.current.indeterminate = true
        }
    }, [indeterminate])

    return (
        <Container>
            <Input {...rest} onChange={handleChange} ref={ref} />
            <Box>
                {indeterminate ? (
                    <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="10" height="2" fill={Color.palette.white} />
                    </svg>
                ) : (
                    rest.checked && <Check size={12} fill={Color.palette.white} />
                )}
            </Box>
        </Container>
    )
}

const Checkbox = ({ children, ...rest }: IProps & { children?: ReactNode }) => {
    return children ? (
        <Label>
            <BaseCheckbox {...rest} />
            {children}
        </Label>
    ) : (
        <BaseCheckbox {...rest} />
    )
}

export default Checkbox
