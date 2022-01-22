import { useWindowClick, useWindowEventListener } from 'gear/Utils/Events'
import React from 'react'

import { mp4, webm } from './media'

class VideoHandler {
    private videoElement: HTMLVideoElement | undefined
    private isEnabled = false

    public create() {
        this.disable()
        this.videoElement = document.createElement('video')
        this.videoElement.setAttribute('title', 'Projector')
        this.videoElement.setAttribute('playsinline', '')
        this.addSource('webm', webm)
        this.addSource('mp4', mp4)
        this.videoElement.addEventListener('loadedmetadata', this.handleLoadedMetadata)
    }

    public enable = async () => {
        if (!this.isEnabled) {
            try {
                await this.videoElement?.play()
                this.isEnabled = true
            } catch (e) {
                // if play fails, recreate the video, so it will hopefully play on next attempt
                this.create()
            }
        }
    }

    public disable() {
        this.isEnabled = false
        if (this.videoElement) {
            this.videoElement.pause()
            this.videoElement.removeEventListener('loadedmetadata', this.handleLoadedMetadata)
            this.videoElement.removeEventListener('timeupdate', this.handleTimeUpdate)
            this.videoElement = undefined
        }
    }

    public onVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
            this.create()
        } else {
            this.disable()
        }
    }

    private handleTimeUpdate = () => {
        if (this.videoElement && this.videoElement.currentTime > 0.5) {
            this.videoElement.currentTime = Math.random()
        }
    }

    private handleLoadedMetadata = () => {
        if (this.videoElement && this.videoElement.duration <= 1) {
            // webm source
            this.videoElement.setAttribute('loop', '')
        } else {
            // mp4 source
            this.videoElement?.addEventListener('timeupdate', this.handleTimeUpdate)
        }
    }

    private addSource(type: string, src: any) {
        if (this.videoElement) {
            const source = document.createElement('source')
            source.src = src
            source.type = `video/${type}`
            this.videoElement.appendChild(source)
        }
    }
}

const useVideo = () => {
    const video = React.useMemo(() => new VideoHandler(), [])
    React.useEffect(() => {
        video.create()
        return () => video.disable()
    }, [video])

    useWindowEventListener('visibilitychange', video.onVisibilityChange)
    useWindowClick(video.enable, true)
}

export default useVideo
