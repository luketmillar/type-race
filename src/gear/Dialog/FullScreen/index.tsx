import Container from 'gear/Container'
import * as Layout from 'gear/Layout'
import Modal from 'gear/Modal'
import { Size } from 'gear/size'
import React from 'react'
import styled, { css, keyframes } from 'styled-components'

export type Position = 'top' | 'bottom' | 'left' | 'right'

interface ITransitionProps {
    duration: number
    from: Position
}

const getTransform = (from: Position) => {
    switch (from) {
        case 'top':
            return 'translateY(-100%)'
        case 'bottom':
            return 'translateY(100%)'
        case 'left':
            return 'translateX(-100%)'
        case 'right':
            return 'translateX(100%)'
    }
}

const transition = (from: Position) => keyframes`
    from {
        transform: ${getTransform(from)};
    }
`

const animation = css<{ transition: ITransitionProps | undefined }>`
    animation: ${props => props && props.transition && transition(props.transition.from)}
        ${props => props && props.transition && props.transition.duration}ms linear;
`

const Wrapper = styled(props => <Layout.AbsoluteFull {...props} />)<{ transition: ITransitionProps | undefined }>`
    ${props => props.transition && animation}
`

export interface IProps {
    children: React.ReactNode
    id?: string
    onClose?: () => void
    transition?: ITransitionProps
}
const FullScreenDialog = ({ children, id, transition }: IProps) => {
    return (
        <Modal.Layer id={id} trapFocus>
            <Wrapper transition={transition}>
                <Container shape={Container.Shape.FullScreen} size={Size.Large}>
                    {children}
                    <div style={{ height: 24 }} />
                </Container>
            </Wrapper>
        </Modal.Layer>
    )
}

export default FullScreenDialog
