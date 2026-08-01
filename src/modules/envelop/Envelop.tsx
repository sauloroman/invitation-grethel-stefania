import React, { useRef, useState } from 'react'
import { useNavigation, useMusicPlayer } from '@/common/hooks'
import envelop from '@/assets/images/backgrounds/envelop.svg'
import sello from '@/assets/images/icons/sello.svg'
import envelopVideo from '@/assets/videos/envelop-video.mp4'

export const Envelop: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const { goTo } = useNavigation()
    const { onPlayMusic } = useMusicPlayer()

    const handleOpen = () => {
        // Start the music
        onPlayMusic()
        setIsPlaying(true)

        // Give React a tiny tick to make video visible before playing
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play().catch((error) => {
                    console.error('Error attempting to play video:', error)
                })
            }
        }, 50)
    }

    const handleVideoEnded = () => {
        goTo('/')
    }

    return (
        <div className="envelop">
            <video
                ref={videoRef}
                src={envelopVideo}
                playsInline
                muted
                preload="auto"
                className="envelop__video"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: isPlaying ? 2 : 1,
                    opacity: isPlaying ? 1 : 0,
                    pointerEvents: isPlaying ? 'auto' : 'none',
                }}
                onEnded={handleVideoEnded}
            />

            {!isPlaying && (
                <div 
                    className="envelop__bg" 
                    style={{ 
                        backgroundImage: `url(${envelop})`,
                        zIndex: 3
                    }}
                    onClick={handleOpen}
                >
                    <div className="envelop__sello">
                        <img src={sello} alt="Sello" />
                    </div>
                </div>
            )}
        </div>
    )
}
