# 📋 Guia do Sistema Administrativo

Este guia explica como usar o sistema de gerenciamento de produtos do catálogo Adorne Semijoias.

## 🔐 Acessar a Área Administrativa

1. Acesse: `http://localhost:3000/admin` (ou o endereço do seu site)
2. Digite a senha: `adornesemijoias2024`
3. Clique em "Entrar"

> ⚠️ **IMPORTANTE**: A senha padrão é `adornesemijoias2024`. Você pode alterá-la no arquivo `app/admin/page.tsx` na linha que contém `const ADMIN_PASSWORD = 'adornesemijoias2024'`

## ✨ Funcionalidades

### ➕ Adicionar Novo Produto

1. Clique no botão **"Novo Produto"** no topo da página
2. Preencha o formulário:
   - **Nome do Produto** (obrigatório)
   - **Preço** (obrigatório) - em reais (R$)
   - **Preço Original** (opcional) - para produtos em promoção
   - **Categoria** - selecione entre: Anéis, Brincos, Colares, Pulseiras, Conjuntos
   - **Descrição** (obrigatório) - descreva o produto
   - **Material** (obrigatório) - ex: "Banho Ouro 18k | Antialérgico"
   - **Imagens** - adicione URLs das imagens (pelo menos 1 obrigatória)
     - Use caminhos relativos: `/products/nome-imagem.jpg`
     - Ou URLs completas: `https://exemplo.com/imagem.jpg`
     - Clique em "+ Adicionar outra imagem" para múltiplas imagens
   - **Checkboxes**:
     - ✅ Produto em estoque
     - ✅ Marcar como novo
     - ✅ Em promoção
     - ✅ Mais vendido
     - ✅ Tamanho ajustável
3. Clique em **"Adicionar Produto"**

### ✏️ Editar Produto

1. Na lista de produtos, encontre o produto que deseja editar
2. Clique no botão **"Editar"**
3. O formulário será preenchido com os dados atuais
4. Faça as alterações desejadas
5. Clique em **"Salvar Alterações"**

### 👁️ Visualizar Produto no Catálogo

1. Na lista de produtos, clique no botão do **ícone de olho** 👁️
2. O produto será aberto em uma nova aba, mostrando como os clientes veem

### 🗑️ Excluir Produto

1. Na lista de produtos, encontre o produto que deseja excluir
2. Clique no botão **vermelho com ícone de lixeira** 🗑️
3. Confirme a exclusão no popup
4. O produto será removido permanentemente

## 📊 Estatísticas

Na parte inferior da página, você verá:
- **Total de Produtos**: Quantidade total cadastrada
- **Em Estoque**: Quantidade de produtos disponíveis
- **Em Promoção**: Quantidade de produtos em promoção

## 💾 Como Funciona o Armazenamento

- Os produtos são salvos no **localStorage** do navegador
- Isso significa que os dados ficam salvos no seu computador/navegador
- **Vantagem**: Funciona offline, não precisa de servidor
- **Limitação**: Os dados são locais ao navegador/dispositivo

> 💡 **Dica**: Para fazer backup dos seus produtos, você pode:
> 1. Abrir o Console do navegador (F12)
> 2. Digitar: `localStorage.getItem('adorne-products')`
> 3. Copiar o resultado e salvar em um arquivo de texto

## 🔄 Restaurar Produtos Padrão

Se você quiser voltar aos produtos iniciais:
1. Abra o Console do navegador (F12)
2. Digite: `localStorage.removeItem('adorne-products')`
3. Recarregue a página

## 📝 Dicas Importantes

### Imagens
- **Caminhos relativos**: Use `/products/nome-imagem.jpg` para imagens na pasta `public/products/`
- **URLs completas**: Use `https://exemplo.com/imagem.jpg` para imagens externas
- **Múltiplas imagens**: Adicione várias imagens para criar uma galeria (funcionalidade futura)

### Preços
- Use ponto (.) para decimais: `89.90`
- Não use vírgula: ~~89,90~~
- O sistema formata automaticamente para R$ 89,90

### Categorias
- Escolha a categoria correta para facilitar a navegação dos clientes
- Produtos aparecem nas páginas de categoria correspondentes

### Badges (Etiquetas)
- **Novo**: Aparece badge "Novo" no produto
- **Promoção**: Aparece badge "Promo" e mostra desconto
- **Mais Vendido**: Aparece badge "Mais Vendido"
- **Em Estoque**: Se desmarcado, aparece "Esgotado" no produto

## 🚨 Solução de Problemas

### Produtos não aparecem no catálogo
- Verifique se você salvou o produto corretamente
- Recarregue a página do catálogo (F5)
- Verifique se há erros no Console do navegador (F12)

### Não consigo editar um produto
- Certifique-se de estar logado na área admin
- Tente recarregar a página
- Verifique se há erros no Console

### Imagens não aparecem
- Verifique se o caminho da imagem está correto
- Para imagens locais, certifique-se de que o arquivo existe em `public/products/`
- Para URLs externas, verifique se a URL está acessível

### Perdi meus produtos
- Verifique se não limpou o localStorage do navegador
- Se você fez backup, pode restaurar (veja seção de backup acima)
- Se não, você precisará adicionar os produtos novamente

## 🔐 Segurança

- A senha é simples e está no código
- Para produção, considere implementar autenticação mais robusta
- Não compartilhe a senha com pessoas não autorizadas
- O link da área admin está no footer, mas discreto

## 📱 Acessar de Outros Dispositivos

Como os dados ficam no localStorage do navegador:
- Cada dispositivo/navegador tem seus próprios produtos
- Para sincronizar, você precisaria de um servidor/banco de dados
- Por enquanto, é uma solução local e simples

## 🎯 Próximos Passos (Opcional)

Para melhorar o sistema no futuro:
1. **Upload de imagens**: Permitir fazer upload direto das imagens
2. **Banco de dados**: Migrar para um banco de dados real
3. **Autenticação**: Sistema de login mais seguro
4. **Backup automático**: Sistema de backup automático
5. **Sincronização**: Sincronizar entre dispositivos

---

**Precisa de ajuda?** Consulte a documentação do projeto ou entre em contato.

