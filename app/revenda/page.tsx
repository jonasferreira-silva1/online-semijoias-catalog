import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Check, TrendingUp, Users, DollarSign, Gift } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Como Revender | Adorne Semijoias',
  description: 'Torne-se uma revendedora Adorne e tenha uma oportunidade de negócio lucrativa. Conheça nossos planos e benefícios.',
}

export default function RevendaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
                Seja uma Revendedora Adorne
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Transforme sua paixão por joias em uma oportunidade de negócio
              </p>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Por que ser uma revendedora Adorne?
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">Lucro Garantido</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Margem de lucro atrativa em todas as peças. Quanto mais você vende, mais você ganha.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Gift className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">Kit Inicial Grátis</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Receba um kit inicial com catálogo, materiais de divulgação e amostras para começar.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">Suporte Completo</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Equipe dedicada para te ajudar com treinamentos, materiais e suporte de vendas.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">Sem Investimento Inicial</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Comece sem precisar comprar estoque. Trabalhe com pedidos e receba comissões.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="bg-secondary/20 py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Como Funciona
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Cadastro Gratuito</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Preencha o formulário de cadastro e aguarde o contato da nossa equipe
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Receba seu Kit</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Após a aprovação, você receberá um kit com materiais de divulgação e catálogo
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Divulgue e Venda</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Use as redes sociais, WhatsApp e seu catálogo para apresentar os produtos
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Receba suas Comissões</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A cada venda realizada, você recebe sua comissão de forma rápida e transparente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requisitos */}
        <section className="py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Requisitos para ser Revendedora
              </h2>
              <div className="mx-auto max-w-2xl space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-muted-foreground">
                    Ter mais de 18 anos
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-muted-foreground">
                    Ter conta em banco para recebimento de comissões
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-muted-foreground">
                    Ter perfil ativo em redes sociais (Instagram, Facebook, WhatsApp)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-muted-foreground">
                    Comprometimento e vontade de crescer
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-muted-foreground">
                    Não é necessário experiência prévia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/10 py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Pronta para começar?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Entre em contato conosco pelo WhatsApp e descubra como se tornar uma revendedora Adorne
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

