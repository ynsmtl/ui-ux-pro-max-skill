import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { fadeUp } from "@/lib/animations"
import avatar1 from "@/assets/avatar-1.png"
import avatar2 from "@/assets/avatar-2.png"
import avatar3 from "@/assets/avatar-3.png"

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"

const avatars = [avatar1, avatar2, avatar3]

const MotionButton = motion.create(Button)

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* smooth fade to black at the bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 flex flex-col items-center pt-28 md:pt-32">
        <motion.div
          {...fadeUp(0)}
          className="mb-8 flex items-center gap-3"
        >
          <div className="flex -space-x-2">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-8 w-8 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            7,000+ people already subscribed
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="max-w-4xl text-5xl font-medium tracking-[-2px] md:text-7xl lg:text-8xl"
        >
          Get <span className="font-serif font-normal italic">Inspired</span> with
          Us
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 max-w-2xl text-lg text-hero-subtitle"
        >
          Join our feed for meaningful updates, news around technology and a
          shared journey toward depth and direction.
        </motion.p>

        <motion.form
          {...fadeUp(0.3)}
          onSubmit={(e) => e.preventDefault()}
          className="liquid-glass mt-10 flex w-full max-w-lg items-center gap-2 rounded-full p-2"
        >
          <Input
            type="email"
            required
            placeholder="Enter your email"
            aria-label="Email address"
            className="h-11 flex-1 border-0 bg-transparent px-5 text-base text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-0"
          />
          <MotionButton
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="h-auto shrink-0 rounded-full px-8 py-3 text-sm font-semibold"
          >
            SUBSCRIBE
          </MotionButton>
        </motion.form>
      </div>
    </section>
  )
}
