import { motion } from "framer-motion"

import { fadeUp } from "@/lib/animations"

const SOLUTION_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"

const features = [
  {
    title: "Curated Feed",
    desc: "A daily signal pulled from the noise — only what is genuinely worth your attention.",
  },
  {
    title: "Writer Tools",
    desc: "Draft, publish, and grow with an editor that quietly gets out of your way.",
  },
  {
    title: "Community",
    desc: "Readers and writers in the same room, building on each other's ideas.",
  },
  {
    title: "Distribution",
    desc: "Your words, carried further — across feeds, inboxes, and AI answers.",
  },
]

export function Solution() {
  return (
    <section className="border-t border-border/30 px-6 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <motion.p
          {...fadeUp(0)}
          className="text-xs uppercase tracking-[3px] text-muted-foreground"
        >
          Solution
        </motion.p>

        <motion.h2
          {...fadeUp(0.1)}
          className="mt-5 max-w-3xl text-4xl font-medium tracking-[-1px] md:text-6xl"
        >
          The platform for{" "}
          <span className="font-serif font-normal italic">meaningful</span>{" "}
          content
        </motion.h2>

        <motion.video
          {...fadeUp(0.2)}
          className="mt-14 aspect-[3/1] w-full rounded-2xl object-cover"
          src={SOLUTION_VIDEO}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {features.map((f, i) => (
            <motion.div {...fadeUp(0.1 * i)} key={f.title}>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
