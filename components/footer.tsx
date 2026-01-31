'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, MessageCircle, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { categories } from '@/lib/products'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid gap-8 sm:gap-10 grid-cols-2 md:grid-cols-4">
          {/* Institucional */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">
              Institucional
            </h3>
            <nav className="flex flex-col gap-2 sm:gap-3">
              <Link href="/sobre" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Sobre a Adorne
              </Link>
              <Link href="/revenda" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Como Revender
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Perguntas Frequentes
              </Link>
              <Link href="/politicas" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Políticas de Troca
              </Link>
              <Link 
                href="/admin" 
                className="mt-2 flex items-center gap-2 text-sm text-muted-foreground/80 transition-colors hover:text-primary border-t border-border/50 pt-2"
                title="Acesso administrativo"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Área Administrativa
              </Link>
            </nav>
          </div>

          {/* Categorias */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">
              Categorias
            </h3>
            <nav className="flex flex-col gap-2 sm:gap-3">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categoria/${category.id}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Atendimento */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">
              Atendimento
            </h3>
            <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
              <p>Nosso atendimento é de:</p>
              <p>Segunda à Sexta das 08:00 às 18:00</p>
              <Link 
                href="mailto:contato@adornesemijoias.com.br"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                contato@adornesemijoias.com.br
              </Link>
              <p className="mt-2">Chame a gente no WhatsApp:</p>
              <Link 
                href="https://wa.me/5581995254025"
                className="flex items-center gap-2 font-medium text-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +55 81 99525-4025
              </Link>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground">
              Fique Conectado
            </h3>
            <div className="flex gap-2 sm:gap-3">
              <Link
                href="https://instagram.com/adornesemijoias"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://wa.me/5581995254025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-[#25D366] hover:text-[#25D366]"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-red-500 hover:text-red-500"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
            
            {/* Logo */}
            <div className="mt-4 sm:mt-6">
              <Image
                src="/logo.png"
                alt="Adorne Semijoias"
                width={60}
                height={60}
                className="object-contain opacity-80 sm:w-20 sm:h-20"
              />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-4 border-t border-border pt-6 sm:pt-8 md:justify-start">
          <span className="text-xs text-muted-foreground">Formas de pagamento:</span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex h-8 items-center rounded bg-secondary px-3 text-xs font-medium text-muted-foreground">
              PIX
            </div>
            <div className="flex h-8 items-center rounded bg-secondary px-3 text-xs font-medium text-muted-foreground">
              Cartão
            </div>
            <div className="flex h-8 items-center rounded bg-secondary px-3 text-xs font-medium text-muted-foreground">
              Boleto
            </div>
            <div className="flex h-8 items-center rounded bg-secondary px-3 text-xs font-medium text-muted-foreground">
              Transferência
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Adorne Semijoias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
