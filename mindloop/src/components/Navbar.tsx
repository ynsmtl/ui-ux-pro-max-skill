import { motion } from "framer-motion"

import { ConcentricMark, Instagram, Linkedin, Twitter } from "@/components/icons"

const navLinks = ["Home", "How It Works", "Philosophy", "Use Cases"]

const socials = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Twitter, label: "Twitter" },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-8 py-4 md:px-28"
    >
      <nav className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2.5">
            <ConcentricMark outerClassName="h-7 w-7" innerClassName="h-3 w-3" />
            <span className="text-lg font-bold tracking-tight">Mindloop</span>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link, i) => (
              <div key={link} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="text-xs text-muted-foreground/40">•</span>
                )}
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}
