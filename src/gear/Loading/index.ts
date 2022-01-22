import { Color } from 'gear'
import styled, { keyframes } from 'styled-components'

const alphaWhite = (alpha: number) => Color.alpha(Color.palette.white, alpha)

const Item = styled.div`
    background: ${Color.palette.silver};
`
const shimmer = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
`

const Container = styled.div`
    position: relative;
    width: 100%;
    &::after {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        content: '';
        background: linear-gradient(
            90deg,
            ${alphaWhite(0)} 30%,
            ${alphaWhite(0.2)} 40%,
            ${alphaWhite(0.4)} 50%,
            ${alphaWhite(0.2)} 60%,
            ${alphaWhite(0)} 70%
        );
        animation: ${shimmer} 2s infinite;
    }
`

export default { Container, Item }
