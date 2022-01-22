import { Button, Theme } from 'gear'
import Color from 'gear/Color'
import React from 'react'
import styled from 'styled-components'

import Toast, { Position } from './Component'

interface IProps {
    message: string
    actionLabel: string
    onAction: () => void
    position?: Position
}

const Action = styled(Button)`
    margin-left: 12px;
    &:hover:not(:disabled) {
        background-color: ${Color.alpha(Color.palette.white, 0.2)};
    }
`

const ActionToast = ({ message, actionLabel, onAction, position }: IProps) => (
    <Toast message={message} position={position}>
        <Action type={Button.Type.Clear} size={Button.Size.Large} onClick={onAction} theme={Theme.Dark}>
            {actionLabel}
        </Action>
    </Toast>
)

export default ActionToast
