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
import { Benefits } from "@/components/benefits"
import { HowItWorks } from "@/components/how-it-works"
import { WhatsIncluded } from "@/components/whats-included"
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

  benefits: [
    {
      icon: "Sparkles",
      title: "Resultados Visíveis",
      description: "Sinta a diferença nos primeiros 7 dias de uso",
    },
    {
      icon: "Shield",
      title: "100% Seguro",
      description: "Produto testado e aprovado por especialistas",
    },
    {
      icon: "Heart",
      title: "Bem-estar Total",
      description: "Cuide de você com ingredientes selecionados",
    },
    {
      icon: "Zap",
      title: "Fácil de Usar",
      description: "Integre facilmente à sua rotina diária",
    },
    {
      icon: "Award",
      title: "Qualidade Premium",
      description: "Padrão internacional de fabricação",
    },
    {
      icon: "Clock",
      title: "Entrega Rápida",
      description: "Receba em casa com segurança e agilidade",
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

  included: [
    "Kit completo com todos os itens essenciais",
    "Guia de uso detalhado em português",
    "Acesso ao suporte especializado",
    "Garantia de satisfação de 7 dias",
    "Frete grátis para todo o Brasil",
    "Embalagem discreta e segura",
  ],

  testimonials: [
    {
      name: "Maria Silva",
      role: "Cliente verificada",
      content:
        "Estou muito satisfeita com o resultado! Realmente faz diferença na minha rotina. Recomendo para quem está em busca de mais bem-estar.",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Cliente verificado",
      content:
        "Produto de excelente qualidade. A entrega foi rápida e o suporte é muito atencioso. Vale cada centavo investido.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Cliente verificada",
      content:
        "Comprei e não me arrependi. Chegou bem embalado e os resultados apareceram rápido. Já indiquei para várias amigas!",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Como funciona a entrega?",
      answer:
        'Após clicar em "Comprar Agora", você será redirecionado para o site seguro do fornecedor onde finalizará a compra. A entrega é feita pelos Correios ou transportadora em até 7 dias úteis para todo Brasil.',
    },
    {
      question: "O pagamento é seguro?",
      answer:
        "Sim! Todo o processo de pagamento é realizado no ambiente seguro do fornecedor, com criptografia de dados e certificado SSL. Aceitamos cartão de crédito, PIX e boleto.",
    },
    {
      question: "Posso devolver se não gostar?",
      answer:
        "Claro! Você tem 7 dias de garantia. Se não ficar satisfeito, entre em contato com o suporte do fornecedor e solicite a devolução conforme o código de defesa do consumidor.",
    },
    {
      question: "Como faço para usar o produto?",
      answer:
        "O kit vem com um guia completo de uso em português. Além disso, você terá acesso ao suporte especializado para tirar qualquer dúvida.",
    },
    {
      question: "Quanto tempo para ver resultados?",
      answer:
        "A maioria dos nossos clientes relata sentir diferença nos primeiros 7 dias de uso. Os resultados podem variar de pessoa para pessoa.",
    },
    {
      question: "Qual o prazo de validade?",
      answer:
        "O produto tem validade de 24 meses a partir da data de fabricação. A data de validade vem impressa na embalagem.",
    },
  ],
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero data={productData} />
      <Benefits benefits={productData.benefits} />
      <HowItWorks steps={productData.steps} />
      <WhatsIncluded items={productData.included} />
      <Testimonials testimonials={productData.testimonials} />
      <FAQ faqs={productData.faqs} />
      <Guarantee />
      <FinalCTA data={productData} />
      <Footer />
    </div>
  )
}
