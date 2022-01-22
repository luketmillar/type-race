import Color from 'gear/Color'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 4px;
`
const Title = styled.div`
    font-weight: 500;
    color: ${Color.palette.white};
`
const Subtitle = styled.div`
    margin-top: 4px;
    color: ${Color.palette.moody};
`

interface IProps {
    title: string
    subtitle?: string
    style?: React.CSSProperties
}
const Regular = ({ title, subtitle, style }: IProps) => {
    return (
        <Container style={style}>
            <Title>{title}</Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Container>
    )
}

export default Regular
