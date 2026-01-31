# 🐳 Docker - Início Rápido

## ⚡ Comandos Essenciais

```bash
# 1. Copiar variáveis de ambiente
cp env.example .env

# 2. Editar .env com suas configurações
# (opcional, valores padrão já funcionam)

# 3. Iniciar todos os serviços
docker-compose up -d

# 4. Ver logs
docker-compose logs -f

# 5. Acessar aplicação
# Frontend: http://localhost:3000
# Backend: http://localhost:3001
# Health: http://localhost:3001/health
```

## 📦 O que foi criado

✅ **docker-compose.yml** - Orquestração completa  
✅ **Dockerfile** (frontend) - Next.js otimizado  
✅ **backend/Dockerfile** - Backend Node.js/Express  
✅ **backend/src/index.ts** - API básica  
✅ **backend/database/init.sql** - Schema do banco  
✅ **.dockerignore** - Otimização de build  
✅ **env.example** - Variáveis de ambiente  

## 🎯 Estrutura

```
├── docker-compose.yml          # Desenvolvimento
├── docker-compose.prod.yml     # Produção
├── Dockerfile                  # Frontend
├── backend/
│   ├── Dockerfile              # Backend
│   ├── src/index.ts            # API Express
│   └── database/init.sql       # Schema DB
└── .env                        # Suas variáveis
```

## 🔧 Serviços

1. **Frontend** (porta 3000) - Next.js
2. **Backend** (porta 3001) - Express API
3. **PostgreSQL** (porta 5432) - Banco de dados

## 📚 Documentação Completa

Veja `DOCKER_SETUP.md` para guia detalhado.

