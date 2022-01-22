import * as Utils from 'gear/Utils'
import React from 'react'

export const handleWindowClickCapture = (
    onClose: (() => void) | undefined,
    containerRef: React.RefObject<HTMLElement>
) =>
    React.useCallback(
        (e: MouseEvent) => {
            const targetElement = e.target as HTMLElement
            if (
                !Utils.DOM.isChildOf(targetElement, containerRef.current!) &&
                !targetElement.classList.contains('submenu-item') &&
                targetElement.tagName !== 'BODY'
            ) {
                // if the click is outside of the flyout then close it
                //  BUT, if the click is on a submenu-item then dont close it otherwise the root
                //  menu container will always close when a submenu-item is clicked.
                // Also, agora fires click events on the body element every couple of seconds on iOS.
                // We don't want those closing dialogs
                onClose?.()
            }
        },
        [onClose]
    )
