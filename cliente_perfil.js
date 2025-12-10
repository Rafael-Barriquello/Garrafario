if (!localStorage.getItem('LSDATA_ORDERS')) {
    localStorage.setItem('LSDATA_ORDERS', JSON.stringify([]));
}

class ClientePerfil {
    constructor(clienteId) {
        const users = JSON.parse(localStorage.getItem(LS_KEYS.USERS));
        this.dados = users.find(u => u.id === clienteId);
        
        if (!this.dados || this.dados.tipo !== 'cliente') {
            throw new Error("Usuário inválido ou não é um cliente.");
        }
    }

    getInformacoes() {
        return this.dados;
    } 

    atualizarCadastro(novoNome, novoEmail, novaSenha) {
        let users = JSON.parse(localStorage.getItem(LS_KEYS.USERS));
        const index = users.findIndex(u => u.id === this.dados.id);

        if (index !== -1) {
            users[index].nome = novoNome || users[index].nome;
            users[index].email = novoEmail || users[index].email;
            if (novaSenha) users[index].senha = novaSenha;

            localStorage.setItem(LS_KEYS.USERS, JSON.stringify(users));
            localStorage.setItem(LS_KEYS.LOGGED_USER, JSON.stringify(users[index]));
            
            this.dados = users[index];
            return true;
        }
        return false;
    }

    realizarCompra(itensCarrinho, valorTotal) {
        const pedidos = JSON.parse(localStorage.getItem('LSDATA_ORDERS')) || [];
        
        const novoPedido = {
            id: Date.now(),
            clienteId: this.dados.id,
            itens: itensCarrinho,
            total: valorTotal,
            data: new Date().toISOString(),
            status: "Concluído"
        };

        pedidos.push(novoPedido);
        localStorage.setItem('LSDATA_ORDERS', JSON.stringify(pedidos));
        
        return novoPedido;
    }


    getHistoricoCompras() {
        const pedidos = JSON.parse(localStorage.getItem('LSDATA_ORDERS')) || [];
        return pedidos
            .filter(p => p.clienteId === this.dados.id)
            .sort((a, b) => new Date(b.data) - new Date(a.data));
    }
}