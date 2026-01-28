'use client'

import Image from 'next/image'
import { Product, formatPrice, categories } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Edit, Trash2, Eye } from 'lucide-react'
import Link from 'next/link'

interface ProductListProps {
  products: Product[]
  onEdit: (product: Product) => void
  onDelete: (id: string, name: string) => void
}

export function ProductList({ products, onEdit, onDelete }: ProductListProps) {
  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || categoryId
  }

  if (products.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">Nenhum produto cadastrado ainda.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Clique em "Novo Produto" para começar!
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative aspect-square overflow-hidden bg-secondary/30">
            <Image
              src={product.images[0] || '/placeholder.svg'}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute left-2 top-2 flex flex-col gap-1">
              {product.isNew && (
                <Badge className="bg-primary text-primary-foreground text-xs">Novo</Badge>
              )}
              {product.isPromo && (
                <Badge className="bg-accent text-accent-foreground text-xs">Promo</Badge>
              )}
              {product.isBestseller && (
                <Badge variant="outline" className="text-xs">Mais Vendido</Badge>
              )}
            </div>
            {!product.inStock && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <Badge variant="destructive" className="text-sm">Esgotado</Badge>
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <div className="mb-2">
              <h3 className="font-semibold line-clamp-2">{product.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {getCategoryName(product.category)}
              </p>
            </div>
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(product)}
                className="flex-1 gap-2"
              >
                <Edit className="h-4 w-4" />
                Editar
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="gap-2"
              >
                <Link href={`/produto/${product.id}`} target="_blank">
                  <Eye className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete(product.id, product.name)}
                className="gap-2"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

