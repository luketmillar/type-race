import styled from 'styled-components'

export const AbsoluteFull = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const AbsoluteCenter = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
