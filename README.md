# Amigo Secreto - Sorteio

![Amigo Secreto](assets/amigo-secreto.png)

## Sobre o Projeto

Este é um aplicativo simples para sorteio de Amigo Secreto, feito com HTML, CSS e JavaScript puro.

## Como Funciona a Lógica de Programação

Vamos entender como o JavaScript foi usado para fazer este sorteio funcionar:

### 1. Guardando os Nomes

Primeiro, precisamos de um lugar para guardar os nomes dos participantes. Em programação, usamos um **array** (uma lista) para isso:

```javascript
let listaDeAmigos = [];
```

Pense no array como uma caixa onde podemos guardar vários itens, um após o outro.

### 2. Adicionando Nomes à Lista

Quando você digita um nome e clica no botão "Adicionar", o JavaScript executa uma função chamada `adicionarAmigo()`:

```javascript
function adicionarAmigo() {
    // Pega o texto que foi digitado
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    
    // Verifica se digitou alguma coisa
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }
    
    // Coloca o nome na lista
    listaDeAmigos.push(nomeAmigo);
    
    // Limpa o campo de texto
    inputAmigo.value = '';
    
    // Atualiza a lista na tela
    atualizarListaAmigos();
    
    // Limpa o resultado anterior
    document.getElementById('resultado').innerHTML = '';
    
    // Coloca o cursor de volta no campo
    inputAmigo.focus();
}
```

O que esta função faz:
1. **Pega o nome digitado** no campo de texto
2. **Verifica se o campo não está vazio**
3. **Adiciona o nome na lista** usando `push()` (que coloca o item no final da lista)
4. **Limpa o campo** para facilitar digitar outro nome
5. **Mostra a lista atualizada** na tela

### 3. Mostrando os Nomes na Tela

Para mostrar os nomes que já foram adicionados, usamos a função `atualizarListaAmigos()`:

```javascript
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';
    
    // Para cada nome na lista, cria um item na tela
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}
```

Esta função:
1. **Limpa a lista** que está sendo mostrada na tela
2. **Percorre cada nome** na nossa lista usando `forEach()`
3. **Cria um novo elemento** `<li>` para cada nome
4. **Coloca o elemento** na página

### 4. Sorteando um Nome

A parte mais legal é o sorteio! Quando clicamos no botão "Sortear amigo", a função `sortearAmigo()` é executada:

```javascript
function sortearAmigo() {
    // Verifica se tem alguém na lista
    if (listaDeAmigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    
    // Escolhe um número aleatório
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    
    // Pega o nome que está nessa posição da lista
    const amigoSorteado = listaDeAmigos[indiceAleatorio];
    
    // Mostra quem foi sorteado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>🎉 ${amigoSorteado} foi sorteado! 🎉</li>`;
}
```

Como funciona o sorteio:
1. **Verifica se a lista tem nomes**
2. **Gera um número aleatório** entre 0 e o tamanho da lista
   - `Math.random()` dá um número entre 0 e 1 (por exemplo: 0.7)
   - Multiplicamos pelo tamanho da lista
   - `Math.floor()` arredonda para baixo (transforma em número inteiro)
3. **Pega o nome** que está na posição sorteada da lista
4. **Mostra o resultado** na tela

### 5. Facilitando o Uso

Para tornar o uso mais fácil, adicionamos um código que permite pressionar a tecla Enter para adicionar um nome:

```javascript
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});
```

Este código:
1. **Fica observando** quando uma tecla é pressionada no campo de texto
2. **Verifica se foi a tecla Enter**
3. **Chama a função** de adicionar amigo quando Enter é pressionado

## O Que Aprendemos

Neste projeto, usamos vários conceitos importantes de programação:

- **Variáveis**: Para guardar informações
- **Arrays**: Para guardar listas de informações
- **Funções**: Para organizar o código em blocos
- **Condicionais (if/else)**: Para tomar decisões
- **Eventos**: Para responder a ações do usuário (cliques, teclas)
- **Manipulação do DOM**: Para modificar a página HTML
- **Números aleatórios**: Para fazer o sorteio

## Como Usar

1. Abra o arquivo `(https://challenge-amigo-secreto-lyart-kappa.vercel.app/)` no navegador
2. Digite o nome de um participante e clique em "Adicionar" (ou pressione Enter)
3. Repita para adicionar todos os participantes
4. Clique em "Sortear amigo" para fazer o sorteio
