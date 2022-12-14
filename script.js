// declarando os arrays

const cards = [];
cards.push(document.getElementById("card01"), document.getElementById("card02"), document.getElementById("card03"));
const modals = [];
modals.push(document.getElementById("modal01"), document.getElementById("modal02"), document.getElementById("modal03"));
const botoes = [];
botoes.push(document.getElementById("botao-fechar01"), document.getElementById("botao-fechar02"), document.getElementById("botao-fechar03"));

// laço para escutar clique nos cards específicos, abrir e fechar o modal

for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener('click', abreModal, false);
    botoes[i].addEventListener('click', fechaModal, false);

    function abreModal() {
        modals[i].setAttribute("id", "modal-visivel");
    };

    function fechaModal() {
        modals[i].removeAttribute("id", "");
    };

    // fechar modal apertando no esc ou em clicando em qualquer lugar

    modals[i].addEventListener('click', function () {
        fechaModal();
    });

    window.onkeydown = function (event) {
        if (event.keyCode == 27) {
            modals[0].removeAttribute("id", "");
            modals[1].removeAttribute("id", "");
            modals[2].removeAttribute("id", "");
        }
    };
};
