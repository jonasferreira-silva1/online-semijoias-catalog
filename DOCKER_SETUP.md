# 🐳 Guia de Setup com Docker

Este guia explica como rodar o projeto Adorne Semijoias usando Docker e Docker Compose.

## 📋 Pré-requisitos

- **Docker** 20.10+ instalado
- **Docker Compose** 2.0+ instalado
- **Git** (para clonar o repositório)

### Verificar instalação

```bash
docker --version
docker-compose --version
```

## 🚀 Início Rápido

### 1. Configurar Variáveis de Ambiente

Copie o arquivo de exemplo e ajuste conforme necessário:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
# Database
DB_PASSWORD=senha_segura_aqui
JWT_SECRET=chave_jwt_super_secreta_aqui
ADMIN_PASSWORD=senha_admin_aqui
```

### 2. Construir e Iniciar os Containers

```bash
# Construir e iniciar todos os serviços
docker-compose up -d

# Ver logs em tempo real
docker-compose logs -f

# Ver logs de um serviço específico
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f postgres
```

### 3. Acessar a Aplicação

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001
- **Health Check:** http://localhost:3001/health
- **PostgreSQL:** localhost:5432

## 🛠️ Comandos Úteis

### Gerenciamento de Containers

```bash
# Iniciar serviços
docker-compose up -d

# Parar serviços
docker-compose stop

# Parar e remover containers
docker-compose down

# Parar, remover containers e volumes (⚠️ apaga dados)
docker-compose down -v

# Reiniciar um serviço específico
docker-compose restart frontend
docker-compose restart backend
docker-compose restart postgres

# Reconstruir containers (após mudanças no Dockerfile)
docker-compose up -d --build
```

### Logs e Debugging

```bash
# Ver logs de todos os serviços
docker-compose logs

# Ver logs em tempo real
docker-compose logs -f

# Ver logs de um serviço específico
docker-compose logs -f frontend
docker-compose logs -f backend

# Entrar no container
docker-compose exec frontend sh
docker-compose exec backend sh
docker-compose exec postgres psql -U adorne -d adornesemijoias
```

### Banco de Dados

```bash
# Conectar ao PostgreSQL
docker-compose exec postgres psql -U adorne -d adornesemijoias

# Fazer backup do banco
docker-compose exec postgres pg_dump -U adorne adornesemijoias > backup.sql

# Restaurar backup
docker-compose exec -T postgres psql -U adorne -d adornesemijoias < backup.sql

# Ver status do banco
docker-compose exec postgres pg_isready -U adorne
```

## 📁 Estrutura do Projeto

```
.
├── docker-compose.yml          # Orquestração dos containers
├── Dockerfile                  # Frontend (Next.js)
├── .dockerignore              # Arquivos ignorados no build
├── .env.example               # Exemplo de variáveis de ambiente
├── backend/
│   ├── Dockerfile             # Backend (Node.js/Express)
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   └── index.ts           # Servidor Express
│   └── database/
│       └── init.sql           # Script de inicialização do DB
└── ...
```

## 🔧 Configuração Detalhada

### Variáveis de Ambiente

#### Frontend (.env)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WHATSAPP_NUMBER=5581995254025
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### Backend (.env)

```env
PORT=3001
DATABASE_URL=postgresql://adorne:senha@postgres:5432/adornesemijoias
JWT_SECRET=chave-secreta-jwt
ADMIN_PASSWORD=senha-admin
CORS_ORIGIN=http://localhost:3000
```

#### Database (.env)

```env
POSTGRES_USER=adorne
POSTGRES_PASSWORD=senha-segura
POSTGRES_DB=adornesemijoias
```

### Portas

- **3000:** Frontend (Next.js)
- **3001:** Backend (Express API)
- **5432:** PostgreSQL

Para alterar as portas, edite o arquivo `.env`:

```env
FRONTEND_PORT=3000
BACKEND_PORT=3001
DB_PORT=5432
```

## 🔄 Desenvolvimento

### Modo Desenvolvimento (Hot Reload)

Os containers estão configurados para desenvolvimento com hot reload:

- **Frontend:** Mudanças no código são refletidas automaticamente
- **Backend:** Mudanças no código são refletidas automaticamente (usando `tsx watch`)

### Adicionar Dependências

#### Frontend

```bash
# Entrar no container
docker-compose exec frontend sh

# Instalar dependência
pnpm add nome-do-pacote

# Ou instalar localmente e rebuild
pnpm add nome-do-pacote
docker-compose restart frontend
```

#### Backend

```bash
# Entrar no container
docker-compose exec backend sh

# Instalar dependência
npm install nome-do-pacote

# Ou instalar localmente e rebuild
cd backend
npm install nome-do-pacote
docker-compose restart backend
```

## 🐛 Troubleshooting

### Container não inicia

```bash
# Ver logs de erro
docker-compose logs nome-do-servico

# Verificar status
docker-compose ps

# Reconstruir do zero
docker-compose down -v
docker-compose up -d --build
```

### Porta já em uso

```bash
# Verificar qual processo está usando a porta
# Windows
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :3000

# Alterar porta no .env
FRONTEND_PORT=3001
```

### Banco de dados não conecta

```bash
# Verificar se o PostgreSQL está rodando
docker-compose ps postgres

# Ver logs do PostgreSQL
docker-compose logs postgres

# Verificar conexão
docker-compose exec postgres pg_isready -U adorne
```

### Erro de permissão

```bash
# Linux/Mac: ajustar permissões
sudo chown -R $USER:$USER .

# Windows: executar como administrador ou ajustar permissões
```

## 📦 Volumes

Os seguintes volumes são criados automaticamente:

- **postgres_data:** Dados persistentes do PostgreSQL
- **backend_uploads:** Arquivos de upload do backend

### Backup de Volumes

```bash
# Backup do banco de dados
docker run --rm -v adornesemijoias_postgres_data:/data -v $(pwd):/backup alpine tar czf /backup/postgres_backup.tar.gz /data

# Restaurar backup
docker run --rm -v adornesemijoias_postgres_data:/data -v $(pwd):/backup alpine tar xzf /backup/postgres_backup.tar.gz -C /
```

## 🚀 Produção

### Build para Produção

```bash
# Build otimizado
docker-compose -f docker-compose.prod.yml build

# Iniciar em modo produção
docker-compose -f docker-compose.prod.yml up -d
```

### Variáveis de Ambiente para Produção

Crie um arquivo `.env.production`:

```env
NODE_ENV=production
DB_PASSWORD=senha_super_segura_producao
JWT_SECRET=chave_jwt_super_secreta_producao
CORS_ORIGIN=https://seusite.com.br
```

## 🔒 Segurança

### Checklist de Segurança

- [ ] Alterar todas as senhas padrão no `.env`
- [ ] Usar `JWT_SECRET` forte e único
- [ ] Configurar `CORS_ORIGIN` corretamente
- [ ] Não commitar arquivos `.env` no Git
- [ ] Usar HTTPS em produção
- [ ] Configurar rate limiting adequado
- [ ] Habilitar logs de segurança

## 📚 Próximos Passos

1. **Implementar API completa** no backend
2. **Conectar frontend à API** (substituir localStorage)
3. **Adicionar autenticação JWT**
4. **Implementar upload de imagens**
5. **Configurar CI/CD**
6. **Adicionar testes automatizados**

## 🆘 Suporte

Se encontrar problemas:

1. Verifique os logs: `docker-compose logs`
2. Verifique as variáveis de ambiente: `.env`
3. Reconstrua os containers: `docker-compose up -d --build`
4. Consulte a documentação do Docker

---

**Última atualização:** 2024

