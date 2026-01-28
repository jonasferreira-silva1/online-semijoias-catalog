'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-foreground py-16 md:py-24">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/lifestyle/hero-model.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="container relative px-4 text-center">
        <h2 className="font-serif text-3xl font-semibold text-background md:text-4xl lg:text-5xl">
          Faça agora mesmo o seu pedido
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-background/80 md:text-lg">
          Assim que finalizar, nossas consultoras vão entrar em contato para lhe auxiliar
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 gap-2 bg-[#25D366] px-8 text-white hover:bg-[#25D366]/90"
        >
          <Link href="https://wa.me/5581995254025" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </Link>
        </Button>
      </div>
    </section>
  )
}
