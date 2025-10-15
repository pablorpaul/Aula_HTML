let titulo = document.getElementById('titulo');
titulo.innerText = "Bem-vindo ao meu site";

let texto = document.getElementsByClassName('texto');
texto[0].style.color = "blue";
texto[1].style.backgroundColor = "green";
texto[2].style.color = "yellow";

let primeiroTexto = document.querySelector('.texto');
primeiroTexto.innerText = "Este é um novo texto";

let todosParagrafos = document.querySelectorAll('p');
console.log(`Existem ${todosParagrafos.length} paragrafos por pagina`);

let link = document.getElementById('link');
link.setAttribute('href', 'https://www.uol.com.br');
console.log(link.getAttribute('href'));