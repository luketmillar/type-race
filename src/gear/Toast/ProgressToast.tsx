import Color from 'gear/Color'
import React from 'react'
import styled from 'styled-components'

import Toast, { Position } from './Component'

interface IProgressBarProps {
    progress: number
}

export const ProgressBar = styled.div.attrs<IProgressBarProps>(props => ({
    style: {
        width: `${props.progress * 100}%`
    }
}))<IProgressBarProps>`
    background-color: ${Color.palette.pink.default};
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 50ms linear;
`

interface IProps {
    message: string
    progress: number
    position?: Position
    id?: string
}

const ProgressToast = ({ message, progress, position, id }: IProps) => (
    <Toast message={message} position={position} id={id}>
        <ProgressBar progress={progress} />
    </Toast>
)

export default ProgressToast
