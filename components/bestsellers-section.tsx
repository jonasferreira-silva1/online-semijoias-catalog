'use client'

import Image from 'next/image'
import Link from 'next/link'
import { getBestsellerProducts } from '@/lib/products'

export function BestsellersSection() {
  const products = getBestsellerProducts().slice(0, 4)
  
  return (
    <section className="relative py-12 md:py-20">
      <div className="container px-4">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/produto/${product.id}`}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] w-full">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-sm italic text-white drop-shadow-lg md:text-base">
                    {product.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Overlay title */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-20 md:items-center md:pb-0">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-light italic text-white drop-shadow-2xl md:text-6xl lg:text-8xl">
              os mais
            </h2>
            <p className="font-serif text-5xl italic text-white drop-shadow-2xl md:text-7xl lg:text-9xl">
              Vendidos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
