# ✅ Correção: Criação Automática do Banco de Dados

## 🔧 O Que Foi Corrigido

### Problema Original
```
FATAL: database "adorne" does not exist
```

### Causa
- O banco de dados não estava sendo criado automaticamente
- Healthcheck tentava conectar antes do banco estar pronto
- Scripts de inicialização não garantiam a criação

### Solução Implementada

#### 1. Script de Inicialização Automática

**Arquivo:** `backend/database/01-init-db.sh`

Este script:
- ✅ Aguarda PostgreSQL estar pronto
- ✅ Verifica se o banco `adornesemijoias` existe
- ✅ **Cria automaticamente** se não existir
- ✅ Concede permissões ao usuário

#### 2. Healthcheck Melhorado

```yaml
healthcheck:
  test: ["CMD-SHELL", "pg_isready -U adorne -d adornesemijoias"]
  retries: 10
  start_period: 10s  # Aguarda antes de começar a verificar
```

#### 3. Ordem de Execução Garantida

1. PostgreSQL inicia
2. `POSTGRES_DB` cria o banco (primeira vez)
3. `01-init-db.sh` verifica/cria (garantia)
4. `02-init-schema.sql` cria tabelas
5. Healthcheck confirma que está pronto

## 🚀 Como Usar

### Primeira Vez

```bash
# Parar tudo (se estiver rodando)
docker-compose down -v

# Iniciar PostgreSQL primeiro
docker-compose up -d postgres

# Aguardar alguns segundos e verificar logs
docker-compose logs -f postgres

# Você verá:
# ✅ PostgreSQL está pronto!
# ✅ Banco de dados 'adornesemijoias' criado com sucesso!
```

### Depois

```bash
# Iniciar todos os serviços
docker-compose up -d

# Verificar se está tudo OK
docker-compose ps
docker-compose logs postgres | grep "Banco de dados"
```

## 🔍 Verificação

### Verificar se o banco foi criado

```bash
# Conectar ao banco
docker-compose exec postgres psql -U adorne -d adornesemijoias

# Dentro do psql:
\dt                    # Ver tabelas
SELECT * FROM categories;  # Ver categorias
\q                     # Sair
```

### Ver logs de inicialização

```bash
docker-compose logs postgres | grep -E "(Banco|CREATE|ready)"
```

## 📋 Estrutura de Arquivos

```
backend/database/
├── 01-init-db.sh      # Script que cria o banco (executado primeiro)
└── init.sql           # Script que cria tabelas (executado depois)
```

## ⚠️ Importante

- O script `01-init-db.sh` **não precisa** de permissão de execução no Windows
- O Docker executa dentro do container Linux automaticamente
- O banco é criado **automaticamente** na primeira execução
- Nas próximas execuções, o banco já existe (persistido no volume)

## 🐛 Troubleshooting

### Se o banco ainda não for criado:

```bash
# 1. Parar e remover volumes
docker-compose down -v

# 2. Reconstruir do zero
docker-compose up -d postgres

# 3. Ver logs detalhados
docker-compose logs -f postgres
```

### Criar banco manualmente (último recurso):

```bash
docker-compose exec postgres psql -U adorne -d postgres -c "CREATE DATABASE adornesemijoias;"
```

---

**Status:** ✅ Corrigido e testado  
**Última atualização:** 2024

