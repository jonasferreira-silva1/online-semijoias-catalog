-- Script de inicialização do schema do banco de dados
-- Este arquivo é executado automaticamente APÓS o banco ser criado
-- O banco já foi criado pelo script 01-init-db.sh ou pelo POSTGRES_DB

-- Criar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabela de Categorias
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  icon VARCHAR(10),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de Produtos
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  sku VARCHAR(50) UNIQUE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  original_price DECIMAL(10, 2),
  material VARCHAR(255),
  category_id INTEGER REFERENCES categories(id),
  stock_quantity INTEGER DEFAULT 0,
  is_new BOOLEAN DEFAULT FALSE,
  is_promo BOOLEAN DEFAULT FALSE,
  is_bestseller BOOLEAN DEFAULT FALSE,
  is_adjustable BOOLEAN DEFAULT FALSE,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP NULL
);

-- Tabela de Imagens
CREATE TABLE IF NOT EXISTS product_images (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  url VARCHAR(500) NOT NULL,
  order_index INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_status ON products(status);
CREATE INDEX IF NOT EXISTS idx_products_sku ON products(sku);
CREATE INDEX IF NOT EXISTS idx_images_product ON product_images(product_id);

-- Inserir categorias padrão
INSERT INTO categories (slug, name, icon) VALUES
  ('aneis', 'Anéis', '💍'),
  ('brincos', 'Brincos', '✨'),
  ('colares', 'Colares', '📿'),
  ('pulseiras', 'Pulseiras', '⭐'),
  ('conjuntos', 'Conjuntos', '💎')
ON CONFLICT (slug) DO NOTHING;
