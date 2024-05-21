function SalvarNota(nota) {
    let notaAtual = nota;
    let notaApresentada = document.getElementById('nota-apresentada');
    notaApresentada.textContent = notaAtual;
}

function BotaoSubmit() {
    let ratingpage = document.getElementById('ratingpage');
    ratingpage.remove();

    let thankspage = document.getElementById('thankspage');
    thankspage.classList.add('visible');
}