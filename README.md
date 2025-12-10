#  Garrafario - Marketplace de Garrafas

O **Garrafario** é uma aplicação web de e-commerce que conecta fornecedores de garrafas a clientes finais. O sistema simula um ambiente completo de marketplace, permitindo cadastro de usuários com diferentes perfis (Cliente e Fornecedor), gestão de catálogo e simulação de compras.

> **Status:**  Em desenvolvimento (Funcional)

## 🌐 Demonstração Online
Acesse o projeto rodando diretamente pelo navegador:
🔗 **[Clique aqui para acessar o Garrafario](https://SEU-USUARIO.github.io/Garrafario/paginaLogin.html)**
*(Substitua "SEU-USUARIO" pelo seu nome de usuário do GitHub no link acima)*

---

##  Funcionalidades

O sistema possui controle de sessão e funcionalidades específicas para cada tipo de usuário:

###  Perfil: Cliente
- **Cadastro e Login:** Acesso seguro à área de compras.
- **Catálogo de Produtos:** Visualização de todas as garrafas disponíveis.
- **Carrinho de Compras:** Adicionar itens, alterar quantidades e visualizar subtotal.
- **Histórico de Compras:** Registro persistente de todos os pedidos realizados.

###  Perfil: Fornecedor
- **Gestão de Produtos:** Cadastro de novos produtos (Nome, Descrição, Preço, Imagem).
- **Controle de Estoque:** Visualização dos próprios produtos cadastrados.
- **Segurança:** Lógica que impede um fornecedor de excluir produtos de outro fornecedor.
- **Dashboard:** Visualização do valor total do patrimônio em estoque.

---

##  Tecnologias Utilizadas

- **HTML5:** Estrutura semântica das páginas.
- **CSS3:** Estilização responsiva e layout.
- **JavaScript (ES6+):** Lógica de negócio e manipulação do DOM.
- **LocalStorage:** Utilizado como "Banco de Dados" no navegador para persistir usuários, produtos, carrinho e histórico de pedidos sem necessidade de Backend.

---

##  Estrutura do Projeto

- `paginaLogin.html`: Tela inicial de autenticação e cadastro.
- `catalogo.html`: Página principal com a listagem de produtos.
- `carrinho.html`: Gestão de itens selecionados e finalização de compra.
- `fornecedor.html`: Painel administrativo para gestão de produtos.
- `data.js`: Núcleo da aplicação. Contém a simulação do banco de dados e as classes de lógica de negócios (`ClientePerfil` e `FornecedorPerfil`).

---

