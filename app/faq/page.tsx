import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Perguntas Frequentes | Adorne Semijoias',
  description: 'Tire suas dúvidas sobre nossos produtos, entregas, garantias e muito mais.',
}

const faqs = [
  {
    question: "O que são semijoias?",
    answer: "Semijoias são peças de joalheria produzidas com metais nobres como prata ou latão, que recebem um banho de ouro 18k. Diferente das bijuterias, as semijoias têm maior durabilidade, não escurecem facilmente e são antialérgicas, oferecendo qualidade superior a um preço mais acessível."
  },
  {
    question: "As semijoias escurecem?",
    answer: "Nossas semijoias recebem banho de ouro 18k de alta qualidade, o que garante maior durabilidade. Com os cuidados adequados, as peças mantêm seu brilho por muito tempo. Evite contato com produtos químicos, perfumes e água do mar, e guarde em local seco e protegido."
  },
  {
    question: "As peças são antialérgicas?",
    answer: "Sim! Todas as nossas semijoias são produzidas com materiais antialérgicos, seguros para peles sensíveis. Utilizamos apenas materiais de alta qualidade que não causam irritação ou alergias."
  },
  {
    question: "Como faço para comprar?",
    answer: "Você pode entrar em contato conosco pelo WhatsApp através do botão flutuante no site ou pelos links disponíveis. Nossa equipe irá te ajudar a escolher a peça perfeita e finalizar seu pedido."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos PIX, cartão de crédito, boleto bancário e transferência bancária. O pagamento via PIX oferece condições especiais. Entre em contato para mais detalhes sobre as formas de pagamento disponíveis."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "O prazo de entrega varia conforme sua localização. Para produtos em estoque, o envio é realizado em até 2 dias úteis após a confirmação do pagamento. O prazo de entrega pelos Correios varia de 5 a 15 dias úteis, dependendo da região."
  },
  {
    question: "Vocês enviam para todo o Brasil?",
    answer: "Sim! Realizamos envio para todo o território nacional através dos Correios. O frete é calculado de acordo com o CEP de destino e o peso do produto."
  },
  {
    question: "As peças têm garantia?",
    answer: "Sim! Oferecemos garantia de 6 meses contra defeitos de fabricação. Caso identifique qualquer problema, entre em contato conosco pelo WhatsApp e resolveremos da melhor forma."
  },
  {
    question: "Posso trocar ou devolver o produto?",
    answer: "Sim, você tem até 7 dias corridos após o recebimento para solicitar a troca ou devolução, desde que o produto esteja em perfeito estado, sem uso e com todas as embalagens originais. Consulte nossa política de troca para mais detalhes."
  },
  {
    question: "Como cuidar das minhas semijoias?",
    answer: "Para manter o brilho das suas semijoias, evite contato com produtos químicos, perfumes, cremes e água do mar. Limpe com um pano macio e seco. Guarde em local seco, preferencialmente em saquinhos individuais para evitar arranhões."
  },
  {
    question: "Vocês têm programa de revendedoras?",
    answer: "Sim! Temos um programa completo para revendedoras com margem de lucro atrativa, kit inicial gratuito e suporte completo. Visite nossa página 'Como Revender' ou entre em contato pelo WhatsApp para mais informações."
  },
  {
    question: "Como sei se o produto está em estoque?",
    answer: "Todos os produtos disponíveis no site estão em estoque. Caso algum produto esteja temporariamente indisponível, será indicado na página do produto. Para confirmação, você pode entrar em contato conosco pelo WhatsApp."
  }
]

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
                Perguntas Frequentes
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Tire suas dúvidas sobre nossos produtos e serviços
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-lg border border-border bg-card px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-secondary/30 p-8 text-center">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Ainda tem dúvidas?
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Nossa equipe está pronta para te ajudar
                </p>
                <div className="mt-6">
                  <WhatsAppButton className="px-8 py-6 text-lg" />
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

