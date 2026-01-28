'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categoryCards = [
  {
    id: 'aneis',
    name: 'Anéis',
    subtitle: 'Coleção',
    description: 'Peças que encantam',
    image: '/lifestyle/rings.jpg',
    size: 'large',
  },
  {
    id: 'brincos',
    name: 'Brincos',
    subtitle: 'Coleção',
    description: 'Brilho para seu olhar',
    image: '/lifestyle/earrings.jpg',
    size: 'medium',
  },
  {
    id: 'colares',
    name: 'Colares',
    subtitle: 'Os mais lindos',
    description: 'Do artesanal ao sofisticado',
    image: '/lifestyle/necklaces.jpg',
    size: 'medium',
  },
  {
    id: 'pulseiras',
    name: 'Pulseiras',
    subtitle: 'Toda a coleção',
    description: 'Elegância no pulso',
    image: '/lifestyle/bracelets.jpg',
    size: 'large',
  },
  {
    id: 'conjuntos',
    name: 'Conjuntos',
    subtitle: 'Especial',
    description: 'Combinações perfeitas',
    image: '/products/set-complete.jpg',
    size: 'wide',
  },
]

export function CategoryGrid() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-muted-foreground">
            Explore nossas coleções
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Categorias
          </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:gap-5">
          {/* Anéis - Large */}
          <Link
            href="/categoria/aneis"
            className="group relative col-span-1 row-span-2 overflow-hidden rounded-2xl md:col-span-2"
          >
            <div className="aspect-[3/4] w-full md:aspect-auto md:h-full md:min-h-[500px]">
              <Image
                src="/lifestyle/rings.jpg"
                alt="Coleção de Anéis"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                <p className="mb-1 text-xs uppercase tracking-widest text-white/70">Coleção</p>
                <h3 className="font-serif text-3xl font-semibold text-white md:text-5xl">
                  Anéis
                </h3>
                <p className="mt-2 text-sm text-white/80">Peças que encantam</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Ver coleção</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>

          {/* Brincos - Medium */}
          <Link
            href="/categoria/brincos"
            className="group relative overflow-hidden rounded-2xl"
          >
            <div className="aspect-square w-full">
              <Image
                src="/lifestyle/earrings.jpg"
                alt="Coleção de Brincos"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="mb-1 text-[10px] uppercase tracking-widest text-white/70">Coleção</p>
                <h3 className="font-serif text-xl font-semibold text-white md:text-2xl">
                  Brincos
                </h3>
              </div>
            </div>
          </Link>

          {/* Colares - Medium */}
          <Link
            href="/categoria/colares"
            className="group relative overflow-hidden rounded-2xl"
          >
            <div className="aspect-square w-full">
              <Image
                src="/lifestyle/necklaces.jpg"
                alt="Coleção de Colares"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="mb-1 text-[10px] uppercase tracking-widest text-white/70">Os mais lindos</p>
                <h3 className="font-serif text-xl font-semibold text-white md:text-2xl">
                  Colares
                </h3>
              </div>
            </div>
          </Link>

          {/* Pulseiras - Medium */}
          <Link
            href="/categoria/pulseiras"
            className="group relative overflow-hidden rounded-2xl"
          >
            <div className="aspect-square w-full">
              <Image
                src="/lifestyle/bracelets.jpg"
                alt="Coleção de Pulseiras"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="mb-1 text-[10px] uppercase tracking-widest text-white/70">Toda a coleção</p>
                <h3 className="font-serif text-xl font-semibold text-white md:text-2xl">
                  Pulseiras
                </h3>
              </div>
            </div>
          </Link>

          {/* Conjuntos - Medium */}
          <Link
            href="/categoria/conjuntos"
            className="group relative overflow-hidden rounded-2xl"
          >
            <div className="aspect-square w-full">
              <Image
                src="/products/set-complete.jpg"
                alt="Conjuntos Especiais"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="mb-1 text-[10px] uppercase tracking-widest text-white/70">Especial</p>
                <h3 className="font-serif text-xl font-semibold text-white md:text-2xl">
                  Conjuntos
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
