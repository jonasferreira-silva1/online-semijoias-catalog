#!/bin/bash
set -e

# Script para garantir que o banco de dados existe
# Este script é executado antes do init.sql
# O PostgreSQL já cria o banco via POSTGRES_DB, mas garantimos aqui também

DB_NAME="${POSTGRES_DB:-adornesemijoias}"
DB_USER="${POSTGRES_USER:-adorne}"

echo "🔍 Verificando se o banco de dados '${DB_NAME}' existe..."

# Aguardar PostgreSQL estar pronto
until pg_isready -U "${DB_USER}" -d postgres > /dev/null 2>&1; do
  echo "⏳ Aguardando PostgreSQL estar pronto..."
  sleep 1
done

echo "✅ PostgreSQL está pronto!"

# Verificar se o banco já existe (criado pelo POSTGRES_DB)
if psql -U "${DB_USER}" -d postgres -tc "SELECT 1 FROM pg_database WHERE datname = '${DB_NAME}'" | grep -q 1; then
  echo "✅ Banco de dados '${DB_NAME}' já existe!"
else
  echo "📦 Criando banco de dados '${DB_NAME}'..."
  psql -v ON_ERROR_STOP=1 --username "${DB_USER}" --dbname "postgres" <<-EOSQL
    CREATE DATABASE ${DB_NAME};
    GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER};
EOSQL
  echo "✅ Banco de dados '${DB_NAME}' criado com sucesso!"
fi


