'use client'

import { useState, useMemo, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { formatPrice, type Product, defaultProducts } from '@/lib/products'
import { getStoredProducts } from '@/lib/products-storage'
import { cn } from '@/lib/utils'

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [products, setProducts] = useState<Product[]>(defaultProducts)

  // Carregar produtos do localStorage e escutar mudanças
  useEffect(() => {
    const loadProducts = () => {
      const stored = getStoredProducts()
      if (stored.length > 0) {
        setProducts(stored)
      } else {
        setProducts(defaultProducts)
      }
    }

    // Carregar inicialmente
    loadProducts()

    // Escutar mudanças (quando admin atualiza)
    const handleUpdate = () => {
      loadProducts()
    }
    
    window.addEventListener('products-updated', handleUpdate)
    window.addEventListener('storage', handleUpdate)

    return () => {
      window.removeEventListener('products-updated', handleUpdate)
      window.removeEventListener('storage', handleUpdate)
    }
  }, [])

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return []
    
    const query = searchQuery.toLowerCase().trim()
    return products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(query)
      const descriptionMatch = product.description.toLowerCase().includes(query)
      const categoryMatch = product.category.toLowerCase().includes(query)
      const materialMatch = product.material.toLowerCase().includes(query)
      
      return nameMatch || descriptionMatch || categoryMatch || materialMatch
    })
  }, [searchQuery, products])

  const handleProductClick = () => {
    setSearchQuery('')
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 sm:max-w-2xl">
        <DialogHeader className="border-b border-border px-4 sm:px-6 py-3 sm:py-4">
          <DialogTitle className="text-base sm:text-lg font-semibold">Buscar produtos</DialogTitle>
        </DialogHeader>
        
        <div className="px-4 sm:px-6 pt-3 sm:pt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Digite o nome, descrição ou categoria..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 text-sm sm:text-base"
              autoFocus
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2"
                onClick={() => setSearchQuery('')}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="max-h-[50vh] sm:max-h-[60vh] overflow-y-auto px-4 sm:px-6 pb-4 sm:pb-6">
          {searchQuery.trim() ? (
            filteredProducts.length > 0 ? (
              <div className="mt-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
                </p>
                <div className="grid gap-3">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/produto/${product.id}`}
                      onClick={handleProductClick}
                      className="group flex items-center gap-4 rounded-lg border border-border bg-card p-3 transition-all hover:border-primary hover:shadow-md"
                    >
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-secondary/30">
                        <Image
                          src={product.images[0] || '/placeholder.svg'}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                          {product.description}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-primary">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-8 py-12 text-center">
                <Search className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <p className="mt-4 text-lg font-medium text-foreground">
                  Nenhum produto encontrado
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tente buscar com outros termos
                </p>
              </div>
            )
          ) : (
            <div className="mt-8 py-12 text-center">
              <Search className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <p className="mt-4 text-lg font-medium text-foreground">
                Digite para buscar produtos
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Busque por nome, descrição, categoria ou material
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

