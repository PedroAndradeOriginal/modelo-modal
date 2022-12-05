let card = document.querySelector('.card-img01');
let modal = document.querySelector('.modal');
let botao = document.querySelector('#botao-fechar');


card.addEventListener('click', abreModal, false);
function abreModal() {
    modal.classList.toggle('modal-troca')
}

botao.addEventListener('click', fechaModal, false);
function fechaModal() {
    modal.classList.toggle('modal-troca')
}