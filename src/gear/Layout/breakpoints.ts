import { useMediaQuery } from 'gear/Utils/Hooks'

// breakpoints
const Large = 1300
const Medium = 600

export enum Breakpoint {
    Large,
    Medium,
    Small
}

const LargeMinQuery = `(min-width: ${Large}px)`
const MediumMaxQuery = `(max-width: ${Large - 1}px)`
const MediumMinQuery = `(min-width: ${Medium}px)`
const SmallMaxQuery = `(max-width: ${Medium - 1}px)`
export const MediaQuery = {
    Large: `@media ${LargeMinQuery}`,
    Medium: `@media ${MediumMinQuery} and ${MediumMaxQuery}`,
    Small: `@media ${SmallMaxQuery}`,

    NotLarge: `@media ${MediumMaxQuery}`,
    NotMedium: `@media ${SmallMaxQuery} or ${LargeMinQuery}`,
    NotSmall: `@media ${MediumMinQuery}`
}

export const useBreakpoint = () => {
    const large = useMediaQuery(MediaQuery.Large)
    const medium = useMediaQuery(MediaQuery.Medium)

    if (large) {
        return Breakpoint.Large
    } else if (medium) {
        return Breakpoint.Medium
    } else {
        return Breakpoint.Small
    }
}
