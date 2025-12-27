import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-gradient-to-t from-slate-900 to-slate-800 py-12 text-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Sobre Esta Página</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Esta é uma página de divulgação do Kit Pro Saúde. Ao clicar em "Comprar Agora", você será redirecionado
                para o site oficial do fornecedor onde finalizará sua compra de forma segura.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Links Importantes</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
            <p className="mt-2">Esta página é um material de divulgação e redireciona para o fornecedor oficial.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
