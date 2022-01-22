import React from 'react'

const stopPropagation = (e: Event | React.SyntheticEvent) => {
    e.stopPropagation()
}

export default stopPropagation
