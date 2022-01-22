import { Color, Container, Icons, Layout, Modal, Utils } from 'gear'
import Button from 'gear/Button'
import { Size } from 'gear/size'
import { Theme } from 'gear/Theme'
import React from 'react'
import styled from 'styled-components'

const DesktopCloseButton = styled(Button)`
    position: absolute;
    left: calc(100% + 16px);
    top: 0;
    background-color: white;
    box-shadow: 0 4px 6px -1px ${Color.alpha(Color.palette.deep, 0.22)};
    cursor: pointer;
`

const CenterLayout = styled(props => <Layout.AbsoluteCenter {...props} />)<{ verticalMargin: number }>`
    max-height: calc(100% - ${props => props.verticalMargin * 2}px);
    display: flex;
`

const FlexContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`

interface IProps {
    children: React.ReactNode
    theme?: Theme
    size?: Size
    onClose?: () => void
    id?: string
    verticalMargin?: number
    showCloseX?: boolean
}
const ModalDialog = ({ children, size = Size.Large, theme, id, onClose, verticalMargin = 20, showCloseX }: IProps) => {
    Utils.Events.useWindowEscape(onClose)
    return (
        <Modal.Layer id={id} onClick={onClose} trapFocus trapKeyboard>
            <>
                <Modal.Scrim onClick={onClose} />
                <CenterLayout verticalMargin={verticalMargin}>
                    <FlexContainer theme={theme} size={size}>
                        {showCloseX && (
                            <DesktopCloseButton shape={Button.Shape.Circle} onClick={onClose}>
                                <Icons.TimesLarge size={24} />
                            </DesktopCloseButton>
                        )}
                        {children}
                    </FlexContainer>
                </CenterLayout>
            </>
        </Modal.Layer>
    )
}

export default ModalDialog
