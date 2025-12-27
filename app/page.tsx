/**
 * INSTRUÇÕES PARA PERSONALIZAÇÃO:
 *
 * 1. PRODUTO: Edite o objeto `productData` abaixo
 *    - name: Nome do produto
 *    - price: Preço (em R$)
 *    - originalPrice: Preço original (opcional, remove o "de" se não usar)
 *    - checkoutUrl: Link para o fornecedor
 *
 * 2. CORES: Vá em app/globals.css
 *    - Escolha um dos 3 presets de paleta (Azul, Verde, Roxo)
 *    - Ou personalize as variáveis --brand e --accent
 *
 * 3. TEXTOS: Edite benefícios, depoimentos e FAQ no objeto `productData`
 */

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Ingredients } from "@/components/ingredients"
import { HowItWorks } from "@/components/how-it-works"
import { PricingPlans } from "@/components/pricing-plans"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Guarantee } from "@/components/guarantee"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

// Dados centralizados do produto - EDITE AQUI
export const productData = {
  name: "Gluco Extend",
  subtitle: "Transform your wellness routine",
  description: "The only formula with a unique combination of 11 nutrients and ingredients, PROVEN by clinical research.",

  checkoutUrl: "https://exemplo.com/checkout", // ALTERE AQUI
  trustBadge: "Free Shipping",

  ingredients: [
    {
      name: "Mormordica charantia",
      benefits: [
        "Helps maintain healthy blood sugar levels",
        "Boosts your metabolism",
        "Increases energy and reduces fatigue",
      ],
    },
    {
      name: "Cinnamomum cassia",
      benefits: [
        "Helps maintain healthy blood sugar levels",
        "Boosts your metabolism",
        "Increases energy and reduces fatigue",
      ],
    },
    {
      name: "Deglycyrrhizinated Licorice",
      benefits: [
        "Helps maintain healthy blood sugar levels",
        "Boosts your metabolism",
        "Increases energy and reduces fatigue",
      ],
    },
    {
      name: "Gymnema sylvestre",
      benefits: [
        "Helps maintain healthy blood sugar levels",
        "Boosts your metabolism",
        "Increases energy and reduces fatigue",
      ],
    },
    {
      name: "Lagerstroemia speciosa",
      benefits: [
        "Helps maintain healthy blood sugar levels",
        "Boosts your metabolism",
        "Increases energy and reduces fatigue",
      ],
    },
    {
      name: "Morus spp.",
      benefits: [
        "Helps maintain healthy blood sugar levels",
        "Boosts your metabolism",
        "Increases energy and reduces fatigue",
      ],
    },
  ],

  steps: [
    {
      number: 1,
      title: "Peça Agora",
      description: "Clique no botão e você será redirecionado para finalizar a compra no site seguro do fornecedor",
    },
    {
      number: 2,
      title: "Receba em Casa",
      description: "Seu kit chega em até 7 dias úteis com rastreamento completo",
    },
    {
      number: 3,
      title: "Comece a Usar",
      description: "Siga as instruções simples e comece sua jornada de bem-estar",
    },
  ],

  pricingPlans: [
    {
      id: "starter",
      name: "STARTER",
      supply: "60 Day Supply",
      bottles: 2,
      pricePerBottle: 79,
      originalTotal: 790,
      finalTotal: 158,
      freeShipping: false,
      bonuses: 0,
      checkoutUrl: "https://orders.clickbank.net/?cbfid=57386&cbitems=glucoextend2&corid=c1e684a1-38fd-40cf-b554-0543a30e36f7&exitoffer=1btl&oaref=01.A194B520AF98E970CAF57691FC48B1768F26FDF509E825235C7DD7558D4CE9588CD3EA7A&template=2btlv4&time=1766866511&vvvv=glucofix&vvar=__hostname%3Dglucoextend.com%26__page_id%3D11%26__page_version%3Db%26__user_id%3D5bc3b688acad18049b6addbfd7df4775%26cbexit%3D1btl%26cbfid%3D57386%26cbitems%3Dglucoextend2%26template%3D2btlv4",
      image: "/product2.png",
    },
    {
      id: "most-popular",
      name: "MOST POPULAR",
      supply: "90 Day Supply",
      bottles: 3,
      pricePerBottle: 69,
      originalTotal: 828,
      finalTotal: 207,
      freeShipping: true,
      bonuses: 2,
      badge: "most-popular" as const,
      checkoutUrl: "https://orders.clickbank.net/?cbfid=57386&cbitems=glucoextend3&corid=4fd0f4b8-334c-45fa-819d-3b11746305d2&exitoffer=1btl&oaref=01.A194B520AF98E970CAF57691FC48B1768F26FDF509E825235C7DD7558D4CE9588CD3EA7A&template=3btlv5&time=1766866554&vvvv=glucofix&vvar=__hostname%3Dglucoextend.com%26__page_id%3D11%26__page_version%3Db%26__user_id%3D5bc3b688acad18049b6addbfd7df4775%26cbexit%3D1btl%26cbfid%3D57386%26cbitems%3Dglucoextend3%26template%3D3btlv5",
      image: "/productCombo2.png",
    },
    {
      id: "best-value",
      name: "BEST VALUE",
      supply: "180 Day Supply",
      bottles: 6,
      pricePerBottle: 49,
      originalTotal: 1176,
      finalTotal: 294,
      freeShipping: true,
      bonuses: 2,
      badge: "best-value" as const,
      highlighted: true,
      checkoutUrl: "https://orders.clickbank.net/?cbfid=57386&cbitems=glucoextend6&corid=bb65f5aa-a35e-4f66-9c2b-58c29243810d&exitoffer=1btl&oaref=01.A194B520AF98E970CAF57691FC48B1768F26FDF509E825235C7DD7558D4CE9588CD3EA7A&template=6btlv3&time=1766866533&vvvv=glucofix&vvar=__hostname%3Dglucoextend.com%26__page_id%3D11%26__page_version%3Db%26__user_id%3D5bc3b688acad18049b6addbfd7df4775%26cbexit%3D1btl%26cbfid%3D57386%26cbitems%3Dglucoextend6%26template%3D6btlv3",
      image: "/productCombo3.png",
    },
  ],

  testimonials: [
    {
      name: "Jason Thompson, 53 anos, Nova Iorque",
      role: "Verified Purchase",
      content:
        "My blood sugar is stable and I have amazing energy. This product beats everything else I've tried",
      rating: 5,
    },
    {
      name: "Mindy Winslow, 43, FL",
      role: "Verified Purchase",
      content:
        "I've tried everything there is try, but this was the most powerful product I've tried for blood sugar support and it works, thank you!",
      rating: 5,
    },
    {
      name: "Mark Winters, 46, WA",
      role: "Verified Purchase",
      content:
        "This is my go to supplement for my blood sugar support now, it's really incredible how I feel now",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How does delivery work?",
      answer:
        'After clicking "Buy Now," you will be redirected to the supplier\'s secure website to complete your purchase. Delivery is made via standard shipping within 5-7 business days.',
    },
    {
      question: "Is payment secure?",
      answer:
        "Yes! The entire payment process is carried out in the supplier's secure environment, with data encryption and SSL certificate. We accept credit cards and other payment methods.",
    },
    {
      question: "Can I return it if I don't like it?",
      answer:
        "Absolutely! You have a 180-day money-back guarantee. If you're not satisfied, contact the supplier's support team to request a refund.",
    },
    {
      question: "How do I use the product?",
      answer:
        "The kit comes with a complete usage guide. Additionally, you will have access to specialized support to answer any questions.",
    },
    {
      question: "How long to see results?",
      answer:
        "Most of our customers report feeling a difference within the first 7 days of use. Results may vary from person to person.",
    },
    {
      question: "What is the expiration date?",
      answer:
        "The product has a shelf life of 24 months from the date of manufacture. The expiration date is printed on the packaging.",
    },
  ],
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero data={productData} />
      <HowItWorks />
      <Ingredients ingredients={productData.ingredients} />
      <PricingPlans plans={productData.pricingPlans} />
      <Testimonials testimonials={productData.testimonials} />
      <FAQ faqs={productData.faqs} />
      <Guarantee />
      <FinalCTA data={productData} />
      <Footer />
    </div>
  )
}
