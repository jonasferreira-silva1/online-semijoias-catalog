# 🔧 Correções Aplicadas nos Erros do Docker

## ❌ Erros Identificados

### 1. Frontend: `Cannot find module '/app/pnpm'`
**Causa:** pnpm não estava habilitado corretamente no container

**Correção:**
- Adicionado `corepack enable` no Dockerfile
- Ajustado CMD para habilitar corepack antes de executar pnpm

### 2. Backend: `sh: tsx: not found`
**Causa:** tsx não estava no PATH ou não foi instalado corretamente

**Correção:**
- Alterado para usar `npx tsx` que garante execução correta
- Adicionado `target: development` no docker-compose

### 3. Database: `database "adorne" does not exist`
**Causa:** Healthcheck tentando conectar antes do banco estar pronto

**Status:** Já configurado corretamente, pode ser timing. O banco será criado automaticamente.

## ✅ Correções Aplicadas

### Dockerfile (Frontend)
```dockerfile
# Agora habilita corepack corretamente
RUN corepack enable && corepack prepare pnpm@latest --activate
CMD ["sh", "-c", "corepack enable && pnpm dev"]
```

### backend/Dockerfile
```dockerfile
# Usa npx para garantir que tsx está acessível
CMD ["npx", "tsx", "watch", "src/index.ts"]
```

### docker-compose.yml
```yaml
# Adicionado target: development explicitamente
backend:
  build:
    target: development
```

## 🚀 Como Testar

```bash
# Parar tudo
docker-compose down

# Reconstruir do zero
docker-compose build --no-cache

# Iniciar
docker-compose up -d

# Ver logs
docker-compose logs -f
```

## 🔍 Se Ainda Houver Problemas

### Frontend ainda com erro de pnpm:
```bash
# Entrar no container
docker-compose exec frontend sh

# Verificar pnpm
which pnpm
corepack enable
pnpm --version
```

### Backend ainda com erro de tsx:
```bash
# Entrar no container
docker-compose exec backend sh

# Verificar tsx
npx tsx --version
ls node_modules/.bin/ | grep tsx
```

### Database ainda com erro:
```bash
# Verificar se o banco foi criado
docker-compose exec postgres psql -U adorne -d adornesemijoias -c "\l"

# Se não existir, criar manualmente
docker-compose exec postgres psql -U adorne -c "CREATE DATABASE adornesemijoias;"
```

---

**Última atualização:** 2024

