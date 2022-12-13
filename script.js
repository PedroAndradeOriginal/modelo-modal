const cards = [];
cards.push(document.getElementById("card01"), document.getElementById("card02"), document.getElementById("card03"));
const modals = [];
modals.push(document.getElementById("modal01"), document.getElementById("modal02"), document.getElementById("modal03"));
const botoes = [];
botoes.push(document.getElementById("botao-fechar01"), document.getElementById("botao-fechar02"), document.getElementById("botao-fechar03"));

for (let i = 0; i < cards.length; i++) {
    
    cards[i].addEventListener('click', abreModal, false);
    botoes[i].addEventListener('click', fechaModal, false);

    function abreModal() {
        modals[i].setAttribute("id", "modal-visivel");
    }

    function fechaModal() {
        modals[i].setAttribute("id", "modal01"); //gambiarra temporária
    }
}

/*window.onkeydown = function (event) {
        if (event.keyCode == 27) {
            fechaModal ();
        }
    };
    
    window.onmousedown = function () {
        fechaModal ();
    };*/