'use client'

import { useState } from 'react'
import { Share2, MessageCircle, Instagram, Facebook, Link as LinkIcon, Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { toast } from '@/hooks/use-toast'
import { Product, formatPrice } from '@/lib/products'
import { cn } from '@/lib/utils'

interface ShareButtonsProps {
  product?: Product
  url?: string
  title?: string
  description?: string
  className?: string
}

export function ShareButtons({ product, url, title, description, className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  // Determina a URL, título e descrição baseado no contexto
  const shareUrl = url || (product ? `${typeof window !== 'undefined' ? window.location.origin : ''}/produto/${product.id}` : typeof window !== 'undefined' ? window.location.href : '')
  const shareTitle = title || product?.name || 'Adorne Semijoias'
  const shareDescription = description || product?.description || 'Descubra semijoias exclusivas com banho de ouro 18k'
  const sharePrice = product ? formatPrice(product.price) : ''

  // Mensagem para WhatsApp
  const whatsappMessage = product
    ? encodeURIComponent(
        `💎 *${product.name}*\n\n${product.description}\n\n💰 Preço: ${sharePrice}\n\n🔗 ${shareUrl}`
      )
    : encodeURIComponent(`${shareTitle}\n\n${shareDescription}\n\n${shareUrl}`)

  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`

  // URL para Facebook
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`

  // URL para Instagram (abre app ou web - pode ser customizado com perfil)
  const instagramUrl = `https://www.instagram.com/`

  // Copiar link
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      toast({
        title: 'Link copiado!',
        description: 'O link foi copiado para a área de transferência.',
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: 'Erro ao copiar',
        description: 'Não foi possível copiar o link.',
        variant: 'destructive',
      })
    }
  }

  // Compartilhar nativo (se disponível)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareDescription,
          url: shareUrl,
        })
      } catch (err) {
        // Usuário cancelou ou erro
      }
    }
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Botão WhatsApp direto (se for produto) */}
      {product && (
        <Button
          asChild
          variant="outline"
          size="sm"
          className="gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartilhar no WhatsApp"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </Button>
      )}

      {/* Menu dropdown com outras opções */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Compartilhar</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {/* Compartilhamento nativo (mobile) */}
          {typeof navigator !== 'undefined' && navigator.share && (
            <DropdownMenuItem onClick={handleNativeShare} className="gap-2">
              <Share2 className="h-4 w-4" />
              Compartilhar
            </DropdownMenuItem>
          )}

          {/* WhatsApp */}
          <DropdownMenuItem asChild>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center gap-2"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              WhatsApp
            </a>
          </DropdownMenuItem>

          {/* Facebook */}
          <DropdownMenuItem asChild>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center gap-2"
            >
              <Facebook className="h-4 w-4 text-[#1877F2]" />
              Facebook
            </a>
          </DropdownMenuItem>

          {/* Instagram */}
          <DropdownMenuItem asChild>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center gap-2"
            >
              <Instagram className="h-4 w-4 text-[#E4405F]" />
              Instagram
            </a>
          </DropdownMenuItem>

          {/* Copiar link */}
          <DropdownMenuItem onClick={handleCopyLink} className="gap-2">
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-green-500">Link copiado!</span>
              </>
            ) : (
              <>
                <LinkIcon className="h-4 w-4" />
                Copiar link
              </>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

