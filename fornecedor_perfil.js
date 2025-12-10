class FornecedorPerfil {
    constructor(fornecedorId) {
        const users = JSON.parse(localStorage.getItem(LS_KEYS.USERS));
        this.dados = users.find(u => u.id === fornecedorId);

        if (!this.dados || this.dados.tipo !== 'fornecedor') {
            throw new Error("Usuário inválido ou não é um fornecedor.");
        }
    }
    
    getInformacoes() {
        return this.dados;
    }

    listarMeusProdutos() {
        return getProductsByFornecedor(this.dados.id);
    }

    publicarProduto(nome, descricao, preco, imagemUrl) {
        const novoProduto = {
            nome: nome,
            descricao: descricao,
            preco: parseFloat(preco),
            imagem: imagemUrl,
            fornecedor_id: this.dados.id 
        };

        return saveProduct(novoProduto);
    }

    removerMeuProduto(produtoId) {
        const produto = getProductById(produtoId);

        if (!produto) {
            throw new Error("Produto não encontrado.");
        }

        if (produto.fornecedor_id !== this.dados.id) {
            throw new Error("Acesso Negado: Você não pode excluir produtos de outro fornecedor.");
        }

        return deleteProduct(produtoId);
    }

    calcularValorTotalEstoque() {
        const meusProdutos = this.listarMeusProdutos();
        const total = meusProdutos.reduce((acc, produto) => acc + Number(produto.preco), 0);
        return total.toFixed(2);
    }
}