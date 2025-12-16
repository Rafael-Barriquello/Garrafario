# Sistema de Catálogo, Compra e Gerenciamento de Produtos  
Projeto de final da materia de Engenharia de Software

## 1. Visão Geral

Este projeto é um sistema web simples, desenvolvido para fins acadêmicos, simulando um marketplace com dois tipos de usuários:

- **Cliente** – navega pelo catálogo, adiciona itens ao carrinho, finaliza compras e consulta seu histórico.  
- **Fornecedor** – cadastra produtos, visualiza itens próprios e gerencia seu estoque.

O sistema utiliza **LocalStorage** como mecanismo de armazenamento, simulando um banco de dados local. Foi desenvolvido como parte da disciplina de **Engenharia de Software**, com foco em modularização do código, boas práticas e navegação entre telas.

---

## 2. Funcionalidades Principais

### Cliente
- Visualizar catálogo de produtos.
- Adicionar itens ao carrinho.
- Finalizar compras.
- Atualizar dados de perfil.
- Consultar histórico de compras.

### Fornecedor
- Cadastrar novos produtos.
- Listar produtos cadastrados.
- Excluir produtos próprios de forma segura.
- Visualizar informações do perfil.

### Funcionalidades Gerais
- Sistema de login simples.
- Persistência de dados utilizando LocalStorage.
- Controle automático de IDs.
- Carrinho persistente.
- Controle de fluxo entre páginas.

---

## 3. Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript ES6**
- **LocalStorage**
- **VS Code + Live Server**

Ferramentas adicionais utilizadas durante o desenvolvimento:
- ChatGPT  
- GitHub Copilot

---

## 4. Estrutura do Projeto

### Arquivos HTML
- **catalogo.html** — Página inicial do sistema. Exibe o catálogo de produtos.
- **carrinho.html** — Exibe os itens do carrinho e permite finalizar compras.
- **paginaLogin.html** — Página de login do cliente ou fornecedor.
- **perfilCliente.html** — Exibe dados do cliente, histórico e opções de conta.
- **perfilFornecedor.html** — Exibe dados do fornecedor e gerenciamento dos produtos.

### Arquivos JavaScript
- **data.js**  
  - Inicialização de dados.
  - CRUD de usuários.
  - CRUD de produtos.
  - Controle do carrinho.
  - Simulação de banco de dados.
  - Classes básicas de Cliente e Fornecedor.

- **selecao_produto.js**  
  - Gerencia combinações de tamanhos e cores de produtos.

- **fornecedor_perfil.js**  
  - Classe específica do fornecedor com métodos de gerenciamento de produtos.

- **cliente_perfil.js**  
  - Classe específica do cliente com funções de atualização de cadastro e histórico de compras.

---

## 5. Fluxo do Sistema

1. O usuário inicia o sistema pelo arquivo **catalogo.html** usando o Live Server.  
2. É possível navegar pelo catálogo sem login.  
3. Para comprar ou acessar perfis, o usuário deve realizar login.  
4. Clientes podem comprar e acessar histórico.  
5. Fornecedores podem cadastrar e gerenciar produtos.  
6. Todas as operações são salvas no LocalStorage.

---

## 6. Instalação e Execução

### Requisitos
- VS Code  
- Extensão **Live Server**

### Como executar
1. Abra o projeto no VS Code.  
2. Clique com o botão direito sobre **catalogo.html**.  
3. Selecione **Open with Live Server**.  
4. O navegador abrirá automaticamente com o sistema funcionando.

---

## 7. Instruções de Uso

- Comece sempre pelo **catalogo.html** usando Live Server.
- Adicione produtos ao carrinho pelo catálogo.
- Para finalizar compras ou acessar perfis, faça login.
- Perfis:
  - **Cliente**: pode alterar dados, ver histórico e comprar.  
  - **Fornecedor**: pode cadastrar, listar e excluir produtos próprios.

### Usuários de Teste 

#### Cliente
- Email: `cliente@teste.com`
- Senha: `123`

#### Fornecedor
- Email: `fornecedor@teste.com`
- Senha: `123`

Esses usuários podem ser utilizados para testar todas as funcionalidades do sistema.

---

## 8. Equipe

Projeto desenvolvido por:

- **Christopher Santos**  
- **Mirian Vedovoto**  
- **Rafael Barriquello**

Ferramentas de apoio utilizadas:
- ChatGPT  
- GitHub Copilot

---

## 9. Observações Finais

Este sistema foi desenvolvido exclusivamente para fins educacionais, como exercício da disciplina de **Engenharia de Software**, permitindo a aplicação de:

- Simulação de banco de dados.  
- Estruturação de projetos front-end.  
- Operações CRUD.  
- Organização modular.  
- Experiência de usuário.  

---
