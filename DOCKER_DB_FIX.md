# 🔧 Correção: Criação Automática do Banco de Dados

## ❌ Problema

O erro `FATAL: database "adorne" does not exist` ocorria porque:
1. O banco não estava sendo criado automaticamente
2. O healthcheck tentava conectar antes do banco estar pronto
3. Scripts de inicialização não estavam sendo executados na ordem correta

## ✅ Solução Implementada

### 1. Script de Inicialização (01-init-db.sh)

Criado script que:
- ✅ Aguarda PostgreSQL estar pronto
- ✅ Verifica se o banco existe
- ✅ Cria o banco se não existir
- ✅ Concede permissões ao usuário

### 2. Healthcheck Melhorado

```yaml
healthcheck:
  test: ["CMD-SHELL", "pg_isready -U adorne -d adornesemijoias"]
  interval: 10s
  timeout: 5s
  retries: 10
  start_period: 10s  # Aguarda 10s antes de começar a verificar
```

### 3. Ordem de Execução

1. **POSTGRES_DB** cria o banco automaticamente (primeira vez)
2. **01-init-db.sh** verifica/cria o banco (garantia)
3. **02-init-schema.sql** cria tabelas e dados iniciais

## 🚀 Como Funciona Agora

### Primeira Execução

```bash
docker-compose up -d postgres
```

**O que acontece:**
1. PostgreSQL inicia
2. `POSTGRES_DB=adornesemijoias` cria o banco automaticamente
3. `01-init-db.sh` verifica e confirma criação
4. `02-init-schema.sql` cria tabelas
5. Healthcheck confirma que está pronto

### Execuções Subsequentes

O banco já existe no volume, então:
1. PostgreSQL inicia
2. Banco já existe (do volume)
3. Scripts verificam e não recriam
4. Healthcheck confirma que está pronto

## 🔍 Verificação

Após iniciar, verifique:

```bash
# Ver logs do PostgreSQL
docker-compose logs postgres

# Conectar ao banco
docker-compose exec postgres psql -U adorne -d adornesemijoias

# Verificar tabelas
\dt

# Verificar categorias
SELECT * FROM categories;
```

## 🐛 Se Ainda Houver Problemas

### Banco não criado

```bash
# Parar tudo
docker-compose down -v

# Reconstruir do zero
docker-compose up -d postgres

# Ver logs
docker-compose logs -f postgres
```

### Verificar se o script está sendo executado

```bash
# Entrar no container
docker-compose exec postgres sh

# Ver scripts de inicialização
ls -la /docker-entrypoint-initdb.d/

# Executar manualmente
/docker-entrypoint-initdb.d/01-init-db.sh
```

### Criar banco manualmente (se necessário)

```bash
docker-compose exec postgres psql -U adorne -d postgres -c "CREATE DATABASE adornesemijoias;"
```

---

**Última atualização:** 2024

