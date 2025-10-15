//Seleciona o paragrafo por ID
let paragrafo = document.getElementById('meuParagrafo');

//Adicionar o Listener
paragrafo.addEventListener('mouseover', function(){
    paragrafo.classList.add('hover');
});

paragrafo.addEventListener('mouseout', function(){
    paragrafo.classList.remove('hover');
});