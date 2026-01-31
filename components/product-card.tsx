'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product, formatPrice } from '@/lib/products'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link
      href={`/produto/${product.id}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5',
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <Image
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute left-1.5 top-1.5 sm:left-2 sm:top-2 flex flex-col gap-1">
          {product.isNew && (
            <Badge className="bg-primary text-primary-foreground text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Novo</Badge>
          )}
          {product.isPromo && (
            <Badge className="bg-accent text-accent-foreground text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">Promo</Badge>
          )}
          {product.isBestseller && (
            <Badge variant="outline" className="border-primary/30 bg-background/80 text-primary backdrop-blur-sm text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">
              Mais Vendido
            </Badge>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-2 sm:p-3">
        <h3 className="line-clamp-2 text-xs sm:text-sm font-medium text-foreground transition-colors group-hover:text-primary">
          {product.name}
        </h3>
        <div className="mt-auto flex items-baseline gap-1 sm:gap-2">
          <span className="text-sm sm:text-base font-semibold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-[10px] sm:text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
