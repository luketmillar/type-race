import React from 'react'
import styled from 'styled-components'

type Direction = 'horizontal' | 'vertical'
interface IDirectionProps {
    direction: Direction
}

const Spacer = styled.div<IDirectionProps & { gap: number }>`
    ${props => (props.direction === 'horizontal' ? `width: ${props.gap}px;` : `height: ${props.gap}px;`)}
`

const Wrapper = styled.div<IDirectionProps>`
    display: flex;
    align-items: center;
    ${props => props.direction === 'vertical' && 'flex-direction: column'}
`

const Label = styled.div`
    white-space: nowrap;
`

interface IProps {
    icon: React.ReactNode
    label: string
    direction?: Direction
    gap?: number
}

export const IconLabel = ({ icon, label, gap = 8, direction = 'horizontal' }: IProps) => {
    return (
        <Wrapper direction={direction}>
            {icon}
            <Spacer gap={gap} direction={direction} />
            <Label>{label}</Label>
        </Wrapper>
    )
}
