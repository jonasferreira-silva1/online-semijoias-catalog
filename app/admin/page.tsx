'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lock, Package, Plus, LogOut } from 'lucide-react'
import { toast } from '@/hooks/use-toast'
import { ProductForm } from '@/components/admin/product-form'
import { ProductList } from '@/components/admin/product-list'
import { useProducts } from '@/hooks/use-products'
import type { Product } from '@/lib/products'

const ADMIN_PASSWORD = 'adornesemijoias2024' // Senha simples - pode ser mudada

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const router = useRouter()
  const { products, isLoading, addProduct, updateProduct, deleteProduct, resetProducts } = useProducts()

  // Verificar se já logou antes (apenas para UX, não para autenticação)
  const [hasLoggedBefore, setHasLoggedBefore] = useState(false)
  
  useEffect(() => {
    const auth = localStorage.getItem('adorn-admin-auth')
    const authTime = localStorage.getItem('adorn-admin-auth-time')
    
    // Apenas marcar que já logou antes (para mostrar mensagem amigável)
    // MAS SEMPRE pedir senha novamente por segurança
    if (auth === 'true' && authTime) {
      setHasLoggedBefore(true)
    } else {
      setHasLoggedBefore(false)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      // Salvar autenticação no localStorage (permanece salvo)
      localStorage.setItem('adorn-admin-auth', 'true')
      // Salvar timestamp para referência
      localStorage.setItem('adorn-admin-auth-time', new Date().toISOString())
      setIsAuthenticated(true)
      setPassword('')
      
      // Disparar evento para atualizar header em outras abas
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('admin-auth-changed'))
      }
      
      toast({
        title: 'Acesso liberado!',
        description: 'Login salvo. Você permanecerá logado mesmo após fechar o navegador.',
      })
    } else {
      toast({
        title: 'Senha incorreta',
        description: 'Por favor, verifique a senha e tente novamente.',
        variant: 'destructive',
      })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adorn-admin-auth')
    localStorage.removeItem('adorn-admin-auth-time')
    setIsAuthenticated(false)
    
    // Disparar evento para atualizar header em outras abas
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('admin-auth-changed'))
    }
    
    toast({
      title: 'Logout realizado',
      description: 'Você saiu da área administrativa.',
    })
  }

  const handleAddProduct = (productData: Omit<Product, 'id'>) => {
    if (addProduct(productData)) {
      toast({
        title: 'Produto adicionado!',
        description: `${productData.name} foi adicionado ao catálogo.`,
      })
      setShowForm(false)
    } else {
      toast({
        title: 'Erro ao adicionar',
        description: 'Não foi possível adicionar o produto.',
        variant: 'destructive',
      })
    }
  }

  const handleUpdateProduct = (id: string, updates: Partial<Product>) => {
    if (updateProduct(id, updates)) {
      toast({
        title: 'Produto atualizado!',
        description: 'As alterações foram salvas.',
      })
      setEditingProduct(null)
      setShowForm(false)
    } else {
      toast({
        title: 'Erro ao atualizar',
        description: 'Não foi possível atualizar o produto.',
        variant: 'destructive',
      })
    }
  }

  const handleDeleteProduct = (id: string, name: string) => {
    if (confirm(`Tem certeza que deseja excluir "${name}"?`)) {
      if (deleteProduct(id)) {
        toast({
          title: 'Produto excluído',
          description: `${name} foi removido do catálogo.`,
        })
      } else {
        toast({
          title: 'Erro ao excluir',
          description: 'Não foi possível excluir o produto.',
          variant: 'destructive',
        })
      }
    }
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
    setShowForm(true)
    // Scroll suave até o formulário após um pequeno delay
    setTimeout(() => {
      const formElement = document.getElementById('product-form-card')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Adicionar um destaque visual temporário para indicar que o formulário foi aberto
        formElement.classList.add('ring-2', 'ring-primary', 'ring-offset-2')
        setTimeout(() => {
          formElement.classList.remove('ring-2', 'ring-primary', 'ring-offset-2')
        }, 2000)
      }
    }, 100)
  }

  const handleCancelForm = () => {
    setShowForm(false)
    setEditingProduct(null)
  }

  // Tela de login
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-secondary/20 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-serif text-2xl">Área Administrativa</CardTitle>
            <CardDescription>
              Digite a senha para acessar o gerenciamento de produtos
            </CardDescription>
            {hasLoggedBefore && (
              <p className="mt-2 text-xs text-primary text-center font-medium">
                🔐 Você já acessou antes. Digite a senha novamente por segurança.
              </p>
            )}
            {!hasLoggedBefore && (
              <p className="mt-2 text-xs text-muted-foreground text-center">
                💡 Após o primeiro login, você poderá acessar mais rapidamente
              </p>
            )}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite a senha"
                  required
                  autoFocus
                />
              </div>
              <Button type="submit" className="w-full">
                Entrar
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-2">
                ✓ Você permanecerá logado mesmo após fechar o navegador
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Área administrativa
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/20 py-8">
        <div className="container px-4">
          {/* Header da área admin */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="font-serif text-3xl font-semibold text-foreground">
                Gerenciar Produtos
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Adicione, edite ou exclua produtos do catálogo
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  setEditingProduct(null)
                  setShowForm(true)
                  // Scroll suave até o formulário
                  setTimeout(() => {
                    const formElement = document.getElementById('product-form-card')
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      // Adicionar um destaque visual temporário
                      formElement.classList.add('ring-2', 'ring-primary', 'ring-offset-2')
                      setTimeout(() => {
                        formElement.classList.remove('ring-2', 'ring-primary', 'ring-offset-2')
                      }, 2000)
                    }
                  }, 100)
                }}
                className="gap-2"
              >
                <Plus className="h-4 w-4" />
                Novo Produto
              </Button>
              <Button variant="outline" onClick={handleLogout} className="gap-2">
                <LogOut className="h-4 w-4" />
                Sair
              </Button>
            </div>
          </div>

          {/* Formulário de produto */}
          {showForm && (
            <Card id="product-form-card" className="mb-6">
              <CardHeader>
                <CardTitle className="font-serif">
                  {editingProduct ? 'Editar Produto' : 'Novo Produto'}
                </CardTitle>
                <CardDescription>
                  {editingProduct
                    ? 'Atualize as informações do produto'
                    : 'Preencha os dados do novo produto'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProductForm
                  key={editingProduct?.id || 'new-product'}
                  product={editingProduct}
                  onSubmit={editingProduct
                    ? (data) => handleUpdateProduct(editingProduct.id, data)
                    : handleAddProduct}
                  onCancel={handleCancelForm}
                />
              </CardContent>
            </Card>
          )}

          {/* Lista de produtos */}
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Carregando produtos...</p>
            </div>
          ) : (
            <ProductList
              products={products}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          )}

          {/* Estatísticas */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="font-serif text-lg">Estatísticas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-sm text-muted-foreground">Total de Produtos</p>
                  <p className="text-2xl font-semibold">{products.length}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Em Estoque</p>
                  <p className="text-2xl font-semibold text-green-600">
                    {products.filter((p) => p.inStock).length}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Em Promoção</p>
                  <p className="text-2xl font-semibold text-primary">
                    {products.filter((p) => p.isPromo).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

