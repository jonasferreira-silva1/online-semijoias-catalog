import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Shield, RotateCcw, Package, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Políticas de Troca e Devolução | Adorne Semijoias',
  description: 'Conheça nossas políticas de troca, devolução e garantia. Sua satisfação é nossa prioridade.',
}

export default function PoliticasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
                Políticas de Troca e Devolução
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Sua satisfação é nossa prioridade
              </p>
            </div>
          </div>
        </section>

        {/* Política de Troca */}
        <section className="py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <RotateCcw className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                  Política de Troca
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Prazo para Troca</h3>
                  <p>
                    Você tem até 7 (sete) dias corridos, contados a partir da data de recebimento do produto, 
                    para solicitar a troca, conforme previsto no Código de Defesa do Consumidor.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Condições para Troca</h3>
                  <p className="mb-2">A troca será aceita desde que o produto esteja:</p>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>Em perfeito estado, sem sinais de uso</li>
                    <li>Com todas as embalagens originais</li>
                    <li>Com etiquetas e tags originais</li>
                    <li>Sem avarias ou danos</li>
                    <li>Acompanhado da nota fiscal ou comprovante de compra</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Como Solicitar a Troca</h3>
                  <p>
                    Entre em contato conosco pelo WhatsApp informando o motivo da troca e o número do pedido. 
                    Nossa equipe irá te orientar sobre o processo e fornecer o código de postagem para envio.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Custos de Envio</h3>
                  <p>
                    O frete de retorno do produto é de responsabilidade do cliente. O frete do novo produto 
                    será por nossa conta, exceto em casos de troca por defeito de fabricação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Política de Devolução */}
        <section className="bg-secondary/20 py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                  Política de Devolução e Reembolso
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Prazo para Devolução</h3>
                  <p>
                    Você tem até 7 (sete) dias corridos, contados a partir da data de recebimento do produto, 
                    para solicitar a devolução e reembolso, conforme previsto no Código de Defesa do Consumidor.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Condições para Devolução</h3>
                  <p className="mb-2">A devolução será aceita desde que o produto esteja:</p>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>Em perfeito estado, sem sinais de uso</li>
                    <li>Com todas as embalagens originais</li>
                    <li>Com etiquetas e tags originais</li>
                    <li>Sem avarias ou danos</li>
                    <li>Acompanhado da nota fiscal ou comprovante de compra</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Processo de Reembolso</h3>
                  <p>
                    Após recebermos o produto e confirmarmos que está em perfeito estado, o reembolso será 
                    processado em até 5 dias úteis. O valor será creditado na mesma forma de pagamento utilizada 
                    na compra original.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Custos de Envio</h3>
                  <p>
                    O frete de devolução é de responsabilidade do cliente, exceto em casos de defeito de 
                    fabricação ou erro no pedido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Garantia */}
        <section className="py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                  Garantia
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Garantia de 6 Meses</h3>
                  <p>
                    Todas as nossas semijoias possuem garantia de 6 meses contra defeitos de fabricação, 
                    incluindo descascamento do banho de ouro, quebra de pedras ou defeitos estruturais.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">O que cobre a garantia</h3>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>Defeitos de fabricação</li>
                    <li>Descascamento prematuro do banho de ouro</li>
                    <li>Quebra de pedras ou zircônias</li>
                    <li>Defeitos estruturais</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">O que não cobre a garantia</h3>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>Desgaste natural pelo uso</li>
                    <li>Danos causados por mau uso ou negligência</li>
                    <li>Perda ou extravio do produto</li>
                    <li>Danos causados por produtos químicos ou impactos</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Como acionar a garantia</h3>
                  <p>
                    Entre em contato conosco pelo WhatsApp informando o problema e o número do pedido. 
                    Nossa equipe irá avaliar o caso e, se estiver coberto pela garantia, forneceremos 
                    as instruções para envio e substituição do produto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prazo de Entrega */}
        <section className="bg-secondary/20 py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                  Prazo de Entrega
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Processamento do Pedido</h3>
                  <p>
                    Após a confirmação do pagamento, o pedido é processado e enviado em até 2 dias úteis 
                    para produtos em estoque.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Prazo de Entrega</h3>
                  <p>
                    O prazo de entrega varia conforme a região e modalidade de envio escolhida. 
                    Geralmente, o prazo é de 5 a 15 dias úteis após o envio, dependendo da localidade.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Acompanhamento</h3>
                  <p>
                    Você receberá o código de rastreamento por email ou WhatsApp assim que o pedido for 
                    enviado, permitindo acompanhar a entrega em tempo real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Dúvidas sobre nossas políticas?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Nossa equipe está pronta para esclarecer qualquer dúvida
              </p>
              <div className="mt-8">
                <WhatsAppButton className="px-8 py-6 text-lg" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton fixed />
    </div>
  )
}

