import { Color } from 'gear'
import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
    font-weight: 400;
    font-size: 19px;
    line-height: 24px;
`

const SubTitle = styled.div`
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.01em;
    margin-top: 4px;
    color: ${Color.palette.moody};
`

const Container = styled.div`
    padding: 24px;
`

interface IProps {
    title: string
    subtitle?: string
    id?: string
}
const Header = ({ title, subtitle, id }: IProps) => (
    <Container>
        <Title id={id ? `${id}_title` : undefined}>{title}</Title>
        {subtitle && <SubTitle id={`${id}_subtitle`}>{subtitle}</SubTitle>}
    </Container>
)
export default Header
