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
    <section id={id} className="py-10 md:py-14">
      <div className="container px-4">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground md:text-2xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {viewAllHref && (
            <Button asChild variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary/80">
              <Link href={viewAllHref}>
                Ver todos
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
