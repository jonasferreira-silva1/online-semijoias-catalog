'use client'

import { useEffect, useState } from 'react'
import { Product } from '@/lib/products'

interface ProductsProviderProps {
  children: (products: Product[]) => React.ReactNode
  fallback: Product[]
}

export function ProductsProvider({ children, fallback }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>(fallback)

  useEffect(() => {
    // Carregar produtos do localStorage
    try {
      const stored = localStorage.getItem('adorne-products')
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setProducts(parsed)
        }
      }
    } catch (error) {
      console.error('Erro ao carregar produtos:', error)
    }

    // Listener para mudanças no localStorage (quando admin atualiza)
    const handleStorageChange = () => {
      try {
        const stored = localStorage.getItem('adorne-products')
        if (stored) {
          const parsed = JSON.parse(stored)
          if (Array.isArray(parsed)) {
            setProducts(parsed)
          }
        }
      } catch (error) {
        console.error('Erro ao atualizar produtos:', error)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    
    // Também escutar eventos customizados (mesma aba)
    window.addEventListener('products-updated', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('products-updated', handleStorageChange)
    }
  }, [])

  return <>{children(products)}</>
}

