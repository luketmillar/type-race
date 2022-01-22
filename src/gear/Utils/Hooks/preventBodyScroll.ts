import React from 'react'

// the reason this is wrapped in a setTimeout is because when these nest
//  the second one mounts before the first one unmounts. And really you want
//  to wait for the first to unmount so that we can restore the window scroll
//  so we can read it. This seems like an imperfect implemenetation though but
//  its working enough for now and I don't have more time to spend on it right now.
const preventBodyScroll = () => {
    React.useEffect(() => {
        let timeout: number | undefined
        const scrollY = window.scrollY
        const bodyWidth = document.body.style.width
        timeout = window.setTimeout(() => {
            timeout = undefined
            document.body.style.position = 'fixed'
            document.body.style.top = `-${scrollY}px`
            document.body.style.width = '100%'
        }, 100)
        return () => {
            if (timeout) {
                window.clearTimeout(timeout)
            } else {
                document.body.style.position = ''
                document.body.style.top = ''
                window.scrollTo(0, scrollY)
                document.body.style.width = bodyWidth
            }
        }
    }, [])
}

export default preventBodyScroll
