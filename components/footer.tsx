import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-gradient-to-t from-slate-900 to-slate-800 py-12 text-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-white">About This Page</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                This is a promotional page for Gluco Extend, a natural supplement with 11 clinically-proven
                ingredients for blood sugar support. By clicking "Buy Now," you will be redirected to the
                official supplier's secure website to complete your purchase.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Important Links</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/terms-of-use" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Use
                </Link>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
            <p className="mt-2">This page is promotional material and redirects to the official supplier.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
