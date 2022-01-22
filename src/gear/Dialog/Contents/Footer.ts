import Drawer from 'gear/Container/Shapes/Drawer'
import styled from 'styled-components'

const Footer = styled.div`
    padding: 24px;
    display: flex;
    justify-content: flex-end;
    align-self: stretch;

    ${Drawer} & {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
`

export default Footer
