import React from 'react'
import * as ReactDOM from 'react-dom'

export type EventListenerOptions = AddEventListenerOptions | undefined

export const useWindowEventListener = (eventName: string, listener: EventListener, options?: EventListenerOptions) => {
    const onEvent = React.useCallback(
        event => {
            ReactDOM.unstable_batchedUpdates(() => {
                listener(event)
            })
        },
        [listener]
    )

    const memoizedOptions = React.useMemo(() => {
        return options
    }, [options?.passive, options?.capture, options?.once])

    React.useEffect(() => {
        const event = onEvent
        window.addEventListener(eventName, event, memoizedOptions)
        return () => window.removeEventListener(eventName, event, memoizedOptions)
    }, [eventName, onEvent, memoizedOptions])
}

interface IProps {
    eventName: string
    listener: EventListener
    options?: EventListenerOptions
}

const WindowEventListener = ({ eventName, listener, options }: IProps) => {
    useWindowEventListener(eventName, listener, options)
    return null
}

export default WindowEventListener
