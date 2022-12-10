// ========== declarando variáveis

let card1 = document.querySelector('#card01');
let card2 = document.querySelector('#card02');
let card3 = document.querySelector('#card03');

let modal1 = document.querySelector('#modal01');
let modal2 = document.querySelector('#modal02');
let modal3 = document.querySelector('#modal03');

let botao1 = document.querySelector('#botao-fechar01');
let botao2 = document.querySelector('#botao-fechar02');
let botao3 = document.querySelector('#botao-fechar03');

// ============= desclarando eventos

card1.addEventListener('click', abreModal1, false);
card2.addEventListener('click', abreModal2, false);
card3.addEventListener('click', abreModal3, false);
botao1.addEventListener('click', fechaModal1, false);
botao2.addEventListener('click', fechaModal2, false);
botao3.addEventListener('click', fechaModal3, false);

// =============== funções para abrir modal

function abreModal1() {
    modal1.id = 'modal-visivel';
}

function abreModal2() {
    modal2.id = 'modal-visivel';
}

function abreModal3() {
    modal3.id = 'modal-visivel';
}

// =============== funções para fechar modal

function fechaModal1() {
    modal1.id = 'modal01';
}
function fechaModal2() {
    modal2.id = 'modal02';
}
function fechaModal3() {
    modal3.id = 'modal03';
}