import React from 'react'

// this is like a memo for a callback function so that even if the underlying callback fn
//  changes refrence, the resulting callback function is still memoized as the same reference
const useWrappedCallback = function <T>(cb: ((...args: T[]) => void) | undefined) {
    const refObject = React.useRef(cb)
    refObject.current = cb
    const wrapped = React.useCallback((...args: T[]) => {
        refObject.current?.(...args)
    }, [])
    return wrapped
}

export default useWrappedCallback
