import Header from 'gear/Dialog/Contents/Header'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`

const BodyContainer = styled.div`
    padding: 0 24px;
    margin-bottom: 2px;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.01em;
`
interface IProps {
    title?: string
    subtitle?: string
    children?: React.ReactNode
    width?: number | string
    maxWidth?: number | string
    id?: string
}
const RegularContents = ({ title, subtitle, children, width = 360, maxWidth, id, ...rest }: IProps) => {
    return (
        <Container {...rest} style={{ width, maxWidth }} id={id}>
            {title && <Header id={id} title={title} subtitle={subtitle} />}
            <BodyContainer id={id ? `${id}_body` : undefined}>{children}</BodyContainer>
        </Container>
    )
}

export default RegularContents
