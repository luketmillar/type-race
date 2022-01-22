import { Modal } from 'gear'
import Shadows from 'gear/shadows'
import React from 'react'
import styled, { keyframes } from 'styled-components'

import Blue from './variants/Blue'

export type Position = 'top' | 'bottom'
interface IContainerProps {
    position: Position
}
const Container = styled.div<IContainerProps>`
    position: absolute;
    ${props => (props.position === 'top' ? 'top: 0;' : 'bottom: 64px;')};
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    pointer-events: none;
`

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translate(0, -20px);
    }
    to {
        opacity: 1;
    }
`

const Toast = styled.div`
    padding: 4px 8px;
    line-height: 24px;
    border-radius: 12px;
    box-shadow: ${Shadows.overlay};
    display: flex;
    align-items: center;
    pointer-events: all;
    position: relative;
    overflow: hidden;
    animation: ${fadeIn} 100ms linear;
    ${Blue}
`

const Message = styled.div`
    padding: 12px 16px;
`

interface IProps {
    message: string
    children?: React.ReactNode
    position?: Position
    id?: string
}

const ToastComponent = ({ message, children, position = 'top', id }: IProps) => (
    <Modal.Layer trapClicks={false}>
        <Container position={position}>
            <Toast id={id}>
                <Message>{message}</Message>
                {children}
            </Toast>
        </Container>
    </Modal.Layer>
)

export default ToastComponent
