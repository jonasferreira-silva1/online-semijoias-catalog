'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/lifestyle/Captura de tela 2026-01-27 0000.png"
          alt="Adorne Semijoias - Elegância que brilha"
          fill
          className="object-cover"
          style={{ objectPosition: '75% 30%' }}
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative flex min-h-[90vh] items-center px-4 py-20">
        <div className="max-w-xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-primary">
            Banho de Ouro 18k | Antialérgico
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Elegância que
            <br />
            <span className="text-primary">brilha em você</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Descubra semijoias exclusivas feitas para realçar sua beleza natural. 
            Peças delicadas, sofisticadas e com acabamento premium.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button 
              asChild 
              size="lg" 
              className="gap-2 rounded-full bg-primary px-8 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              <Link href="#catalogo">
                Ver Catálogo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="rounded-full border-foreground/20 bg-transparent px-8 transition-all hover:bg-foreground/5"
            >
              <Link href="#novidades">
                Novidades
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center gap-8 border-t border-border/50 pt-8">
            <div>
              <p className="font-serif text-3xl font-semibold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Peças</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-serif text-3xl font-semibold text-foreground">1000+</p>
              <p className="text-sm text-muted-foreground">Clientes</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-serif text-3xl font-semibold text-accent">5.0</p>
              <p className="text-sm text-muted-foreground">Avaliação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
