"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface FinalCTAProps {
  data: {
    name: string
    checkoutUrl: string
  }
}

export function FinalCTA({ data }: FinalCTAProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleBuyClick = () => {
    window.open(data.checkoutUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <Badge className="bg-white/20 text-white hover:bg-white/30">
            Oferta por Tempo Limitado
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-bold text-balance">Pronto Para Transformar Sua Rotina?</h2>

          <p className="text-lg text-white/90 text-pretty">
            Junte-se a milhares de pessoas que já estão vivendo melhor com o {data.name}
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-white text-cyan-700 hover:bg-white/90 text-base font-semibold"
              onClick={handleBuyClick}
            >
              Garantir Meu Kit Agora
            </Button>
            <p className="text-sm text-white/80">
              ✓ Garantia de 7 dias • ✓ Frete grátis • ✓ Suporte dedicado
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
