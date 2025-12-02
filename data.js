// data.js - Simulação de Banco de Dados com localStorage

// --- Chaves do Local Storage ---
const LS_KEYS = {
    USERS: 'LSDATA_USERS',
    PRODUCTS: 'LSDATA_PRODUCTS',
    NEXT_USER_ID: 'LS_NEXT_USER_ID',
    NEXT_PRODUCT_ID: 'LS_NEXT_PRODUCT_ID',
    LOGGED_USER: 'usuarioLogado', // O usuário que está logado
    CART: 'carrinho'
};

// --- Dados Iniciais para Simulação ---
function initializeData() {
    if (!localStorage.getItem(LS_KEYS.USERS)) {
        console.log("Inicializando dados de usuários...");
        const initialUsers = [
            { id: 1, nome: "Cliente Padrão", email: "cliente@teste.com", senha: "123", tipo: "cliente" },
            { id: 2, nome: "Fornecedor Master", email: "fornecedor@teste.com", senha: "123", tipo: "fornecedor" }
        ];
        localStorage.setItem(LS_KEYS.USERS, JSON.stringify(initialUsers));
        localStorage.setItem(LS_KEYS.NEXT_USER_ID, 3);
    }
    
    if (!localStorage.getItem(LS_KEYS.PRODUCTS)) {
        console.log("Inicializando dados de produtos...");
        const initialProducts = [
            { id: 101, nome: "Garrafa Térmica 1L", descricao: "Aço inoxidável, mantém 12h quente.", preco: 79.90, imagem: "https://via.placeholder.com/200/27ae60/ffffff?text=Termica+1L", fornecedor_id: 2 },
            { id: 102, nome: "Squeeze Esportivo", descricao: "750ml, livre de BPA, bico prático.", preco: 29.50, imagem: "https://via.placeholder.com/200/3498db/ffffff?text=Squeeze+750ml", fornecedor_id: 2 }
        ];
        localStorage.setItem(LS_KEYS.PRODUCTS, JSON.stringify(initialProducts));
        localStorage.setItem(LS_KEYS.NEXT_PRODUCT_ID, 103);
    }
}
initializeData(); // Chama a inicialização ao carregar o script

// --- Funções de Usuário (Simulação de API) ---

function getUsers() {
    return JSON.parse(localStorage.getItem(LS_KEYS.USERS)) || [];
}

function saveUser(usuario) {
    let users = getUsers();
    const nextId = Number(localStorage.getItem(LS_KEYS.NEXT_USER_ID));
    usuario.id = nextId;
    users.push(usuario);
    localStorage.setItem(LS_KEYS.USERS, JSON.stringify(users));
    localStorage.setItem(LS_KEYS.NEXT_USER_ID, nextId + 1);
    return usuario;
}

function findUser(email, senha) {
    const users = getUsers();
    // Simula a busca e a comparação de senha
    const usuario = users.find(u => u.email === email && u.senha === senha);
    if (usuario) {
        return { id: usuario.id, nome: usuario.nome, email: usuario.email, tipo: usuario.tipo };
    }
    return null;
}

function isEmailUnique(email) {
    const users = getUsers();
    return !users.some(u => u.email === email);
}

// --- Funções de Produto (Simulação de API) ---

function getProducts() {
    return JSON.parse(localStorage.getItem(LS_KEYS.PRODUCTS)) || [];
}

function getProductsByFornecedor(fornecedorID) {
    const products = getProducts();
    return products.filter(p => p.fornecedor_id == fornecedorID); // '==' para ID numérico
}

function saveProduct(produto) {
    let products = getProducts();
    const nextId = Number(localStorage.getItem(LS_KEYS.NEXT_PRODUCT_ID));
    produto.id = nextId;
    produto.preco = Number(produto.preco);
    
    products.push(produto);
    localStorage.setItem(LS_KEYS.PRODUCTS, JSON.stringify(products));
    localStorage.setItem(LS_KEYS.NEXT_PRODUCT_ID, nextId + 1);
    return produto;
}

function deleteProduct(id) {
    let products = getProducts();
    const initialLength = products.length;
    
    products = products.filter(p => p.id != id);
    
    if (products.length < initialLength) {
        localStorage.setItem(LS_KEYS.PRODUCTS, JSON.stringify(products));
        return true; // Deletado
    }
    return false; // Não encontrado
}

function getProductById(id) {
    const products = getProducts();
    return products.find(p => p.id == id);
}

// --- Funções de Carrinho ---
function getCart() {
    return JSON.parse(localStorage.getItem(LS_KEYS.CART)) || [];
}

function saveCart(cart) {
    localStorage.setItem(LS_KEYS.CART, JSON.stringify(cart));
}

function clearCart() {
    localStorage.removeItem(LS_KEYS.CART);
}