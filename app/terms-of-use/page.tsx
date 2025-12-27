import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfUsePage() {
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
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">TERMS OF USE</h1>
          <p className="text-slate-500 mb-8">Last updated: [fill in date]</p>

          <div className="prose prose-slate max-w-none">
            <p>
              By accessing, browsing, or using this website, you fully agree to these Terms of Use. If you do not agree
              with any part of these terms, we recommend that you do not use the website.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              Use of this website implies automatic and full acceptance of these Terms of Use, as well as the associated
              Privacy Policy.
            </p>
            <p>These terms apply to all visitors, users, and other persons who access the website.</p>

            <h2 className="text-xl font-bold mt-8 mb-4">2. Website Purpose</h2>
            <p>
              This website is strictly informational and promotional in nature, with the purpose of:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Disseminating content related to wellness and supplementation</li>
              <li>Presenting third-party products, including vitamins for glycemic control</li>
              <li>Redirecting users to external websites through informational or affiliate links</li>
            </ul>
            <p className="mt-4">
              This website does not conduct direct sales, does not process payments, and is not responsible for the
              delivery, warranty, or support of the products advertised.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">3. Informational Content and Medical Disclaimer</h2>
            <p>
              All content provided on this website is for educational and commercial purposes and should not be
              interpreted as:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Medical advice</li>
              <li>Diagnosis</li>
              <li>Treatment</li>
              <li>Prescription of any kind</li>
            </ul>
            <p className="mt-4">
              Results mentioned may vary from person to person. Before using any supplement, the user should consult a
              qualified healthcare professional.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">4. Affiliate Links and Third-Party Websites</h2>
            <p>
              This website may contain affiliate links that redirect the user to external pages operated by third
              parties.
            </p>
            <p>By clicking on these links, the user acknowledges that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>They are leaving this website</li>
              <li>They become subject to the terms and policies of the destination website</li>
              <li>This website has no control over third-party content, practices, or policies</li>
            </ul>
            <p className="mt-4">
              We may receive a commission for successful redirections, at no additional cost to the user, in compliance
              with the guidelines of the Federal Trade Commission (FTC).
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, this website is not responsible for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Decisions made based on the information presented here</li>
              <li>Results obtained with advertised products</li>
              <li>Direct, indirect, incidental, or consequential damages</li>
              <li>Technical failures, website unavailability, or content errors</li>
              <li>Content, practices, or services of third-party websites</li>
            </ul>
            <p className="mt-4">Use of the website is at the user&apos;s sole risk and responsibility.</p>

            <h2 className="text-xl font-bold mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              All content on this website, including texts, trademarks, logos, layout, and structure, is protected by
              United States intellectual property laws and international treaties.
            </p>
            <p>Reproduction, copying, modification, or distribution without prior written authorization is prohibited.</p>

            <h2 className="text-xl font-bold mt-8 mb-4">7. Misuse of the Website</h2>
            <p>The user agrees not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use the website for illegal or unauthorized purposes</li>
              <li>Violate legal, regulatory norms, or third-party rights</li>
              <li>Attempt to access restricted areas or compromise website security</li>
              <li>Use the content in a fraudulent or deceptive manner</li>
            </ul>
            <p className="mt-4">Non-compliance may result in suspension or blocking of access.</p>

            <h2 className="text-xl font-bold mt-8 mb-4">8. Modifications to Terms</h2>
            <p>These Terms of Use may be changed at any time without prior notice.</p>
            <p>The updated version will always be available on this page.</p>
            <p>Continued use of the website after modifications constitutes automatic acceptance of the new terms.</p>

            <h2 className="text-xl font-bold mt-8 mb-4">9. Privacy</h2>
            <p>
              Use of this website is also subject to our{" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              , which describes how data and information are collected and used.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">10. Applicable Law and Jurisdiction</h2>
            <p>
              These Terms of Use are governed and interpreted in accordance with the laws of the United States of
              America, regardless of conflicts of legal principles.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">11. Contact</h2>
            <p>For questions, requests, or clarifications related to these Terms of Use:</p>
            <p>Email: [your contact email]</p>
            <p>Website responsible: [company name or responsible party]</p>
          </div>
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
