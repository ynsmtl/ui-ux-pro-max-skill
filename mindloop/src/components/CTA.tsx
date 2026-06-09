import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Hls from "hls.js"

import { Button } from "@/components/ui/button"
import { ConcentricMark } from "@/components/icons"
import { fadeUp } from "@/lib/animations"

const CTA_HLS =
  "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"

const MotionButton = motion.create(Button)

export function CTA() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hls: Hls | undefined

    if (Hls.isSupported()) {
      hls = new Hls()
      hls.loadSource(CTA_HLS)
      hls.attachMedia(video)
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari ships native HLS playback
      video.src = CTA_HLS
    }

    return () => hls?.destroy()
  }, [])

  return (
    <section className="relative overflow-hidden border-t border-border/30 px-6 py-32 md:py-44">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-background/45" />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <motion.div {...fadeUp(0)}>
          <ConcentricMark outerClassName="h-10 w-10" innerClassName="h-5 w-5" />
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="mt-8 text-5xl font-medium tracking-[-1px] md:text-7xl"
        >
          Start Your <span className="font-serif font-normal italic">Journey</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 max-w-md text-lg text-muted-foreground"
        >
          Whether you are here to read or to write, this is where your next
          chapter begins.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MotionButton
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="h-auto rounded-lg px-8 py-3.5 text-sm font-semibold"
          >
            Subscribe Now
          </MotionButton>
          <MotionButton
            variant="glass"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass h-auto rounded-lg px-8 py-3.5 text-sm font-semibold"
          >
            Start Writing
          </MotionButton>
        </motion.div>
      </div>
    </section>
  )
}
