import * as PopperJS from '@popperjs/core'
import Container from 'gear/Container'
import Modal from 'gear/Modal'
import { Size } from 'gear/size'
import * as Utils from 'gear/Utils'
import maxSize from 'popper-max-size-modifier'
import React from 'react'
import { usePopper } from 'react-popper'

import { handleWindowClickCapture } from '../handleWindowClickCapture'

type Target = { ref: React.RefObject<any>; placement: PopperJS.Placement; offset?: [number | null, number | null] }
type PositionPlacement = {
    position: { x: number; y: number }
    placement: PopperJS.Placement
    offset?: [number | null, number | null]
}
export type Position = PositionPlacement | Target

const isPosition = (position: Position): position is PositionPlacement => {
    return !position.hasOwnProperty('ref')
}

export interface IProps {
    children: React.ReactNode
    position: Position
    style?: React.CSSProperties
    size?: Size
    onClose?: () => void
    onMouseEnter?: React.MouseEventHandler
    onMouseLeave?: React.MouseEventHandler
}
const FlyoutDialog = ({ onClose, position, size = Size.Medium, ...rest }: IProps) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    Utils.Events.useWindowEscape(onClose)
    Utils.Events.useWindowClick(handleWindowClickCapture(onClose, containerRef), true)
    if (isPosition(position)) {
        return <PositionedFlyout containerRef={containerRef} position={position} size={size} {...rest} />
    } else {
        return <RelativeFlyout containerRef={containerRef} target={position} size={size} {...rest} />
    }
}

interface IPositionedProps extends Omit<IProps, 'position' | 'onClose' | 'size'> {
    position: PositionPlacement
    size: Size
    containerRef: React.RefObject<any>
}
const PositionedFlyout = ({ position, size = Size.Medium, ...rest }: IPositionedProps) => {
    const ref = React.useRef(null)
    return (
        <>
            <div style={{ position: 'absolute', top: position.position.y, left: position.position.x }} ref={ref} />
            <RelativeFlyout
                target={{ ref, placement: position.placement, offset: position.offset }}
                size={size}
                {...rest}
            />
        </>
    )
}

interface IRelativeProps extends Omit<IProps, 'position' | 'onClose' | 'size'> {
    target: Target
    size: Size
    containerRef: React.RefObject<any>
}
const RelativeFlyout = ({
    target,
    size,
    style,
    containerRef,
    onMouseEnter,
    onMouseLeave,
    children
}: IRelativeProps) => {
    const [flyoutElement, setFlyoutRef] = React.useState<HTMLDivElement | null>(null)
    const { styles, attributes, state } = usePopper(target.ref.current, flyoutElement, {
        placement: target.placement,
        modifiers: [
            {
                name: 'offset',
                enabled: true,
                options: {
                    offset: target.offset ?? [null, 6]
                }
            },
            maxSize
        ]
    })
    const max = state?.modifiersData?.maxSize ?? {}
    return (
        <Modal.Layer trapFocus>
            <div
                ref={setFlyoutRef}
                style={{
                    ...styles.popper,
                    maxHeight: max.height,
                    maxWidth: max.width,
                    display: 'flex'
                }}
                {...attributes.popper}
            >
                <Container
                    innerRef={containerRef}
                    shape={Container.Shape.Flyout}
                    size={size}
                    style={style}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {children}
                </Container>
            </div>
        </Modal.Layer>
    )
}

export default FlyoutDialog
