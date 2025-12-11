// fornecedor_perfil.js - implementação corrigida e consistente
class FornecedorPerfil {
    constructor(fornecedorId) {
        const users = JSON.parse(localStorage.getItem(LS_KEYS.USERS)) || [];
        this.dados = users.find(u => u.id === fornecedorId);

        if (!this.dados || this.dados.tipo !== 'fornecedor') {
            throw new Error("Usuário inválido ou não é um fornecedor.");
        }
    }
    
    getInformacoes() {
        return this.dados;
    }

    // Lista os produtos deste fornecedor usando a função de data.js
    listarMeusProdutos() {
        return typeof getProductsByFornecedor === 'function'
            ? getProductsByFornecedor(this.dados.id)
            : [];
    }

    // Método com o nome correto: adicionarProduto
    adicionarProduto(nome, descricao, preco, imagemUrl) {
        const novoProduto = {
            nome: nome,
            descricao: descricao || '',
            preco: Number(preco) || 0,
            imagem: imagemUrl || '',
            fornecedor_id: this.dados.id
        };

        // Usa a função saveProduct definida em data.js
        if (typeof saveProduct === 'function') {
            return saveProduct(novoProduto);
        } else {
            // fallback manual (não esperado se data.js estiver presente)
            let products = JSON.parse(localStorage.getItem(LS_KEYS.PRODUCTS)) || [];
            const nextId = Number(localStorage.getItem(LS_KEYS.NEXT_PRODUCT_ID)) || (Date.now());
            novoProduto.id = nextId;
            products.push(novoProduto);
            localStorage.setItem(LS_KEYS.PRODUCTS, JSON.stringify(products));
            localStorage.setItem(LS_KEYS.NEXT_PRODUCT_ID, nextId + 1);
            return novoProduto;
        }
    }

    // Remove produto garantindo que pertença ao fornecedor
    deletarProdutoSeguro(produtoId) {
        const produto = typeof getProductById === 'function'
            ? getProductById(produtoId)
            : (JSON.parse(localStorage.getItem(LS_KEYS.PRODUCTS)) || []).find(p => p.id == produtoId);

        if (!produto) {
            throw new Error("Produto não encontrado.");
        }

        if (produto.fornecedor_id !== this.dados.id) {
            throw new Error("Acesso Negado: Você não pode excluir produtos de outro fornecedor.");
        }

        return typeof deleteProduct === 'function' ? deleteProduct(produtoId) : false;
    }

    // Total (soma) do estoque (somente preços, caso queira outro cálculo, adaptar)
    calcularValorTotalEstoque() {
        const meusProdutos = this.listarMeusProdutos() || [];
        const total = meusProdutos.reduce((acc, produto) => acc + Number(produto.preco || 0), 0);
        return total.toFixed(2);
    }
}
