//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista para armazenar os nomes dos amigos
let listaDeAmigos = [];

/**
 * Adiciona um amigo à lista se o campo não estiver vazio
 */
function adicionarAmigo() {
    // Obtém o valor do campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    
    // Valida se o campo está vazio
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }
    
    // Adiciona o nome à lista de amigos
    listaDeAmigos.push(nomeAmigo);
    
    // Limpa o campo de entrada
    inputAmigo.value = '';
    
    // Atualiza a lista exibida na tela
    atualizarListaAmigos();
    
    // Limpa o resultado anterior se houver
    document.getElementById('resultado').innerHTML = '';
    
    // Foca no campo de entrada para facilitar a adição de mais nomes
    inputAmigo.focus();
}

/**
 * Atualiza a lista de amigos exibida na tela
 */
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';
    
    // Cria um item de lista para cada amigo
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

/**
 * Sorteia um amigo aleatoriamente da lista
 */
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (listaDeAmigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    
    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    
    // Obtém o amigo sorteado
    const amigoSorteado = listaDeAmigos[indiceAleatorio];
    
    // Exibe o resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>🎉 ${amigoSorteado} foi sorteado! 🎉</li>`;
}

// Adiciona evento de tecla Enter no campo de entrada
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});