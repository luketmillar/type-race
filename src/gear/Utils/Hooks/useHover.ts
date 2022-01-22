import React from 'react'

import wrapRef from './WrapRef'

interface IOptions {
    delay?: number | undefined
}

export default function useHover<T extends Element = any>(
    options: IOptions = {},
    ref?: React.RefObject<T>
): [boolean, React.RefObject<T>] {
    const delayTimerRef = React.useRef<number | undefined>(undefined)
    const innerRef = wrapRef(ref)
    const [value, setValue] = React.useState(false)
    const clearDelayTimer = () => {
        if (delayTimerRef.current !== undefined) {
            window.clearTimeout(delayTimerRef.current)
        }
    }

    React.useEffect(() => {
        const handleMouseOver = () => {
            if (options.delay !== undefined) {
                clearDelayTimer()
                delayTimerRef.current = window.setTimeout(() => {
                    setValue(true)
                }, options.delay)
            } else {
                setValue(true)
            }
        }
        const handleMouseOut = () => {
            clearDelayTimer()
            setValue(false)
        }
        const node = innerRef.current
        if (node) {
            node.addEventListener('mouseover', handleMouseOver)
            node.addEventListener('mouseleave', handleMouseOut)

            return () => {
                clearDelayTimer()
                node.removeEventListener('mouseover', handleMouseOver)
                node.removeEventListener('mouseleave', handleMouseOut)
            }
        }
    }, [innerRef])

    return [value, innerRef]
}
