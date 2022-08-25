var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");


$(document).ready(function () {
    atualizaTamanhoFrase();
    inicializaContadores();
    incializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
})

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}


function inicializaContadores() {
    campo.on("input", function () {
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\s+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCarcteres = conteudo.length;
        $("#contador-caracteres").text(qtdCarcteres);

    });
}


function incializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();

    campo.one("focus", function () {
        var cronometroID = setInterval(function () {
            $("#botao-reiniciar").attr("disabled", true);
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                $("#botao-reiniciar").attr("disabled", false);
                clearInterval(cronometroID);
                campo.addCalss("campo-desativado");
            }
        }, 1000);
    });
}


function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    incializaCronometro();
}
