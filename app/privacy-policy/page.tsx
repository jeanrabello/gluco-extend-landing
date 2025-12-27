import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 lg:p-12">
          {/* Privacy Policy */}
          <section>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">PRIVACY POLICY</h1>
            <p className="text-slate-500 mb-8">Last updated: [fill in date]</p>

            <div className="prose prose-slate max-w-none">
              <p>
                This Privacy Policy describes how information is collected, used, and protected when accessing this
                website, whose purpose is informational disclosure and redirection to third-party products, including
                supplements and vitamins aimed at glycemic control.
              </p>
              <p>By accessing or using this website, you agree to the terms of this Policy.</p>

              <h2 className="text-xl font-bold mt-8 mb-4">1. Purpose of the Website</h2>
              <p>This website is strictly informational and promotional in nature.</p>
              <p>
                We do not conduct direct sales, do not process payments, and do not offer medical or health services.
              </p>
              <p>
                The website may contain affiliate links that redirect users to external pages operated by third parties.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">2. Information Collected</h2>
              <p>
                Even without registration forms, some information may be collected automatically during navigation.
              </p>
              <p className="font-semibold mt-4">Automatically collected information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address</li>
                <li>Browser type and device</li>
                <li>Operating system</li>
                <li>Pages accessed and browsing time</li>
                <li>Approximate geographic location</li>
                <li>Click and redirect data</li>
              </ul>
              <p className="mt-4">
                This information is collected through cookies, pixels, and similar technologies.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">3. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Improve user experience</li>
                <li>Analyze traffic and website performance</li>
                <li>Measure marketing campaigns</li>
                <li>Track redirects and affiliate links</li>
              </ul>
              <p className="mt-4">
                Users can disable cookies in browser settings. This may affect some website functionalities.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">4. Affiliate Links and Commercial Disclosure</h2>
              <p>This website may contain affiliate links.</p>
              <p>
                This means we may receive a commission if the user makes a purchase after being redirected, at no
                additional cost to the consumer.
              </p>
              <p>
                This practice complies with the guidelines of the Federal Trade Commission (FTC) of the United States.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">5. Third-Party Tools</h2>
              <p>We may use third-party services, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Traffic analysis platforms</li>
                <li>Advertising tools</li>
                <li>Affiliate platforms</li>
                <li>Hosting and CDN services</li>
              </ul>
              <p className="mt-4">
                These third parties have their own privacy policies, for which we are not responsible.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">6. Health-Related Information</h2>
              <p>
                This website does not collect personal medical information and does not provide diagnosis, treatment, or
                medical advice.
              </p>
              <p>
                Any content related to glycemic control or supplementation is for informational and educational purposes
                and does not replace the guidance of a qualified healthcare professional.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">7. User Rights (United States)</h2>
              <p>
                Users residing in the United States, including California, have rights under applicable legislation such
                as CCPA/CPRA, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request information about collected data</li>
                <li>Request deletion of personal data</li>
                <li>Request that data not be sold or shared</li>
              </ul>
              <p className="mt-4">This website does not sell personal data.</p>

              <h2 className="text-xl font-bold mt-8 mb-4">8. Information Protection</h2>
              <p>
                We adopt reasonable security measures to protect collected information. However, no system is completely
                secure and we cannot guarantee absolute security.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">9. Privacy of Minors</h2>
              <p>This website is not intended for minors under 18 years of age.</p>
              <p>
                We do not intentionally collect data from children, in compliance with the Children&apos;s Online Privacy
                Protection Act (COPPA).
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">10. Changes to this Policy</h2>
              <p>
                This Privacy Policy may be updated at any time. The most recent version will always be available on this
                page.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">11. Contact</h2>
              <p>For questions about this Privacy Policy:</p>
              <p>Email: [your contact email]</p>
              <p>Website responsible: [company name or responsible party]</p>
            </div>
          </section>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
