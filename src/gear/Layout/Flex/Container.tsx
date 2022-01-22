import styled from 'styled-components'

export type Direction = 'column' | 'row'
export type GapSize = 'none' | 'small' | 'default' | 'large'
export type Gap = number | GapSize

const getGapSize = (gap: Gap = 'default') => {
    switch (gap) {
        case 'none':
            return 0
        case 'small':
            return 4
        case 'default':
            return 8
        case 'large':
            return 12
        case 'xlarge':
            return 24
        default:
            return gap
    }
}

const Flex = styled.div<{ direction?: Direction; gap?: Gap }>`
    display: flex;
    flex-direction: ${props => props.direction ?? 'row'};

    > *:not(:last-child) {
        ${props =>
            props.direction === 'column'
                ? `margin-bottom: ${getGapSize(props.gap)}px;`
                : `margin-right: ${getGapSize(props.gap)}px;`};
    }
`

export default Flex
