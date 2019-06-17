var soma = 190;
function exe1() {
    soma += 45;
    console.log(soma);
}
exe1();
function exe2() {
    var texto = "TypeScript";
    console.log("aula de " + texto);
}
exe2();
function exe3() {
    var idade = 18;
    if (idade < 16) {
        console.log("Não pode votar");
    }
    else if (idade >= 16 && idade < 18 || idade >= 71) {
        console.log("voto não obrigatorio");
    }
    else if (idade >= 18 && idade < 71) {
        console.log("voto obrigatorio");
    }
}
exe3();
function exe4() {
    var DA = 14;
    var MA = 6;
    var AA = 2019;
    var nome = "joao";
    var DN = 26;
    var MN = 4;
    var AN = 2000;
    var idade = AA - AN;
    if (MA < MN || MA == MN && DA < DN) {
        idade--;
    }
    console.log(nome + " tem " + idade + " anos");
}
exe4();
function exe5() {
    var num1 = 687;
    var num2 = 54;
    var num3;
    if (num3 == undefined) {
        num3 = 0;
    }
    var result = num1 * num2 * num3;
    console.log("o resultado na multiplica\u00E7\u00E3o \u00E9 " + result);
}
exe5();
