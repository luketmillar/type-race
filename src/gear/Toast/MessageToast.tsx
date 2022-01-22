import React from 'react'

import Toast, { Position } from './Component'

interface IProps {
    message: string
    position?: Position
    id?: string
}

const MessageToast = ({ message, position, id }: IProps) => <Toast message={message} position={position} id={id} />

export default MessageToast
