"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface PricingPlan {
  id: string
  name: string
  supply: string
  bottles: number
  pricePerBottle: number
  originalTotal: number
  finalTotal: number
  freeShipping: boolean
  bonuses: number
  badge?: "best-value" | "most-popular"
  checkoutUrl: string
  highlighted?: boolean
  image: string
}

interface PricingPlansProps {
  plans: PricingPlan[]
}

export function PricingPlans({ plans }: PricingPlansProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleBuyClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="pricing" className="py-20 bg-gradient-to-tr from-white via-sky-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Choose Your Package</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Select the best option for your wellness journey
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card
                className={`relative flex flex-col w-full overflow-hidden transition-transform duration-300 hover:scale-105 ${
                  plan.highlighted
                    ? "border-2 border-cyan-500 shadow-xl shadow-cyan-500/20 bg-gradient-to-b from-amber-50 to-white"
                    : "border border-slate-200 bg-white"
                }`}
              >
                {/* Badge de destaque */}
                {plan.badge && (
                  <div className="absolute -top-0 -right-0">
                    <Badge
                      className={`rounded-none rounded-bl-lg px-3 py-1.5 text-xs font-bold ${
                        plan.badge === "best-value"
                          ? "bg-red-500 text-white hover:bg-red-500"
                          : "bg-red-500 text-white hover:bg-red-500"
                      }`}
                    >
                      {plan.badge === "best-value" ? "BEST VALUE" : "MOST POPULAR"}
                    </Badge>
                  </div>
                )}

                {/* Tags flutuantes */}
                <div className="absolute top-1/2 -right-2 rotate-12 z-10">
                  <Badge className={`px-3 py-1 text-xs font-bold shadow-lg ${
                    plan.freeShipping
                      ? "bg-blue-900 text-white hover:bg-blue-900"
                      : "bg-amber-400 text-slate-800 hover:bg-amber-400"
                  }`}>
                    {plan.freeShipping ? "FREE SHIPPING" : "+ SHIPPING"}
                  </Badge>
                </div>

                {plan.bonuses > 0 && (
                  <div className="absolute top-[58%] -right-1 rotate-6 z-10">
                    <Badge className="bg-red-500 text-white px-3 py-1 text-xs font-bold shadow-lg hover:bg-red-500">
                      +{plan.bonuses} FREE BONUSES
                    </Badge>
                  </div>
                )}

                <CardContent className="flex flex-col flex-1 p-6 pt-8">
                  {/* Header */}
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">{plan.name}</h3>
                    <p className="text-sm text-slate-600">
                      {plan.supply} ({plan.bottles} {plan.bottles === 1 ? "Bottle" : "Bottles"})
                    </p>
                  </div>

                  {/* Imagem do produto */}
                  <div className="relative h-40 mb-4 flex items-center justify-center">
                    <img
                      src={plan.image}
                      alt={plan.name}
                      className="h-full object-contain"
                    />
                  </div>

                  {/* Preço por unidade */}
                  <div className="text-center mb-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-slate-900">${plan.pricePerBottle}</span>
                      <span className="text-sm text-slate-500">Per<br />Bottle</span>
                    </div>
                  </div>

                  {/* Botão de compra */}
                  <Button
                    size="lg"
                    className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-lg py-6 mb-4 cursor-pointer"
                    onClick={() => handleBuyClick(plan.checkoutUrl)}
                  >
                    BUY NOW
                  </Button>

                  {/* Total */}
                  <div className="text-center">
                    <span className="text-sm text-slate-600">TOTAL: </span>
                    <span className="text-sm text-slate-400 line-through">${plan.originalTotal}</span>
                    <span className="text-xl font-bold text-slate-900 ml-2">${plan.finalTotal}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
