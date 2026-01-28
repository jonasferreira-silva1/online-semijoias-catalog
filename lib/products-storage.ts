'use client'

import { Product } from './products'

const STORAGE_KEY = 'adorne-products'

// Função para obter produtos do localStorage (apenas no cliente)
export function getStoredProducts(): Product[] {
  if (typeof window === 'undefined') return []
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error('Erro ao carregar produtos do localStorage:', error)
  }
  
  return []
}

// Função para obter produtos (com fallback para produtos padrão)
export function getProducts(): Product[] {
  const stored = getStoredProducts()
  if (stored.length > 0) {
    return stored
  }
  
  // Fallback para produtos padrão (importar do products.ts)
  // Isso será usado apenas na primeira vez
  return []
}

