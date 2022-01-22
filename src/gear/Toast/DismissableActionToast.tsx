import { Button, Theme } from 'gear'
import Color from 'gear/Color'
import * as Icons from 'gear/Icons'
import React from 'react'
import styled from 'styled-components'

import Toast, { Position } from './Component'

interface IProps {
    message: string
    actionLabel: string
    onAction: () => void
    onDismiss: () => void
    position?: Position
}

const Action = styled(Button)`
    margin-left: 12px;
    &:hover:not(:disabled) {
        background-color: ${Color.alpha(Color.palette.white, 0.2)};
    }
`

const Dismiss = styled(Button)`
    margin-left: 4px;
    padding: 4px;
    cursor: pointer;
    &:hover:not(:disabled) {
        background-color: transparent;
    }
`

const DismissableActionToast = ({ message, actionLabel, onAction, onDismiss, position = 'bottom' }: IProps) => (
    <Toast message={message} position={position}>
        <Action type={Button.Type.Clear} size={Button.Size.Large} onClick={onAction} theme={Theme.Dark}>
            {actionLabel}
        </Action>
        <Dismiss type={Button.Type.Clear} size={Button.Size.Large} onClick={onDismiss}>
            <Icons.TimesLarge fill={Color.palette.white} />
        </Dismiss>
    </Toast>
)

export default DismissableActionToast
