import { motion } from "framer-motion"

import { fadeUp } from "@/lib/animations"
import iconChatgpt from "@/assets/icon-chatgpt.png"
import iconPerplexity from "@/assets/icon-perplexity.png"
import iconGoogle from "@/assets/icon-google.png"

const platforms = [
  {
    name: "ChatGPT",
    icon: iconChatgpt,
    desc: "Millions ask it for recommendations every day. Make sure your story is the one it tells.",
  },
  {
    name: "Perplexity",
    icon: iconPerplexity,
    desc: "The answer engine cites its sources. Become one of the voices worth citing.",
  },
  {
    name: "Google AI",
    icon: iconGoogle,
    desc: "AI Overviews now sit above every result. Show up where the questions get answered.",
  },
]

export function SearchChanged() {
  return (
    <section className="px-6 pb-6 pt-52 md:pb-9 md:pt-64">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          {...fadeUp(0)}
          className="text-5xl font-medium tracking-[-2px] md:text-7xl lg:text-8xl"
        >
          Search has <span className="font-serif font-normal italic">changed.</span>{" "}
          Have you?
        </motion.h2>

        <motion.p
          {...fadeUp(0.1)}
          className="mx-auto mb-24 mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          The way people discover ideas has fundamentally shifted. Answers are
          formed inside AI now — and that is exactly where your audience is making
          up its mind.
        </motion.p>

        <div className="mb-20 grid gap-12 md:grid-cols-3 md:gap-8">
          {platforms.map((p, i) => (
            <motion.div
              {...fadeUp(0.1 * i)}
              key={p.name}
              className="flex flex-col items-center"
            >
              <img
                src={p.icon}
                alt={`${p.name} icon`}
                width={200}
                height={200}
                className="h-[200px] w-[200px]"
              />
              <h3 className="text-base font-semibold">{p.name}</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.1)}
          className="text-center text-sm text-muted-foreground"
        >
          If you don't answer the questions, someone else will.
        </motion.p>
      </div>
    </section>
  )
}
