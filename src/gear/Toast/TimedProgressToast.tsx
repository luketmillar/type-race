import React from 'react'
import styled, { keyframes } from 'styled-components'

import Toast, { Position } from './Component'
import { ProgressBar } from './ProgressToast'

const fillProgress = keyframes`
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
`

interface ITimedProgressBarProps {
    duration: number
}

const TimedProgressBar = styled(ProgressBar).attrs({ progress: 0 })<ITimedProgressBarProps>`
    animation: ${fillProgress} ${props => props.duration - 100}ms linear 100ms forwards;
`

interface IProps {
    message: string
    duration: number
    position?: Position
}

const TimedProgressToast = ({ message, duration, position }: IProps) => (
    <Toast message={message} position={position}>
        <TimedProgressBar duration={duration} />
    </Toast>
)

export default TimedProgressToast
