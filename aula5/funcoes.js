function exigeMsg(msg) {
    console.log(msg);
}
exigeMsg('Hello World');
var nmFuncao = 'exibiMsg';
exigeMsg("uma outra chamada da fun\u00E7\u00E3o " + nmFuncao);
var soma = 10;
function contador(valor) {
    if (valor === void 0) { valor = 1; }
    soma += valor;
    console.log(soma);
}
contador();
contador(5);
contador(10);
//arrow function função ternária
var ParOuImpar;
ParOuImpar = function (valor) {
    return (valor % 2 == 0) ? "Par" : "Impar";
};
console.log(ParOuImpar(3));
