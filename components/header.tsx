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
      <div className="container flex h-16 items-center justify-between px-4">
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

        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Adorne Semijoias" width={44} height={44} className="object-contain" />
          <div className="hidden flex-col sm:flex">
            <span className="font-serif text-xl font-semibold leading-tight text-primary">
              Adorne
            </span>
            <span className="text-[10px] font-light uppercase tracking-[0.2em] text-muted-foreground">
              Semijoias
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categoria/${category.id}`}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {isAdmin && (
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hidden sm:flex"
              title="Área Administrativa"
            >
              <Link href="/admin">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Área Administrativa</span>
              </Link>
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button>
        </div>
      </div>
      
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </header>
  )
}
