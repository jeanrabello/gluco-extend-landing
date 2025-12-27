"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl px-6 py-10 lg:px-10 lg:py-16 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Badge de garantia */}
              <div className="flex-shrink-0">
                <img
                  src="/moneyBackBadge.png"
                  alt="180 Days Money Back Guarantee"
                  className="w-40 h-40 object-contain"
                />
              </div>

              {/* Texto */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
                  100% Satisfaction
                </h2>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
                  180-Day Money Back Guarantee
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Your order today is covered by our iron-clad 180-day 100% money-back guarantee.
                  If you are not impressed by the transformation in your blood sugar, then at any
                  time in the next 180 days write to us and we'll refund every single cent.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
