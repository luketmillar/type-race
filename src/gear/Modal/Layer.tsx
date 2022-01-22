import * as Utils from 'gear/Utils'
import React from 'react'
import ReactDOM from 'react-dom'

interface IProps {
    children: React.ReactNode
    trapFocus?: boolean
    trapKeyboard?: boolean
    id?: string | undefined
    onClick?: () => void
    trapClicks?: boolean
}
export default class ModalLayer extends React.Component<IProps> {
    private _modalRoot: HTMLElement | null = null
    private _element: HTMLDivElement
    private listeningToKey = false
    constructor(props: IProps) {
        super(props)
        this._element = document.createElement('div')
        this._modalRoot = document.getElementById('modalRoot2')
        // Since the modal root is a sibling of the App root,
        // the font family set in the app root won't apply to children of the modal root,
        // so set it here as well
        if (this._modalRoot != null) {
            this._modalRoot.style.fontFamily = 'Arial'
            this._modalRoot.style.position = 'fixed'
            this._modalRoot.style.top = '0px'
            this._modalRoot.style.left = '0px'
            this._modalRoot.style.width = '100%'
            this._modalRoot.style.height = '100%'
            this._modalRoot.style.zIndex = '99999999'
            this._modalRoot.style.pointerEvents = 'none'
        }
        if (this.props.trapClicks !== false) {
            this._element.style.pointerEvents = 'all'
        }
        if (props.id) {
            this._element.id = props.id
        }
    }

    public componentDidMount() {
        this._modalRoot?.appendChild(this._element)
        this._element.style.outline = 'none'
        if (this.props.trapFocus) {
            this._element.tabIndex = 0
            this._element.style.userSelect = 'none'
            this._element.focus()
        }
        if (this.props.trapKeyboard) {
            this.listeningToKey = true
            document.addEventListener('keydown', this.handleKey, true)
        }
    }

    public componentWillUnmount() {
        this._modalRoot?.removeChild(this._element)
        if (this.listeningToKey) {
            document.removeEventListener('keydown', this.handleKey, true)
        }
    }

    public render() {
        return ReactDOM.createPortal(this.props.children, this._element)
    }

    private handleKey = (e: KeyboardEvent) => {
        // React synthetic events occur after javascript native events, so adding a special case here to allow enter key
        // to be propogated to inputs
        if (this.props.trapKeyboard && e.key !== 'Enter') {
            e.stopPropagation()
            e.stopImmediatePropagation()
        }
        const isTab = e.key === 'Tab'
        if (!isTab) {
            return
        }
        const isWithinModalLayer = Utils.DOM.isChildOf(document.activeElement, this._element)
        if (!isWithinModalLayer) {
            this._element.focus()
        }
    }
}
