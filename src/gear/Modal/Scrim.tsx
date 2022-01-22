import * as Layout from 'gear/Layout'
import React from 'react'
import styled from 'styled-components'

const ScrimComponent = styled(props => <Layout.AbsoluteCenter {...props} />)`
    background: rgba(3, 7, 17, 0.5);
`

interface IProps extends Omit<React.ObjectHTMLAttributes<HTMLDivElement>, 'onClick'> {
    onClick?: (e: React.MouseEvent) => void
}
const Scrim = ({ onClick, ...rest }: IProps) => {
    const handleClick = React.useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation()
            onClick?.(e)
        },
        [onClick]
    )
    return <ScrimComponent {...rest} onClick={handleClick} />
}

export default Scrim
