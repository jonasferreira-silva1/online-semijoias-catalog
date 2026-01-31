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
        <div className="container px-3 sm:px-4 py-4 sm:py-6">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="mb-3 sm:mb-4 gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground"
          >
            <Link href="/">
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
              Voltar ao catálogo
            </Link>
          </Button>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {/* Image Gallery */}
            <div className="relative">
              <div className="sticky top-16 sm:top-20">
                <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl bg-secondary/30">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute left-3 top-3 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-primary text-primary-foreground">
                        Novo
                      </Badge>
                    )}
                    {product.isPromo && (
                      <Badge className="bg-accent text-accent-foreground">
                        Promoção
                      </Badge>
                    )}
                    {product.isBestseller && (
                      <Badge
                        variant="outline"
                        className="border-primary/30 bg-background/80 text-primary backdrop-blur-sm"
                      >
                        Mais Vendido
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                {product.name}
              </h1>

              <div className="mt-3 sm:mt-4 flex items-baseline gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-base sm:text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {product.originalPrice && (
                <Badge className="mt-2 w-fit bg-accent/20 text-accent-foreground">
                  {Math.round(
                    (1 - product.price / product.originalPrice) * 100
                  )}
                  % OFF
                </Badge>
              )}

              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-pretty leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{product.material}</span>
                </div>
                {product.adjustable && (
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Tamanho ajustável</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>
                    {product.inStock ? "Pronta entrega" : "Sob encomenda"}
                  </span>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 space-y-3">
                <WhatsAppButton product={product} className="w-full py-3 sm:py-4 text-sm sm:text-lg" />
                <ShareButtons product={product} />
              </div>

              <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-secondary/30 p-3 sm:p-4 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Envio Seguro</p>
                    <p className="text-muted-foreground">Todo Brasil</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Garantia</p>
                    <p className="text-muted-foreground">6 meses</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Qualidade</p>
                    <p className="text-muted-foreground">Premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="bg-secondary/20">
            <ProductSection
              title="Você também pode gostar"
              products={relatedProducts}
            />
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton fixed />
    </div>
  )
}
