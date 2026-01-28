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
