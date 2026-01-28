'use client'

import { useState, useEffect } from 'react'
import { Product, categories } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { X } from 'lucide-react'

interface ProductFormProps {
  product?: Product | null
  onSubmit: (data: Omit<Product, 'id'>) => void
  onCancel: () => void
}

export function ProductForm({ product, onSubmit, onCancel }: ProductFormProps) {
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    originalPrice: undefined,
    description: '',
    material: 'Banho Ouro 18k | Antialérgico',
    category: 'aneis',
    images: [''],
    isNew: false,
    isPromo: false,
    isBestseller: false,
    inStock: true,
    adjustable: false,
  })

  useEffect(() => {
    if (product) {
      // Carregar dados do produto para edição
      setFormData({
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        description: product.description,
        material: product.material,
        category: product.category,
        images: product.images.length > 0 ? product.images : [''],
        isNew: product.isNew || false,
        isPromo: product.isPromo || false,
        isBestseller: product.isBestseller || false,
        inStock: product.inStock,
        adjustable: product.adjustable || false,
      })
    } else {
      // Resetar formulário quando não há produto (novo produto)
      setFormData({
        name: '',
        price: 0,
        originalPrice: undefined,
        description: '',
        material: 'Banho Ouro 18k | Antialérgico',
        category: 'aneis',
        images: [''],
        isNew: false,
        isPromo: false,
        isBestseller: false,
        inStock: true,
        adjustable: false,
      })
    }
  }, [product])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validação básica
    if (!formData.name.trim()) {
      alert('Por favor, preencha o nome do produto')
      return
    }
    if (formData.price <= 0) {
      alert('Por favor, informe um preço válido')
      return
    }
    if (!formData.description.trim()) {
      alert('Por favor, preencha a descrição do produto')
      return
    }
    if (!formData.images[0]?.trim()) {
      alert('Por favor, adicione pelo menos uma imagem')
      return
    }

    // Limpar imagens vazias
    const cleanImages = formData.images.filter((img) => img.trim() !== '')

    onSubmit({
      ...formData,
      images: cleanImages,
    })
  }

  const addImageField = () => {
    setFormData({
      ...formData,
      images: [...formData.images, ''],
    })
  }

  const removeImageField = (index: number) => {
    const newImages = formData.images.filter((_, i) => i !== index)
    setFormData({ ...formData, images: newImages.length > 0 ? newImages : [''] })
  }

  const updateImage = (index: number, value: string) => {
    const newImages = [...formData.images]
    newImages[index] = value
    setFormData({ ...formData, images: newImages })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nome */}
      <div className="space-y-2">
        <Label htmlFor="name">Nome do Produto *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Ex: Anel Solitário Zircônia"
          required
        />
      </div>

      {/* Preço */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="price">Preço (R$) *</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            min="0"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
            placeholder="89.90"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="originalPrice">Preço Original (opcional)</Label>
          <Input
            id="originalPrice"
            type="number"
            step="0.01"
            min="0"
            value={formData.originalPrice || ''}
            onChange={(e) =>
              setFormData({
                ...formData,
                originalPrice: e.target.value ? parseFloat(e.target.value) : undefined,
              })
            }
            placeholder="99.90"
          />
        </div>
      </div>

      {/* Categoria */}
      <div className="space-y-2">
        <Label htmlFor="category">Categoria *</Label>
        <Select
          value={formData.category}
          onValueChange={(value) => setFormData({ ...formData, category: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.icon} {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Descrição */}
      <div className="space-y-2">
        <Label htmlFor="description">Descrição *</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Descreva o produto..."
          rows={4}
          required
        />
      </div>

      {/* Material */}
      <div className="space-y-2">
        <Label htmlFor="material">Material *</Label>
        <Input
          id="material"
          value={formData.material}
          onChange={(e) => setFormData({ ...formData, material: e.target.value })}
          placeholder="Banho Ouro 18k | Antialérgico"
          required
        />
      </div>

      {/* Imagens */}
      <div className="space-y-2">
        <Label>Imagens (URLs) *</Label>
        {formData.images.map((image, index) => (
          <div key={index} className="flex gap-2">
            <Input
              value={image}
              onChange={(e) => updateImage(index, e.target.value)}
              placeholder="/products/nome-imagem.jpg"
              required={index === 0}
            />
            {formData.images.length > 1 && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removeImageField(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
        <Button type="button" variant="outline" onClick={addImageField} className="w-full">
          + Adicionar outra imagem
        </Button>
        <p className="text-xs text-muted-foreground">
          Dica: Use caminhos relativos como /products/imagem.jpg ou URLs completas
        </p>
      </div>

      {/* Checkboxes */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="inStock"
            checked={formData.inStock}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, inStock: checked === true })
            }
          />
          <Label htmlFor="inStock" className="cursor-pointer">
            Produto em estoque
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="isNew"
            checked={formData.isNew}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, isNew: checked === true })
            }
          />
          <Label htmlFor="isNew" className="cursor-pointer">
            Marcar como novo
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="isPromo"
            checked={formData.isPromo}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, isPromo: checked === true })
            }
          />
          <Label htmlFor="isPromo" className="cursor-pointer">
            Em promoção
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="isBestseller"
            checked={formData.isBestseller}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, isBestseller: checked === true })
            }
          />
          <Label htmlFor="isBestseller" className="cursor-pointer">
            Mais vendido
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="adjustable"
            checked={formData.adjustable}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, adjustable: checked === true })
            }
          />
          <Label htmlFor="adjustable" className="cursor-pointer">
            Tamanho ajustável
          </Label>
        </div>
      </div>

      {/* Botões */}
      <div className="flex gap-3 pt-4">
        <Button type="submit" className="flex-1">
          {product ? 'Salvar Alterações' : 'Adicionar Produto'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </form>
  )
}

