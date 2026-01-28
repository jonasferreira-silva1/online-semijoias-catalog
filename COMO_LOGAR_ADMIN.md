# 🔐 Como Fazer Login como Admin

## 📍 Como Acessar a Área Administrativa

### Opção 1: URL Direta (Atual)
1. Acesse: `http://localhost:3000/admin`
2. Digite a senha: `adornesemijoias2024`
3. Clique em "Entrar"

### Opção 2: Pelo Footer (Já Existe)
1. Role até o final da página
2. Na seção "Institucional" do footer
3. Clique em "Área Admin" (link pequeno e discreto)

---

## 🔑 Informações de Login

- **URL:** `/admin`
- **Senha:** `adornesemijoias2024`
- **Persistência:** Login fica salvo no navegador (localStorage)
- **Logout:** Botão "Sair" no canto superior direito da área admin

---

## 💡 Minha Opinião sobre UX

### ❌ Problema Atual
- Link do admin está **muito escondido** no footer
- Usuário precisa saber que existe `/admin`
- Não é intuitivo para o dono da loja

### ✅ Solução Ideal
1. **Botão discreto no header** (quando logado)
2. **Link mais visível no footer** (sempre visível)
3. **Ícone de "chave" ou "engrenagem"** para identificar área admin

---

## 🎯 Recomendação

**SIM, deveria ter uma opção mais visível na página principal!**

**Opções:**
1. ✅ **Link no footer** (já existe, mas pode melhorar)
2. ✅ **Botão no header** (quando logado como admin)
3. ✅ **Atalho de teclado** (ex: Ctrl+K para abrir admin)
4. ✅ **Link discreto no rodapé** com ícone

---

## 🔧 Implementação Sugerida

Vou implementar:
1. Melhorar o link do footer (mais visível)
2. Adicionar botão no header quando logado
3. Adicionar ícone para identificar área admin

