# 🔧 CORREÇÕES PRIORITÁRIAS - Guia Prático

Este documento contém as correções mais críticas com código de exemplo para implementação imediata.

---

## 🔴 PRIORIDADE 1: Corrigir Busca (CRÍTICO)

### Problema
A busca não encontra produtos cadastrados pelo admin porque usa dados estáticos.

### Solução

**Arquivo:** `components/search-dialog.tsx`

```typescript
'use client'

import { useState, useEffect, useMemo } from 'react'
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
      <DialogContent className="max-w-2xl p-0">
        <DialogHeader className="border-b border-border px-6 py-4">
          <DialogTitle className="text-lg font-semibold">Buscar produtos</DialogTitle>
        </DialogHeader>
        
        <div className="px-6 pt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Digite o nome, descrição ou categoria do produto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
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

        <div className="max-h-[60vh] overflow-y-auto px-6 pb-6">
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
```

---

## 🔴 PRIORIDADE 2: Corrigir IDs Únicos (CRÍTICO)

### Problema
IDs gerados com `Date.now()` podem colidir se dois produtos forem criados no mesmo milissegundo.

### Solução

**Opção 1: Usar UUID (Recomendado)**

Instalar biblioteca:
```bash
pnpm add uuid
pnpm add -D @types/uuid
```

**Arquivo:** `hooks/use-products.ts`

```typescript
import { v4 as uuidv4 } from 'uuid'

// ... código existente ...

// Adicionar produto
const addProduct = (product: Omit<Product, 'id'>) => {
  const newProduct: Product = {
    ...product,
    id: uuidv4(), // ✅ UUID único
  }
  const updated = [...products, newProduct]
  return saveProducts(updated)
}
```

**Opção 2: Usar nanoid (Mais leve)**

```bash
pnpm add nanoid
```

```typescript
import { nanoid } from 'nanoid'

const addProduct = (product: Omit<Product, 'id'>) => {
  const newProduct: Product = {
    ...product,
    id: nanoid(), // ✅ ID único e curto
  }
  // ...
}
```

---

## 🔴 PRIORIDADE 3: Corrigir Sincronização Admin ↔ Público

### Problema
Páginas públicas são Server Components que não atualizam quando admin faz mudanças.

### Solução Temporária (Client Component)

**Arquivo:** `app/page.tsx`

```typescript
'use client'

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoryGrid } from "@/components/category-grid"
import { LaunchesSection } from "@/components/launches-section"
import { ProductSection } from "@/components/product-section"
import { CtaBanner } from "@/components/cta-banner"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useProducts } from "@/hooks/use-products"
import { useMemo } from "react"

export default function HomePage() {
  const { products, isLoading } = useProducts()

  const newProducts = useMemo(() => 
    products.filter(p => p.isNew), 
    [products]
  )
  
  const promoProducts = useMemo(() => 
    products.filter(p => p.isPromo), 
    [products]
  )
  
  const bestsellerProducts = useMemo(() => 
    products.filter(p => p.isBestseller), 
    [products]
  )

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        
        <CategoryGrid />
        
        <LaunchesSection />
        
        <ProductSection
          id="novidades"
          title="Novidades"
          subtitle="As últimas peças que chegaram para você"
          products={newProducts}
        />

        <CtaBanner />

        <div className="bg-secondary/20">
          <ProductSection
            title="Mais Vendidos"
            subtitle="O que nossas clientes mais amam"
            products={bestsellerProducts}
          />
        </div>

        <ProductSection
          id="promocoes"
          title="Promoções"
          subtitle="Peças incríveis com preços especiais"
          products={promoProducts}
        />

        <div id="catalogo" className="bg-secondary/20">
          <ProductSection
            title="Catálogo Completo"
            subtitle="Todas as nossas peças em um só lugar"
            products={products}
          />
        </div>
      </main>
      <NewsletterSection />
      <Footer />
      <WhatsAppButton fixed />
    </div>
  )
}
```

**Arquivo:** `app/produto/[id]/page.tsx`

```typescript
'use client'

import { useEffect, useState } from "react"
import { notFound, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Truck, Shield, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ShareButtons } from "@/components/share-buttons"
import { ProductSection } from "@/components/product-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatPrice, defaultProducts } from "@/lib/products"
import { getStoredProducts } from "@/lib/products-storage"
import type { Product } from "@/lib/products"

export default function ProductPage() {
  const params = useParams()
  const id = params.id as string
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadProduct = () => {
      const stored = getStoredProducts()
      const allProducts = stored.length > 0 ? stored : defaultProducts
      
      const found = allProducts.find(p => p.id === id)
      
      if (found) {
        setProduct(found)
        const related = allProducts
          .filter(p => p.category === found.category && p.id !== found.id)
          .slice(0, 4)
        setRelatedProducts(related)
      }
      
      setIsLoading(false)
    }

    loadProduct()

    // Escutar mudanças
    const handleUpdate = () => {
      loadProduct()
    }
    window.addEventListener('products-updated', handleUpdate)
    window.addEventListener('storage', handleUpdate)

    return () => {
      window.removeEventListener('products-updated', handleUpdate)
      window.removeEventListener('storage', handleUpdate)
    }
  }, [id])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    )
  }

  if (!product) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* ... resto do código igual ao original ... */}
      </main>
      <Footer />
      <WhatsAppButton fixed />
    </div>
  )
}
```

**Arquivo:** `app/categoria/[slug]/page.tsx`

```typescript
'use client'

import { useEffect, useState } from "react"
import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { categories, defaultProducts } from "@/lib/products"
import { getStoredProducts } from "@/lib/products-storage"
import type { Product } from "@/lib/products"

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const category = categories.find((c) => c.id === slug)

  useEffect(() => {
    const loadProducts = () => {
      const stored = getStoredProducts()
      const allProducts = stored.length > 0 ? stored : defaultProducts
      const filtered = allProducts.filter(p => p.category === slug)
      setProducts(filtered)
      setIsLoading(false)
    }

    loadProducts()

    const handleUpdate = () => {
      loadProducts()
    }
    window.addEventListener('products-updated', handleUpdate)
    window.addEventListener('storage', handleUpdate)

    return () => {
      window.removeEventListener('products-updated', handleUpdate)
      window.removeEventListener('storage', handleUpdate)
    }
  }, [slug])

  if (!category) {
    notFound()
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-6">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="mb-4 gap-2 text-muted-foreground hover:text-foreground"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao catálogo
            </Link>
          </Button>

          <div className="mb-8">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h1 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
                  {category.name}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {products.length}{" "}
                  {products.length === 1 ? "peça encontrada" : "peças encontradas"}
                </p>
              </div>
            </div>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                Nenhuma peça encontrada nesta categoria.
              </p>
              <Button asChild className="mt-4">
                <Link href="/">Ver todas as peças</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton fixed />
    </div>
  )
}
```

---

## ⚠️ PRIORIDADE 4: Melhorar Validação de Dados

### Problema
Validação apenas no cliente, pode ser burlada.

### Solução

**Arquivo:** `lib/validation.ts` (NOVO)

```typescript
import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').max(255),
  price: z.number().positive('Preço deve ser positivo').max(999999.99),
  originalPrice: z.number().positive().max(999999.99).optional(),
  description: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres'),
  material: z.string().min(3).max(255),
  category: z.enum(['aneis', 'brincos', 'colares', 'pulseiras', 'conjuntos']),
  images: z.array(z.string().url('URL de imagem inválida')).min(1, 'Adicione pelo menos uma imagem'),
  isNew: z.boolean().optional(),
  isPromo: z.boolean().optional(),
  isBestseller: z.boolean().optional(),
  inStock: z.boolean(),
  adjustable: z.boolean().optional(),
})

export type ProductInput = z.infer<typeof productSchema>
```

**Arquivo:** `components/admin/product-form.tsx`

```typescript
import { productSchema, type ProductInput } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export function ProductForm({ product, onSubmit, onCancel }: ProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ProductInput>({
    resolver: zodResolver(productSchema),
    defaultValues: product ? {
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      description: product.description,
      material: product.material,
      category: product.category,
      images: product.images,
      isNew: product.isNew || false,
      isPromo: product.isPromo || false,
      isBestseller: product.isBestseller || false,
      inStock: product.inStock,
      adjustable: product.adjustable || false,
    } : undefined,
  })

  const onSubmitForm = (data: ProductInput) => {
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
      {/* Nome */}
      <div className="space-y-2">
        <Label htmlFor="name">Nome do Produto *</Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Ex: Anel Solitário Zircônia"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* ... resto dos campos com validação ... */}
    </form>
  )
}
```

---

## ⚠️ PRIORIDADE 5: Adicionar Loading States

### Solução

**Arquivo:** `components/ui/spinner.tsx` (se não existir)

```typescript
import { cn } from '@/lib/utils'

export function Spinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent',
        className
      )}
      role="status"
    >
      <span className="sr-only">Carregando...</span>
    </div>
  )
}
```

**Uso em componentes:**

```typescript
{isLoading ? (
  <div className="flex items-center justify-center py-12">
    <Spinner className="h-8 w-8" />
  </div>
) : (
  // conteúdo
)}
```

---

## 📝 NOTAS IMPORTANTES

### ⚠️ Limitações das Correções Temporárias

As correções acima são **soluções temporárias** que melhoram o sistema atual, mas **não resolvem o problema fundamental**: localStorage não é adequado para produção.

### 🎯 Próximos Passos Essenciais

1. **Migrar para banco de dados real** (PostgreSQL)
2. **Criar API REST completa**
3. **Implementar autenticação real** (JWT)
4. **Upload real de imagens** (Cloudinary/S3)

### ⏱️ Estimativa de Tempo

- **Correções acima:** 1-2 dias
- **Migração completa:** 3-4 semanas

---

**Última atualização:** 2024

