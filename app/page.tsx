'use client'

import { useMemo } from "react"
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
