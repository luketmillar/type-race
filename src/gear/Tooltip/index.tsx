import { Placement } from '@popperjs/core'
import Modal from 'gear/Modal'
import * as Utils from 'gear/Utils'
import React from 'react'
import { usePopper } from 'react-popper'
import whatInput from 'what-input'

import TooltipComponent from './component'
import * as Contents from './contents'
import { Variant } from './variants'

interface IProps {
    children: JSX.Element | JSX.Element[] | React.ReactNode
    targetRef: React.RefObject<any>
    variant?: Variant
    delay?: number
    placement?: Placement
    forceShow?: boolean
    style?: React.CSSProperties
}
const Tooltip = ({ children, targetRef, variant, delay = 200, placement = 'bottom', forceShow, style }: IProps) => {
    const [isHovered] = Utils.Hooks.useHover({}, targetRef)
    const [show, setShow] = React.useState(false)
    const [tooltipRef, setTooltipRef] = React.useState<HTMLDivElement | null>(null)
    const { styles, attributes } = usePopper(targetRef.current, tooltipRef, {
        placement,
        modifiers: [
            {
                name: 'offset',
                enabled: true,
                options: {
                    offset: [null, 6]
                }
            }
        ]
    })
    const timerRef = React.useRef<number | undefined>()
    React.useEffect(() => {
        window.clearTimeout(timerRef.current)
        timerRef.current = undefined
        if (isHovered) {
            timerRef.current = window.setTimeout(() => {
                timerRef.current = undefined
                setShow(true)
            }, delay)
        } else {
            setShow(false)
        }
    }, [isHovered, delay])
    if (!forceShow && (whatInput.ask() === 'touch' || !isHovered)) {
        return null
    }
    return (
        <Modal.Layer>
            <TooltipComponent
                ref={setTooltipRef}
                style={{
                    ...styles.popper,
                    opacity: forceShow || show ? 1 : 0,
                    zIndex: 10,
                    transition: 'opacity 100ms ease',
                    ...style
                }}
                variant={variant}
                {...attributes.popper}
            >
                {children}
            </TooltipComponent>
        </Modal.Layer>
    )
}
Tooltip.Variant = Variant
Tooltip.Contents = Contents

export default Tooltip
