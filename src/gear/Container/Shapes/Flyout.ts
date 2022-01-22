import Shadows from 'gear/shadows'
import styled, { css, keyframes } from 'styled-components'

import Container from './Base'

const appearKeyframes = (x: number, y: number) => keyframes`
    from {
        opacity: 0;
        transform: translate(${x}px, ${y}px);
    }
    to {
        opacity: 1;
    }
`

const appearAnimation = (x: number, y: number) => css`
    animation: ${appearKeyframes(x, y)} 75ms linear;
`

const FlyoutContainer = styled(Container)`
    box-shadow: ${Shadows.overlay};

    [data-popper-placement^='top'] & {
        ${appearAnimation(0, 3)}
    }

    [data-popper-placement^='right'] & {
        ${appearAnimation(-3, 0)}
    }

    [data-popper-placement^='bottom'] & {
        ${appearAnimation(0, -3)}
    }

    [data-popper-placement^='left'] & {
        ${appearAnimation(3, 0)}
    }
`

export default FlyoutContainer
