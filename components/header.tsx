"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="relative container mx-auto px-4 h-16 flex items-center">

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
        >
          Gluco Extend
        </Link>

      </div>
    </header>
  )
}
