# 💎 Adorne Semijoias - Catálogo Online

Um catálogo online moderno e elegante para exibição de semijoias, desenvolvido com Next.js 16, TypeScript e Tailwind CSS. O projeto oferece uma experiência de navegação fluida e responsiva, integrada com WhatsApp para facilitar o contato e vendas.

## 📋 Sobre o Projeto

O **Adorne Semijoias** é uma aplicação web de catálogo de produtos desenvolvida para uma loja de semijoias. O site permite que os clientes explorem produtos organizados por categorias, visualizem detalhes de cada peça e entrem em contato diretamente via WhatsApp para realizar compras.

### Características Principais

- 🎨 **Design Moderno e Elegante**: Interface sofisticada com tipografia serifada (Cormorant Garamond) para títulos e sans-serif (Montserrat) para textos
- 📱 **Totalmente Responsivo**: Otimizado para dispositivos móveis, tablets e desktops
- 🚀 **Performance Otimizada**: Utiliza Next.js 16 com App Router, geração estática de páginas e otimização de imagens
- 💬 **Integração WhatsApp**: Botão flutuante e integração direta para facilitar vendas
- 🌙 **Suporte a Tema Escuro**: Sistema de temas implementado com next-themes
- ⚡ **Componentes Reutilizáveis**: Biblioteca extensa de componentes UI baseada em shadcn/ui e Radix UI

## 🛠️ Tecnologias Utilizadas

### Core
- **Next.js 16.0.10** - Framework React com App Router
- **React 19.2.0** - Biblioteca JavaScript para interfaces
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4.1.9** - Framework CSS utility-first

### UI Components
- **shadcn/ui** - Componentes UI acessíveis e customizáveis
- **Radix UI** - Primitivos UI acessíveis (Accordion, Dialog, Dropdown, etc.)
- **Lucide React** - Biblioteca de ícones
- **next-themes** - Gerenciamento de temas claro/escuro

### Formulários e Validação
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **@hookform/resolvers** - Integração entre React Hook Form e Zod

### Outros
- **Vercel Analytics** - Análise de tráfego
- **Embla Carousel** - Carrossel de imagens
- **Sonner** - Sistema de notificações toast

## 📁 Estrutura do Projeto

```
online-semijoias-catalog/
├── app/                          # App Router do Next.js
│   ├── categoria/
│   │   └── [slug]/              # Páginas dinâmicas de categorias
│   │       └── page.tsx
│   ├── produto/
│   │   └── [id]/                # Páginas dinâmicas de produtos
│   │       └── page.tsx
│   ├── layout.tsx               # Layout raiz da aplicação
│   ├── page.tsx                 # Página inicial
│   └── globals.css              # Estilos globais
├── components/                   # Componentes React
│   ├── ui/                      # Componentes UI base (shadcn/ui)
│   ├── bestsellers-section.tsx
│   ├── category-grid.tsx
│   ├── cta-banner.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── launches-section.tsx
│   ├── newsletter-section.tsx
│   ├── product-card.tsx
│   ├── product-section.tsx
│   ├── theme-provider.tsx
│   └── whatsapp-button.tsx
├── lib/                          # Utilitários e lógica de negócio
│   ├── products.ts              # Dados e funções relacionadas a produtos
│   └── utils.ts                 # Funções utilitárias
├── hooks/                        # Custom hooks React
├── public/                       # Arquivos estáticos
│   ├── lifestyle/               # Imagens de lifestyle
│   ├── products/                # Imagens de produtos
│   └── logo.png
├── styles/                       # Estilos adicionais
├── components.json              # Configuração do shadcn/ui
├── next.config.mjs              # Configuração do Next.js
├── package.json                 # Dependências do projeto
├── tsconfig.json                # Configuração do TypeScript
└── postcss.config.mjs           # Configuração do PostCSS
```

## 🎯 Funcionalidades

### Página Inicial
- **Hero Section**: Seção de destaque com imagem de fundo e call-to-action
- **Category Grid**: Grade visual de categorias com imagens
- **Launches Section**: Seção de lançamentos
- **Product Sections**: Múltiplas seções de produtos:
  - Novidades
  - Mais Vendidos
  - Promoções
  - Catálogo Completo
- **CTA Banner**: Banner de chamada para ação
- **Newsletter Section**: Seção para cadastro de newsletter
- **Footer**: Rodapé completo com links, redes sociais e informações de contato

### Páginas de Categoria
- Exibição de produtos filtrados por categoria
- Navegação breadcrumb
- Contagem de produtos encontrados
- Grid responsivo de produtos

### Páginas de Produto
- Galeria de imagens
- Informações detalhadas do produto
- Badges de status (Novo, Promoção, Mais Vendido)
- Preço com desconto (quando aplicável)
- Características do produto (material, tamanho ajustável, estoque)
- Botão de compra via WhatsApp
- Seção de benefícios (Envio Seguro, Garantia, Qualidade)
- Produtos relacionados

### Componentes Principais

#### Header
- Menu responsivo com Sheet (drawer) para mobile
- Navegação por categorias
- Logo da marca
- Botão de busca (preparado para implementação)

#### WhatsApp Button
- Botão flutuante fixo no canto inferior direito
- Integração direta com WhatsApp
- Mensagem pré-formatada com informações do produto
- Suporte para uso em cards e páginas de produto

#### Product Card
- Imagem do produto com hover effect
- Badges de status
- Nome e preço
- Preço original riscado (quando em promoção)
- Link para página de detalhes

## 📦 Dados dos Produtos

Os produtos são gerenciados em `lib/products.ts` com a seguinte estrutura:

```typescript
interface Product {
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
```

### Categorias Disponíveis
- Anéis (aneis)
- Brincos (brincos)
- Colares (colares)
- Pulseiras (pulseiras)
- Conjuntos (conjuntos)

### Funções Utilitárias
- `getProductsByCategory()` - Filtra produtos por categoria
- `getNewProducts()` - Retorna produtos novos
- `getPromoProducts()` - Retorna produtos em promoção
- `getBestsellerProducts()` - Retorna produtos mais vendidos
- `getProductById()` - Busca produto por ID
- `formatPrice()` - Formata preço em BRL
- `generateWhatsAppLink()` - Gera link do WhatsApp com mensagem pré-formatada

## 🚀 Como Executar

### Pré-requisitos
- **Node.js 18+** ou superior ([Download aqui](https://nodejs.org/))
- **pnpm** (gerenciador de pacotes recomendado) ou npm/yarn

### Instalação Rápida

1. **Instale o pnpm** (se ainda não tiver):
```bash
npm install -g pnpm
```

2. **Navegue até a pasta do projeto**:
```bash
cd "C:\Users\jonas\Downloads\online-semijoias-catalog (1)"
```

3. **Instale as dependências**:
```bash
pnpm install
```

4. **Execute o servidor de desenvolvimento**:
```bash
pnpm dev
```

5. **Abra no navegador**: [http://localhost:3000](http://localhost:3000)

> 📖 **Guia Completo**: Consulte o arquivo [GUIA_INSTALACAO.md](./GUIA_INSTALACAO.md) para instruções detalhadas e solução de problemas.

### Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento (modo desenvolvimento)
- `pnpm build` - Cria build de produção
- `pnpm start` - Inicia o servidor de produção (após o build)
- `pnpm lint` - Executa o linter ESLint

### Alternativas (se não usar pnpm)

**Com npm:**
```bash
npm install
npm run dev
```

**Com yarn:**
```bash
yarn install
yarn dev
```

## ⚙️ Configurações Importantes

### WhatsApp
⚠️ **ATENÇÃO**: O número do WhatsApp está configurado como placeholder (`5511999999999`). É necessário atualizar nos seguintes arquivos:
- `lib/products.ts` (linha 127)
- `components/whatsapp-button.tsx` (linha 15)
- `components/footer.tsx` (linhas 69, 94)

### Imagens
As imagens estão localizadas em:
- `/public/products/` - Imagens dos produtos
- `/public/lifestyle/` - Imagens de lifestyle e categorias
- `/public/logo.png` - Logo da marca

### Metadados
Os metadados da aplicação (SEO) estão configurados em `app/layout.tsx` e podem ser personalizados conforme necessário.

## 🎨 Personalização

### Cores e Temas
As cores são definidas em `app/globals.css` usando variáveis CSS com o sistema OKLCH. O projeto suporta tema claro e escuro.

### Fontes
- **Títulos**: Cormorant Garamond (serif)
- **Textos**: Montserrat (sans-serif)

### Componentes UI
Os componentes podem ser customizados através dos arquivos em `components/ui/`. O projeto utiliza shadcn/ui, permitindo fácil personalização.

## 📝 Próximos Passos Sugeridos

### Funcionalidades a Implementar
1. **Sistema de Busca**: Implementar funcionalidade de busca de produtos
2. **Filtros**: Adicionar filtros por preço, material, etc.
3. **Carrinho de Compras**: Sistema de carrinho (se necessário)
4. **Páginas Institucionais**: Criar páginas mencionadas no footer (Sobre, FAQ, Políticas)
5. **Newsletter**: Integrar com serviço de email marketing
6. **Galeria de Imagens**: Implementar galeria com múltiplas imagens nos produtos
7. **Sistema de Avaliações**: Adicionar avaliações de clientes
8. **Blog**: Seção de blog para conteúdo sobre semijoias

### Melhorias Técnicas
1. **CMS Integration**: Integrar com um CMS (Strapi, Contentful, etc.) para gerenciar produtos
2. **Database**: Migrar dados de produtos para um banco de dados
3. **API Routes**: Criar rotas de API para gerenciar produtos
4. **Autenticação**: Sistema de autenticação para área administrativa
5. **Analytics**: Configurar Google Analytics ou similar
6. **SEO**: Melhorar SEO com sitemap, robots.txt, e meta tags dinâmicas
7. **PWA**: Transformar em Progressive Web App
8. **Testes**: Adicionar testes unitários e de integração

### Otimizações
1. **Lazy Loading**: Implementar lazy loading para imagens
2. **Code Splitting**: Otimizar code splitting
3. **Caching**: Implementar estratégias de cache
4. **Performance**: Otimizar Core Web Vitals

## 🔧 Configuração do Ambiente

### Variáveis de Ambiente
Crie um arquivo `.env.local` para variáveis de ambiente (se necessário):

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_SITE_URL=https://seusite.com.br
```

### Deploy
O projeto está preparado para deploy na Vercel. Para fazer deploy:

1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático será realizado

## 📄 Licença

Este projeto é privado e proprietário.

## 👥 Contribuindo

Este é um projeto privado. Para sugestões ou melhorias, entre em contato com os mantenedores.

## 📞 Suporte

Para suporte, entre em contato através do WhatsApp ou email configurado no footer do site.

---

**Desenvolvido com ❤️ usando Next.js e TypeScript**

