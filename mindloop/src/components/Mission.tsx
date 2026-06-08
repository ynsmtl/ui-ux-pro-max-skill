import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion"

const MISSION_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"

const PARA1 =
  "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having."
const PARA2 =
  "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved."

const HIGHLIGHT = new Set(["curiosity", "meets", "clarity"])

function Word({
  children,
  progress,
  range,
  highlight,
}: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
  highlight: boolean
}) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <motion.span
      style={{ opacity }}
      className={highlight ? "text-foreground" : "text-hero-subtitle"}
    >
      {children}{" "}
    </motion.span>
  )
}

export function Mission() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  })

  const words1 = PARA1.split(" ")
  const words2 = PARA2.split(" ")
  const total = words1.length + words2.length

  return (
    <section className="px-6 pb-32 pt-0 md:pb-44">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <video
          className="mb-16 aspect-square w-full max-w-[800px] rounded-3xl object-cover md:mb-24"
          src={MISSION_VIDEO}
          autoPlay
          loop
          muted
          playsInline
        />

        <div ref={ref} className="max-w-4xl text-center">
          <p className="text-2xl font-medium tracking-[-1px] md:text-4xl lg:text-5xl">
            {words1.map((word, i) => (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[i / total, (i + 1) / total]}
                highlight={HIGHLIGHT.has(word)}
              >
                {word}
              </Word>
            ))}
          </p>

          <p className="mt-10 text-xl font-medium md:text-2xl lg:text-3xl">
            {words2.map((word, i) => {
              const gi = words1.length + i
              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[gi / total, (gi + 1) / total]}
                  highlight
                >
                  {word}
                </Word>
              )
            })}
          </p>
        </div>
      </div>
    </section>
  )
}
