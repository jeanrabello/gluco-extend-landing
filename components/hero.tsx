"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface HeroProps {
  data: {
    name: string
    subtitle: string
    description: string
    originalPrice?: number
    checkoutUrl: string
    trustBadge: string
  }
}

export function Hero({ data }: HeroProps) {
  const handleBuyClick = () => {
    window.open(data.checkoutUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-cyan-50 to-sky-100 ">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center"> 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="    space-y-9
              bg-white/60
              border
              border-brand/30
              rounded-2xl
              p-10
              shadow-sm
              text-center lg:text-left"
          >
            <Badge className="bg-brand/10 text-brand hover:bg-brand/20 border-brand/20">{data.trustBadge}</Badge>
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-wide text-balance leading-tight  [text-shadow:2px_2px_0_oklch(0.42_0.18_25),-2px_-2px_0_oklch(0.42_0.18_25),2px_-2px_0_oklch(0.42_0.18_25),-2px_2px_0_oklch(0.42_0.18_25)]">{data.name}</h1>
          </div>
            <p className="text-3xl font-bold text-[oklch(0.42_0.18_25)] text-pretty">{data.subtitle}</p>

            <p className="text-base text-black max-w-xl leading-relaxed">{data.description}</p>

          

            <div className="flex flex-col sm:flex-row gap-3 pt-5 justify-end">
              <Button
              className= "bg-brand text-brand-foreground hover:bg-brand/90 text-base font-semibold cursor-pointer"
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("ingredients")?.scrollIntoView({ behavior: "smooth" })}
              >
                See Details
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <img src="/productUnit.png" alt={data.name} className="w-full h-full object-contain" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
