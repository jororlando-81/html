function MensagemSubmissao() {
    var nome = document.getElementById("fname");
    if (nome.value != "") {
        alert('Obrigado ' + nome.value + '. Os dados foram enviados!');
    }
}