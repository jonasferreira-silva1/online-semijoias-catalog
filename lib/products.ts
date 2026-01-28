export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  material: string
  category: string
  images: string[]
  isNew?: boolean
  isPromo?: boolean
  isBestseller?: boolean
  inStock: boolean
  adjustable?: boolean
}

export const categories = [
  { id: 'aneis', name: 'Anéis', icon: '💍' },
  { id: 'brincos', name: 'Brincos', icon: '✨' },
  { id: 'colares', name: 'Colares', icon: '📿' },
  { id: 'pulseiras', name: 'Pulseiras', icon: '⭐' },
  { id: 'conjuntos', name: 'Conjuntos', icon: '💎' },
]

// Produtos padrão (fallback inicial)
export const defaultProducts: Product[] = [
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

// Função helper para obter produtos (compatível com SSR e cliente)
function getProductsArray(): Product[] {
  // No servidor, sempre retorna os produtos padrão
  if (typeof window === 'undefined') {
    return defaultProducts
  }
  
  // No cliente, tenta pegar do localStorage
  try {
    const stored = localStorage.getItem('adorne-products')
    if (stored) {
      const parsed = JSON.parse(stored)
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed
      }
    }
  } catch (error) {
    console.error('Erro ao carregar produtos:', error)
  }
  
  // Fallback para produtos padrão
  return defaultProducts
}

// Exportar produtos (para compatibilidade)
export const products = getProductsArray()

export function getProductsByCategory(categoryId: string): Product[] {
  return getProductsArray().filter(p => p.category === categoryId)
}

export function getNewProducts(): Product[] {
  return getProductsArray().filter(p => p.isNew)
}

export function getPromoProducts(): Product[] {
  return getProductsArray().filter(p => p.isPromo)
}

export function getBestsellerProducts(): Product[] {
  return getProductsArray().filter(p => p.isBestseller)
}

export function getProductById(id: string): Product | undefined {
  return getProductsArray().find(p => p.id === id)
}

export function formatPrice(price: number): string {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function generateWhatsAppLink(product: Product): string {
  const phoneNumber = '5581995254025'
  const message = encodeURIComponent(
    `Olá! 💎 Tenho interesse na semijoia:\n\n*${product.name}*\nPreço: ${formatPrice(product.price)}\n\nGostaria de mais informações!`
  )
  return `https://wa.me/${phoneNumber}?text=${message}`
}
