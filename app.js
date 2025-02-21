//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    
    if (nome && ! amigos.includes(nome)){
        amigos.push(nome);
        input.value = '';
        atualizarlistaAmigos();
    }else if(amigos.includes(nome)){
        alert("Este amigo já foi adicionado");
    }else{
        alert('Insira o nome de um amigo valido');
    }

}
function atualizarlistaAmigos() {
    const lista = document.getElementById ('listaAmigos');
    lista.innerHTML = ''; //Limpa a lista antes de atualizar


    amigos.forEach((amigo) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild (item);

    })
}

//Função que realiza o sorteio
function sortearAmigo() {
    if(amigos.length == 0){
        alert('Tem que adicionar pelo menos um amigo *_*');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `Amigo Sorteado: <strong>${amigoSorteado}</strong>`;
}