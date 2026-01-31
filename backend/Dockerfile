# Dockerfile para Backend (Node.js/Express)
FROM node:20-alpine AS base

# Instalar dependências do sistema
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Development stage
FROM base AS development
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências (incluindo dev para tsx)
RUN npm install

# Copiar código
COPY . .

EXPOSE 3001

# Usar npx para executar tsx (garante que está no PATH)
CMD ["npx", "tsx", "watch", "src/index.ts"]

# Production stage
FROM base AS production
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar apenas dependências de produção
RUN npm install --omit=dev && npm cache clean --force

# Copiar código
COPY . .

# Criar diretório para uploads
RUN mkdir -p uploads && chmod 755 uploads

EXPOSE 3001

CMD ["npm", "start"]

