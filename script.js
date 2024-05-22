function SalvarNota(botaoClicado, nota) {
    let botoesNota = document.querySelectorAll('.botao-nota');
    botoesNota.forEach(botao => {
        if (botao !== botaoClicado) {
            botao.classList.remove('clicado');
        }
    }); 

    botaoClicado.classList.add('clicado');

    let notaApresentada = document.getElementById('nota-apresentada');
        notaApresentada.textContent = nota;
}

function BotaoSubmit() {
    let erro = document.getElementById('erro');
    try {
        let notaApresentada = document.getElementById('nota-apresentada').textContent;

        if (notaApresentada === '') {
            throw new Error('Por favor, selecione uma nota antes de enviar.');
        }

        let ratingpage = document.getElementById('ratingpage');
        ratingpage.remove();

        let thankspage = document.getElementById('thankspage');
        thankspage.classList.add('visible');
    } catch (error) {
        erro.textContent = error.message;
    }
}
