'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Search, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { SearchDialog } from '@/components/search-dialog'
import { categories } from '@/lib/products'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  // Verificar se está logado como admin
  useEffect(() => {
    const checkAdmin = () => {
      const auth = localStorage.getItem('adorn-admin-auth')
      setIsAdmin(auth === 'true')
    }

    checkAdmin()

    // Escutar mudanças no localStorage (quando faz login/logout)
    const handleStorageChange = () => {
      checkAdmin()
    }

    window.addEventListener('storage', handleStorageChange)
    // Também escutar eventos customizados (mesma aba)
    window.addEventListener('admin-auth-changed', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('admin-auth-changed', handleStorageChange)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] bg-background">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center justify-center">
                <Image src="/logo.png" alt="Adorne Semijoias" width={80} height={80} className="object-contain" />
              </Link>
              <nav className="flex flex-col gap-2">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/categoria/${category.id}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <span>{category.icon}</span>
                    {category.name}
                  </Link>
                ))}
                {isAdmin && (
                  <Link
                    href="/admin"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
                  >
                    <Settings className="h-4 w-4" />
                    Área Admin
                  </Link>
                )}
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image src="/logo.png" alt="Adorne Semijoias" width={36} height={36} className="object-contain sm:w-11 sm:h-11" />
          <div className="hidden flex-col sm:flex">
            <span className="font-serif text-lg sm:text-xl font-semibold leading-tight text-primary">
              Adorne
            </span>
            <span className="text-[9px] sm:text-[10px] font-light uppercase tracking-[0.2em] text-muted-foreground">
              Semijoias
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 lg:gap-6 xl:flex">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categoria/${category.id}`}
              className="text-xs xl:text-sm font-medium text-foreground/70 transition-colors hover:text-primary whitespace-nowrap"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Barra de Busca Visual */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hidden lg:flex items-center gap-2 xl:gap-3 w-full max-w-xs xl:max-w-md px-3 xl:px-4 py-2 xl:py-2.5 rounded-full border border-border/60 bg-background/80 hover:bg-background hover:border-primary/60 hover:shadow-sm transition-all text-left group"
          >
            <Search className="h-3.5 w-3.5 xl:h-4 xl:w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            <span className="text-xs xl:text-sm text-muted-foreground group-hover:text-foreground/80 flex-1 transition-colors truncate">
              Pesquisar produtos...
            </span>
          </button>

          {/* Botão de busca mobile */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsSearchOpen(true)}
            className="lg:hidden h-9 w-9 sm:h-10 sm:w-10"
          >
            <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Buscar</span>
          </Button>

          {/* Engrenagem no canto direito */}
          {isAdmin && (
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="flex-shrink-0 h-9 w-9 sm:h-10 sm:w-10"
              title="Área Administrativa"
            >
              <Link href="/admin">
                <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Área Administrativa</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
      
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </header>
  )
}
