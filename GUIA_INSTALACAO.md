# 🚀 Guia de Instalação e Execução

Este guia vai te ajudar a rodar o projeto **Adorne Semijoias** na sua máquina.

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

1. **Node.js** (versão 18 ou superior)
   - Baixe em: https://nodejs.org/
   - Para verificar se está instalado: `node --version`

2. **pnpm** (gerenciador de pacotes)
   - Instale com: `npm install -g pnpm`
   - Para verificar: `pnpm --version`
   
   **OU** você pode usar **npm** ou **yarn** se preferir

## 🔧 Passo a Passo

### 1. Abrir o Terminal/Prompt de Comando

- **Windows**: Pressione `Win + R`, digite `cmd` e pressione Enter
- **Mac/Linux**: Abra o Terminal

### 2. Navegar até a pasta do projeto

```bash
cd "C:\Users\jonas\Downloads\online-semijoias-catalog (1)"
```

**OU** se você estiver em outra localização, navegue até a pasta onde está o projeto.

### 3. Instalar as dependências

Escolha uma das opções abaixo:

**Com pnpm (recomendado):**
```bash
pnpm install
```

**Com npm:**
```bash
npm install
```

**Com yarn:**
```bash
yarn install
```

⏱️ Isso pode levar alguns minutos na primeira vez.

### 4. Executar o projeto em modo desenvolvimento

**Com pnpm:**
```bash
pnpm dev
```

**Com npm:**
```bash
npm run dev
```

**Com yarn:**
```bash
yarn dev
```

### 5. Acessar o projeto no navegador

Após executar o comando acima, você verá uma mensagem como:

```
  ▲ Next.js 16.0.10
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

Abra seu navegador e acesse:
```
http://localhost:3000
```

🎉 **Pronto!** O projeto está rodando!

## 📝 Comandos Disponíveis

### Desenvolvimento
```bash
pnpm dev          # Inicia o servidor de desenvolvimento
```

### Produção
```bash
pnpm build        # Cria o build de produção
pnpm start        # Inicia o servidor de produção (após o build)
```

### Qualidade de Código
```bash
pnpm lint         # Verifica erros no código
```

## ⚠️ Problemas Comuns

### Erro: "pnpm não é reconhecido"
**Solução**: Instale o pnpm globalmente:
```bash
npm install -g pnpm
```

### Erro: "Porta 3000 já está em uso"
**Solução**: Pare o processo que está usando a porta 3000 ou use outra porta:
```bash
pnpm dev -- -p 3001
```

### Erro: "Module not found"
**Solução**: Delete a pasta `node_modules` e o arquivo de lock, depois reinstale:
```bash
# Windows
rmdir /s node_modules
del pnpm-lock.yaml
pnpm install

# Mac/Linux
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

### Erro ao instalar dependências
**Solução**: 
1. Verifique se você tem Node.js 18+ instalado
2. Tente limpar o cache:
```bash
pnpm store prune
pnpm install
```

## 🛑 Parar o Servidor

Para parar o servidor de desenvolvimento, pressione `Ctrl + C` no terminal.

## 📦 Estrutura de Pastas Importante

```
online-semijoias-catalog/
├── app/              # Páginas e rotas do Next.js
├── components/        # Componentes React
├── lib/              # Funções utilitárias e dados
├── public/           # Arquivos estáticos (imagens, etc)
├── package.json      # Dependências do projeto
└── README.md         # Documentação completa
```

## 🔄 Atualizar Dependências

Se precisar atualizar as dependências:
```bash
pnpm update
```

## 📱 Testar no Celular

Se você quiser testar no celular na mesma rede:

1. Descubra o IP da sua máquina:
   - **Windows**: `ipconfig` (procure por IPv4)
   - **Mac/Linux**: `ifconfig` ou `ip addr`

2. Execute o Next.js com o IP:
```bash
pnpm dev -- -H 0.0.0.0
```

3. Acesse no celular: `http://SEU_IP:3000`

## 🎯 Próximos Passos

Após rodar o projeto, você pode:
- ✅ Navegar pelo catálogo de produtos
- ✅ Testar a funcionalidade de busca
- ✅ Ver as páginas institucionais (Sobre, FAQ, Revenda, Políticas)
- ✅ Testar a integração com WhatsApp
- ✅ Personalizar cores, textos e imagens

## 💡 Dicas

- O servidor de desenvolvimento recarrega automaticamente quando você salva arquivos
- Use `Ctrl + C` para parar o servidor
- Os logs aparecem no terminal onde você executou `pnpm dev`
- Para ver erros detalhados, verifique o console do navegador (F12)

---

**Precisa de ajuda?** Entre em contato ou consulte a documentação do Next.js: https://nextjs.org/docs

