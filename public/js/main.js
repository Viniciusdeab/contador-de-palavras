var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function(){
    var conteudo = campo.val();
    
    var qtdPalavras = conteudo.split(/\s+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);
    
    var qtdCarcteres = conteudo.length;
    $("#contador-caracteres").text(qtdCarcteres);

});
