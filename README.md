# 💎 Online Semijoias Catalog

![Preview do Sistema](assets/preview.png)

Sistema completo de catálogo online para semijoias com painel administrativo. Aplicação full-stack desenvolvida com arquitetura moderna, totalmente dockerizada e pronta para produção.

## 📋 Sobre

Catálogo online de semijoias com área administrativa para gerenciamento de produtos. Os clientes podem navegar por categorias, visualizar produtos e entrar em contato via WhatsApp. O sistema inclui autenticação, CRUD de produtos, upload de imagens e design responsivo.

## 🛠️ Tecnologias

**Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui

**Backend:** Node.js, Express.js, TypeScript, PostgreSQL, JWT

**Infraestrutura:** Docker, Docker Compose, PostgreSQL 16

## 🚀 Como Executar

### Pré-requisitos
- Docker 20.10+ e Docker Compose 2.0+

### Instalação

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>
cd online-semijoias-catalog

# 2. Configure as variáveis de ambiente
cp env.example .env

# 3. Inicie os containers
docker-compose up --build
```

Acesse:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001

## ⚙️ Variáveis de Ambiente

Copie `env.example` para `.env` e ajuste conforme necessário:

```env
# Database
DB_USER=adorne
DB_PASSWORD=adornesemijoias2024
DB_NAME=adornesemijoias

# Backend
BACKEND_PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-in-production
ADMIN_PASSWORD=adornesemijoias2024

# Frontend
FRONTEND_PORT=3000
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WHATSAPP_NUMBER=5581995254025
```

## 📊 Status

✅ Frontend completo | ✅ Backend API | ✅ PostgreSQL | ✅ Autenticação JWT | ✅ Painel Admin | ✅ Docker

🚧 Em desenvolvimento: Finalização das rotas da API e CRUD completo

---

**Desenvolvido com Next.js, TypeScript, Node.js e PostgreSQL**
