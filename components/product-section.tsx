'use client'

import { Product } from '@/lib/products'
import { ProductCard } from './product-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ProductSectionProps {
  title: string
  subtitle?: string
  products: Product[]
  viewAllHref?: string
  id?: string
}

export function ProductSection({ title, subtitle, products, viewAllHref, id }: ProductSectionProps) {
  if (products.length === 0) return null

  return (
    <section id={id} className="py-8 sm:py-10 md:py-14">
      <div className="container px-3 sm:px-4">
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-0">
          <div>
            <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {viewAllHref && (
            <Button asChild variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary/80 w-fit text-xs sm:text-sm">
              <Link href={viewAllHref}>
                Ver todos
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
