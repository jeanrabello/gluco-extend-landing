"use client"

import { Shield, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Guarantee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50 to-sky-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-brand/20">
            <CardContent className="p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-2xl font-bold">Satisfaction Guarantee</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you're not completely satisfied with Gluco Extend, we'll refund 100% of your money within
                    180 days of receipt. No questions asked, no hassle.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-2xl font-bold">100% Secure Purchase</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The entire payment process takes place in the supplier's secure environment, with SSL encryption
                    and security certificate. Your data is protected.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
