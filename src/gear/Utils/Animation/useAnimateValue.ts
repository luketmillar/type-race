import React from 'react'

export default function useAnimateValue<T>(value: T, hideDuration: number): { value: T; hide: boolean } {
    const [lastValue, setLastValue] = React.useState<T>(value)
    React.useEffect(() => {
        if (value) {
            setLastValue(value)
            return
        }
        const timer = setTimeout(() => {
            setLastValue(value)
        }, hideDuration)
        return () => {
            clearTimeout(timer)
        }
    }, [value, hideDuration])
    return { value: lastValue, hide: !value }
}
