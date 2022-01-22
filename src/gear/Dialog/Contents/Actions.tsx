import { notNullFilter } from 'gear/Utils/Arrays'
import React from 'react'
import styled from 'styled-components'

import Footer from './Footer'

const Spacer = styled.div`
    height: 100%;
    width: 8px;
    flex-shrink: 0;
`

interface IProps {
    children: React.ReactNode | React.ReactNode[]
    style?: React.CSSProperties
}
const Actions = ({ children, style }: IProps) => {
    const childNodes = React.Children.toArray(children).filter(notNullFilter)
    return (
        <Footer style={style}>
            {childNodes.map((child, i) => (
                <React.Fragment key={i}>
                    {i > 0 && <Spacer />}
                    {child}
                </React.Fragment>
            ))}
        </Footer>
    )
}

export default Actions
