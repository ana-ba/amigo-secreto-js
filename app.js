let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        input.value = "";
        return;
    }

    amigos.push(nome);
    exibirLista();
    input.value = "";
    input.focus();
}

function exibirLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa a lista antes de atualizar

    amigos.forEach((nome) => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpa resultado anterior

    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome.");
        return;
    }

    // gera índice aleatório com Math.random() e Math.floor()
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // exibe o nome sorteado no resultado
    const item = document.createElement("li");
    item.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(item);
}


