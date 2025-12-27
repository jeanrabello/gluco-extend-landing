"use client"

import { Sparkles, Shield, Heart, Zap, Award, Clock, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Shield,
  Heart,
  Zap,
  Award,
  Clock,
}

interface Benefit {
  icon: string
  title: string
  description: string
}

interface BenefitsProps {
  benefits: Benefit[]
}

export function Benefits({ benefits }: BenefitsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="benefits" className="py-20 bg-gradient-to-r from-white to-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Por Que Escolher o Kit Pro Saúde?</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Desenvolvido com os melhores componentes para transformar sua rotina
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
