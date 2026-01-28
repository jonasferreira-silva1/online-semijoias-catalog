'use client'

import { useState, useEffect } from 'react'
import { Product, categories } from '@/lib/products'

const STORAGE_KEY = 'adorne-products'

// Produtos padrão (fallback)
const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Anel Solitário Zircônia',
    price: 89.90,
    description: 'Anel delicado com zircônia central que captura a luz de forma única. Perfeito para o dia a dia ou ocasiões especiais.',
    material: 'Banho Ouro 18k | Antialérgico',
    category: 'aneis',
    images: ['/products/ring-gold.jpg'],
    isNew: true,
    inStock: true,
    adjustable: true,
  },
  {
    id: '2',
    name: 'Brinco Gota Cristal',
    price: 79.90,
    originalPrice: 99.90,
    description: 'Brinco elegante em formato de gota com cristais que brilham intensamente. Ideal para festas e eventos.',
    material: 'Banho Ouro 18k | Antialérgico',
    category: 'brincos',
    images: ['/products/earring-drop.jpg'],
    isPromo: true,
    inStock: true,
  },
  {
    id: '3',
    name: 'Colar Coração Cravejado',
    price: 129.90,
    description: 'Colar com pingente de coração cravejado de zircônias. Um presente perfeito para quem você ama.',
    material: 'Banho Ouro 18k | Antialérgico',
    category: 'colares',
    images: ['/products/necklace-pendant.jpg'],
    isBestseller: true,
    inStock: true,
  },
  {
    id: '4',
    name: 'Pulseira Elos Delicados',
    price: 69.90,
    description: 'Pulseira com elos delicados e pingentes que dançam ao seu movimento. Feminina e versátil.',
    material: 'Banho Ouro 18k | Antialérgico',
    category: 'pulseiras',
    images: ['/products/bracelet-chain.jpg'],
    isNew: true,
    inStock: true,
    adjustable: true,
  },
  {
    id: '5',
    name: 'Conjunto Esmeralda Real',
    price: 249.90,
    originalPrice: 299.90,
    description: 'Conjunto completo com colar, brincos e anel. Pedras verdes esmeralda que transmitem sofisticação.',
    material: 'Banho Ouro 18k | Antialérgico',
    category: 'conjuntos',
    images: ['/products/set-complete.jpg'],
    isPromo: true,
    isBestseller: true,
    inStock: true,
  },
  {
    id: '6',
    name: 'Brinco Pérola Clássico',
    price: 59.90,
    description: 'Brinco de pérola com base dourada. Elegância atemporal para todas as ocasiões.',
    material: 'Banho Ouro 18k | Pérola Shell',
    category: 'brincos',
    images: ['/products/earring-pearl.jpg'],
    isBestseller: true,
    inStock: true,
  },
]

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Carregar produtos do localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setProducts(parsed)
      } else {
        // Primeira vez: usar produtos padrão
        setProducts(defaultProducts)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts))
      }
    } catch (error) {
      console.error('Erro ao carregar produtos:', error)
      setProducts(defaultProducts)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Salvar produtos no localStorage
  const saveProducts = (newProducts: Product[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProducts))
      setProducts(newProducts)
      
      // Disparar evento customizado para atualizar outras abas/componentes
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('products-updated'))
      }
      
      return true
    } catch (error) {
      console.error('Erro ao salvar produtos:', error)
      return false
    }
  }

  // Adicionar produto
  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(), // ID único baseado em timestamp
    }
    const updated = [...products, newProduct]
    return saveProducts(updated)
  }

  // Atualizar produto
  const updateProduct = (id: string, updates: Partial<Product>) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, ...updates } : p
    )
    return saveProducts(updated)
  }

  // Excluir produto
  const deleteProduct = (id: string) => {
    const updated = products.filter((p) => p.id !== id)
    return saveProducts(updated)
  }

  // Resetar para produtos padrão
  const resetProducts = () => {
    return saveProducts(defaultProducts)
  }

  return {
    products,
    isLoading,
    addProduct,
    updateProduct,
    deleteProduct,
    resetProducts,
    saveProducts,
  }
}

