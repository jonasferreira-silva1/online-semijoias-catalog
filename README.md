# 💎 Online Semijoias Catalog

![Preview](assets/preview.png)

Sistema completo de catálogo online para semijoias, desenvolvido com arquitetura moderna e boas práticas de desenvolvimento. A aplicação oferece uma experiência de navegação fluida e responsiva, com painel administrativo para gerenciamento de produtos e integração com WhatsApp para facilitar o contato e vendas.

## 📋 Sobre o Projeto

O **Online Semijoias Catalog** é uma aplicação web full-stack desenvolvida para gerenciar e exibir um catálogo de semijoias. O sistema permite que clientes explorem produtos organizados por categorias, visualizem detalhes de cada peça e entrem em contato diretamente via WhatsApp para realizar compras. Além disso, oferece uma área administrativa completa para gerenciamento de produtos, categorias e imagens.

### Características Principais

- 🎨 **Design Moderno e Elegante**: Interface sofisticada com tipografia serifada para títulos e sans-serif para textos
- 📱 **Totalmente Responsivo**: Otimizado para dispositivos móveis, tablets e desktops
- 🚀 **Performance Otimizada**: Utiliza Next.js 16 com App Router, geração estática de páginas e otimização de imagens
- 💬 **Integração WhatsApp**: Botão flutuante e integração direta para facilitar vendas
- 🌙 **Suporte a Tema Escuro**: Sistema de temas implementado com next-themes
- ⚡ **Componentes Reutilizáveis**: Biblioteca extensa de componentes UI baseada em shadcn/ui e Radix UI
- 🔐 **Painel Administrativo**: Área completa para gerenciamento de produtos e categorias
- 🐳 **Ambiente Dockerizado**: Configuração completa com Docker Compose para desenvolvimento e produção

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 16.0.10** - Framework React com App Router
- **React 19.2.0** - Biblioteca JavaScript para interfaces
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4.1.9** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI acessíveis e customizáveis
- **Radix UI** - Primitivos UI acessíveis
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **next-themes** - Gerenciamento de temas claro/escuro

### Backend
- **Node.js 20** - Runtime JavaScript
- **Express.js** - Framework web para Node.js
- **TypeScript** - Tipagem estática
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação via tokens
- **bcryptjs** - Hash de senhas
- **Multer** - Upload de arquivos
- **Helmet** - Segurança HTTP
- **Express Rate Limit** - Proteção contra abuso

### Infraestrutura
- **Docker** - Containerização
- **Docker Compose** - Orquestração de containers
- **PostgreSQL 16** - Banco de dados
- **Node.js Alpine** - Imagens base otimizadas

## 📁 Estrutura do Projeto

```
online-semijoias-catalog/
├── app/                          # App Router do Next.js
│   ├── admin/                    # Painel administrativo
│   │   └── page.tsx
│   ├── categoria/                # Páginas de categorias
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── produto/                  # Páginas de produtos
│   │   └── [id]/
│   │       └── page.tsx
│   ├── sobre/                    # Páginas institucionais
│   ├── faq/
│   ├── politicas/
│   ├── revenda/
│   ├── layout.tsx                # Layout raiz
│   ├── page.tsx                  # Página inicial
│   └── globals.css               # Estilos globais
├── backend/                      # API Backend
│   ├── database/                 # Scripts de banco de dados
│   │   ├── 01-init-db.sh
│   │   └── init.sql
│   ├── src/                      # Código fonte do backend
│   │   └── index.ts
│   ├── uploads/                  # Diretório de uploads
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── components/                   # Componentes React
│   ├── admin/                    # Componentes do painel admin
│   ├── ui/                       # Componentes UI base (shadcn/ui)
│   ├── header.tsx
│   ├── footer.tsx
│   ├── product-card.tsx
│   ├── whatsapp-button.tsx
│   └── ...
├── lib/                          # Utilitários e lógica de negócio
│   ├── products.ts
│   ├── products-storage.ts
│   └── utils.ts
├── hooks/                        # Custom hooks React
├── public/                       # Arquivos estáticos
│   ├── lifestyle/                # Imagens de lifestyle
│   ├── products/                 # Imagens de produtos
│   └── logo.png
├── docker-compose.yml            # Configuração Docker Compose
├── docker-compose.prod.yml       # Configuração para produção
├── Dockerfile                    # Dockerfile do frontend
├── env.example                   # Exemplo de variáveis de ambiente
├── package.json
└── README.md
```

## 🎯 Funcionalidades

### Área Pública

#### Página Inicial
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

#### Páginas de Categoria
- Exibição de produtos filtrados por categoria
- Navegação breadcrumb
- Contagem de produtos encontrados
- Grid responsivo de produtos

#### Páginas de Produto
- Galeria de imagens
- Informações detalhadas do produto
- Badges de status (Novo, Promoção, Mais Vendido)
- Preço com desconto (quando aplicável)
- Características do produto (material, tamanho ajustável, estoque)
- Botão de compra via WhatsApp
- Seção de benefícios (Envio Seguro, Garantia, Qualidade)
- Produtos relacionados

### Área Administrativa

- **Autenticação**: Sistema de login com JWT
- **Gerenciamento de Produtos**: CRUD completo de produtos
- **Gerenciamento de Categorias**: Criação e edição de categorias
- **Upload de Imagens**: Sistema de upload e gerenciamento de imagens
- **Dashboard**: Visão geral do sistema

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Docker** 20.10+ ([Download aqui](https://www.docker.com/get-started))
- **Docker Compose** 2.0+ (incluído no Docker Desktop)

### Instalação e Execução

1. **Clone o repositório**:
```bash
git clone <url-do-repositorio>
cd online-semijoias-catalog
```

2. **Configure as variáveis de ambiente**:
```bash
cp env.example .env
```

Edite o arquivo `.env` conforme necessário (veja seção de variáveis de ambiente abaixo).

3. **Inicie os containers**:
```bash
docker-compose up --build
```

Este comando irá:
- Construir as imagens do frontend, backend e configurar o banco de dados
- Iniciar todos os serviços em modo desenvolvimento
- Criar e inicializar o banco de dados PostgreSQL
- Aplicar as migrações e dados iniciais

4. **Acesse a aplicação**:
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:3001](http://localhost:3001)
- **Health Check**: [http://localhost:3001/health](http://localhost:3001/health)

### Comandos Úteis

```bash
# Iniciar em background
docker-compose up -d --build

# Parar os containers
docker-compose down

# Ver logs
docker-compose logs -f

# Ver logs de um serviço específico
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f postgres

# Reconstruir apenas um serviço
docker-compose up --build frontend

# Parar e remover volumes (limpar banco de dados)
docker-compose down -v
```

## ⚙️ Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configuração. Copie o arquivo `env.example` para `.env` e ajuste conforme necessário:

```env
# Ambiente
NODE_ENV=development

# Database
DB_USER=adorne
DB_PASSWORD=adornesemijoias2024
DB_NAME=adornesemijoias
DB_PORT=5432

# Backend
BACKEND_PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-in-production
ADMIN_PASSWORD=adornesemijoias2024
CORS_ORIGIN=http://localhost:3000

# Frontend
FRONTEND_PORT=3000
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WHATSAPP_NUMBER=5581995254025
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Descrição das Variáveis

- **NODE_ENV**: Ambiente de execução (`development` ou `production`)
- **DB_USER**: Usuário do banco de dados PostgreSQL
- **DB_PASSWORD**: Senha do banco de dados PostgreSQL
- **DB_NAME**: Nome do banco de dados
- **DB_PORT**: Porta do banco de dados (padrão: 5432)
- **BACKEND_PORT**: Porta da API backend
- **JWT_SECRET**: Chave secreta para assinatura de tokens JWT (altere em produção)
- **ADMIN_PASSWORD**: Senha padrão do administrador
- **CORS_ORIGIN**: Origem permitida para CORS
- **FRONTEND_PORT**: Porta do frontend Next.js
- **NEXT_PUBLIC_API_URL**: URL da API backend (acessível no frontend)
- **NEXT_PUBLIC_WHATSAPP_NUMBER**: Número do WhatsApp para contato
- **NEXT_PUBLIC_SITE_URL**: URL base do site

⚠️ **IMPORTANTE**: Em produção, altere todas as senhas e chaves secretas para valores seguros.

## 🗄️ Banco de Dados

O projeto utiliza PostgreSQL 16 com as seguintes tabelas principais:

- **categories**: Categorias de produtos
- **products**: Produtos do catálogo
- **product_images**: Imagens dos produtos

O banco de dados é inicializado automaticamente quando o container é criado pela primeira vez, executando os scripts em `backend/database/`:

- `01-init-db.sh`: Script de inicialização do banco
- `init.sql`: Schema e dados iniciais (categorias padrão)

## 📊 Status do Projeto

✅ **Funcionalidades Implementadas**:
- Frontend completo com Next.js 16
- Backend API com Express.js
- Banco de dados PostgreSQL configurado
- Sistema de autenticação JWT
- Painel administrativo
- Upload de imagens
- Integração WhatsApp
- Tema claro/escuro
- Design responsivo

🚧 **Em Desenvolvimento**:
- Finalização das rotas da API
- Implementação completa do CRUD de produtos
- Sistema de busca avançada
- Filtros de produtos
- Integração com serviços de email

## 📝 Observações Finais

Este projeto está em constante evolução e foi desenvolvido tanto para uso real quanto para demonstração de habilidades técnicas. A arquitetura foi pensada para escalabilidade e manutenibilidade, utilizando as melhores práticas de desenvolvimento moderno.

### Próximas Melhorias Planejadas

- Implementação completa das rotas da API
- Sistema de busca e filtros avançados
- Integração com CMS para gerenciamento de conteúdo
- Sistema de avaliações de produtos
- Blog/Conteúdo sobre semijoias
- PWA (Progressive Web App)
- Testes automatizados (unitários e integração)
- CI/CD pipeline
- Otimizações de performance e SEO

### Contribuições

Este é um projeto privado. Para sugestões ou melhorias, entre em contato com os mantenedores.

---

**Desenvolvido com ❤️ usando Next.js, TypeScript, Node.js e PostgreSQL**
