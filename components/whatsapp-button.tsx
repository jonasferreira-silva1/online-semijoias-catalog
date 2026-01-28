'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { Product, formatPrice } from '@/lib/products'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  product?: Product
  fixed?: boolean
  className?: string
}

export function WhatsAppButton({ product, fixed, className }: WhatsAppButtonProps) {
  const phoneNumber = '5581995254025'
  
  const message = product
    ? encodeURIComponent(
        `Olá! 💎 Tenho interesse na semijoia:\n\n*${product.name}*\nPreço: ${formatPrice(product.price)}\n\nGostaria de mais informações!`
      )
    : encodeURIComponent('Olá! Vim pelo catálogo e gostaria de saber mais sobre as semijoias.')

  const href = `https://wa.me/${phoneNumber}?text=${message}`

  if (fixed) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 md:bottom-6 md:right-6"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="sr-only">Fale conosco no WhatsApp</span>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white transition-all hover:bg-[#22c55e] hover:shadow-lg',
        className
      )}
    >
      <MessageCircle className="h-5 w-5" />
      Comprar no WhatsApp
    </Link>
  )
}
