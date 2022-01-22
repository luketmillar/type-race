import React from 'react'

const wrapRef = <T>(ref: React.RefObject<T> | undefined | null) => {
    // need to call hooks in the same order regardless of inputs so we always create the ref
    const placeholderRef = React.useRef<T | null>(null)
    if (ref) {
        // clear out the ref if we're not using it anymore
        placeholderRef.current = null
        return ref
    }
    return placeholderRef
}

export default wrapRef
