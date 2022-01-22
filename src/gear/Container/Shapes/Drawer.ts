import styled from 'styled-components'

import Container from './Base'

const DrawerContainer = styled(Container)`
    flex: 1;
    overflow: hidden;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default DrawerContainer
