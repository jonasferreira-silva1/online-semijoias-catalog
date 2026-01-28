import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Sparkles, Heart, Award, Users } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Sobre a Adorne | Adorne Semijoias',
  description: 'Conheça a Adorne Semijoias, nossa história, missão e valores. Semijoias exclusivas com banho de ouro 18k.',
}

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
                Sobre a Adorne
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Elegância que brilha em você
              </p>
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                    Nossa História
                  </h2>
                  <div className="mt-6 space-y-4 text-muted-foreground">
                    <p>
                      A Adorne Semijoias nasceu do sonho de democratizar o acesso à elegância e sofisticação. 
                      Acreditamos que cada mulher merece se sentir especial e brilhar em todos os momentos.
                    </p>
                    <p>
                      Com anos de experiência no mercado de joias, desenvolvemos uma linha exclusiva de 
                      semijoias com banho de ouro 18k, garantindo qualidade premium e durabilidade. Nossas 
                      peças são cuidadosamente selecionadas e produzidas com materiais antialérgicos, pensando 
                      no conforto e bem-estar de nossas clientes.
                    </p>
                    <p>
                      Hoje, somos referência em semijoias no Brasil, com milhares de clientes satisfeitas 
                      que confiam na qualidade e no estilo único das nossas peças.
                    </p>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary/30">
                  <Image
                    src="/lifestyle/hero-model.jpg"
                    alt="Adorne Semijoias"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="bg-secondary/20 py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Nossos Valores
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">Qualidade</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Sempre buscamos a excelência em cada peça que produzimos
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">Paixão</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Amamos o que fazemos e isso se reflete em cada detalhe
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">Excelência</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Compromisso com o melhor em design e acabamento
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">Cliente</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Nossas clientes são o centro de tudo que fazemos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão e Visão */}
        <section className="py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h2 className="font-serif text-3xl font-semibold text-foreground">
                    Nossa Missão
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Oferecer semijoias de alta qualidade que permitam que cada mulher expresse sua 
                    personalidade e brilhe com confiança, tornando a elegância acessível a todas.
                  </p>
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-semibold text-foreground">
                    Nossa Visão
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Ser a marca de semijoias mais reconhecida e confiável do Brasil, conhecida pela 
                    qualidade, inovação e compromisso com a satisfação de nossas clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="bg-secondary/20 py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Por que escolher a Adorne?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Banho de Ouro 18k</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Nossas peças recebem banho de ouro 18k, garantindo brilho e durabilidade superiores
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Material Antialérgico</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Todas as nossas peças são produzidas com materiais antialérgicos, seguros para peles sensíveis
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Garantia de 6 Meses</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Oferecemos garantia de 6 meses contra defeitos de fabricação
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Atendimento Personalizado</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Nossa equipe está sempre pronta para ajudar você a encontrar a peça perfeita
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Entrega para Todo Brasil</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Enviamos nossos produtos com segurança para todo o território nacional
                    </p>
                  </div>
                </div>
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

