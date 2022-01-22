import React from 'react'

import useWindowKeyEvent from './useWindowKeyEvent'

const keyMatch = [{ key: 'Enter' }]
const useWindowEnter = (onEnter?: () => void) => {
    const handleEnter = React.useCallback(() => {
        onEnter?.()
    }, [onEnter])
    useWindowKeyEvent(keyMatch, handleEnter)
}

export default useWindowEnter
