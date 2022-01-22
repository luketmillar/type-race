import React from 'react'

export default function useExpiringState<T>(
    duration: number,
    initialState?: T | undefined
): [T | undefined, (value: T) => void] {
    const [value, setValue] = React.useState<T | undefined>(initialState)

    const timeoutRef = React.useRef<number | undefined>()
    const set = React.useCallback(
        (value: T) => {
            setValue(value)
            if (timeoutRef.current) {
                window.clearTimeout(timeoutRef.current)
            }
            timeoutRef.current = window.setTimeout(() => {
                setValue(undefined)
            }, duration)
        },
        [duration]
    )

    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                window.clearTimeout(timeoutRef.current)
            }
        }
    }, [])
    return [value, set]
}
