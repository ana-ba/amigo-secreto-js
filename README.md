# 🎁 Projeto Amigo Secreto JS

Este é um projeto simples e interativo desenvolvido com **HTML**, **CSS** e **JavaScript**, com o objetivo de realizar sorteios de **Amigo Secreto** diretamente no navegador. É ideal para festas de fim de ano, encontros de amigos ou confraternizações virtuais.

---

## 📌 Objetivo

Permitir que o usuário adicione nomes à lista de participantes e com um clique, sorteia aleatoriamente um nome entre os amigos adicionados — simulando a brincadeira de amigo secreto.

---

## 🧠 Como funciona?

1. O usuário digita os nomes dos amigos um por um.
2. Cada nome é adicionado à lista, evitando duplicatas e nomes em branco.
3. Ao clicar no botão "Sortear amigo", o sistema escolhe um nome aleatório da lista utilizando:
   ```javascript
   Math.floor(Math.random() * amigos.length)

