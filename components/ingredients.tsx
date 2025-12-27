"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface Ingredient {
  name: string
  benefits: string[]
}

interface IngredientsProps {
  ingredients: Ingredient[]
}

export function Ingredients({ ingredients }: IngredientsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ingredients" className="py-20 bg-gradient-to-r from-white to-rose-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Inside each Gluco Extend you'll find
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            <span className="font-semibold">Over 11 ingredients and nutrients</span> clinically proven{" "}
            <span className="font-semibold">to</span> support healthy blood sugar levels.
          </p>
          <p className="text-lg text-muted-foreground">
            An exclusive blend of over <span className="font-semibold">11 plants and nutrients.</span>
          </p>
        </div>

        {/* Grid de Ingredientes */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Nome do ingrediente em badge vermelho */}
              <div className="w-full max-w-xs mb-4">
                <div className="bg-brand text-white text-center py-2 px-4 rounded-md font-semibold">
                  {ingredient.name}
                </div>
              </div>

              {/* Lista de benefícios */}
              <ul className="space-y-2 w-full max-w-xs">
                {ingredient.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
