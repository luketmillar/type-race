import Container from 'gear/Container'
import Modal from 'gear/Modal'
import { Size } from 'gear/size'
import * as Utils from 'gear/Utils'
import React from 'react'
import styled, { keyframes } from 'styled-components'

import { handleWindowClickCapture } from '../handleWindowClickCapture'

const slideIn = keyframes`
    from {
        transform: translateY(100%);
    }
    to {}
`

const DrawerContainer = styled.div`
    display: flex;
    flex-direction: column;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    max-height: calc(100% - 40px);
    max-width: 428px;

    margin: 0 auto;

    animation: ${slideIn} 100ms ease-in-out;
`

export interface IProps {
    children: React.ReactNode
    onClose?: () => void
    style?: React.CSSProperties
    onMouseEnter?: React.MouseEventHandler
    onMouseLeave?: React.MouseEventHandler
}
const DrawerDialog = ({ children, onClose, style, onMouseEnter, onMouseLeave }: IProps) => {
    const containerRef = React.useRef(null)
    Utils.Events.useWindowEscape(onClose)
    Utils.Hooks.preventBodyScroll()
    Utils.Events.useWindowClick(handleWindowClickCapture(onClose, containerRef), true)
    return (
        <Modal.Layer trapFocus>
            <Modal.Scrim onClick={onClose} />
            <DrawerContainer ref={containerRef}>
                <Container
                    shape={Container.Shape.Drawer}
                    size={Size.Large}
                    style={style}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {children}
                </Container>
            </DrawerContainer>
        </Modal.Layer>
    )
}

export default DrawerDialog
