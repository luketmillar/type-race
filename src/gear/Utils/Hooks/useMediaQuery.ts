import React from 'react'

const useMediaQuery = (query: string) => {
    const trimmedQuery = React.useMemo(() => query.replace('@media ', ''), [query])
    const mediaQuery = React.useMemo(() => window.matchMedia(trimmedQuery), [trimmedQuery])
    const [matches, setMatches] = React.useState(mediaQuery.matches)

    React.useEffect(() => {
        setMatches(mediaQuery.matches)
    }, [mediaQuery])

    React.useEffect(() => {
        const listener = () => {
            setMatches(mediaQuery.matches)
        }
        if ('addEventListener' in mediaQuery) {
            mediaQuery.addEventListener('change', listener)
        } else {
            ;(mediaQuery as any).addListener(listener)
        }
        return () => {
            if ('addEventListener' in mediaQuery) {
                mediaQuery.removeEventListener('change', listener)
            } else {
                ;(mediaQuery as any).removeListener(listener)
            }
        }
    }, [mediaQuery])

    return matches
}

export default useMediaQuery
