/*Exercício 01
Crie uma variável com valor 190 e após isso acumule 
nela o valor de 45 e exiba o novo valor na console.

Exercício 02
Crie uma variável com a palavra 'TypeScript' e posterior 
a em seguida insira no inicio da palavra 'Aula de '.
Após isso exiba a frase na console.

Exercício 03
Faça um programa para dada a idade de uma pessoa informe
que a pessoa pode votar, lembrando que:
    Até 16 anos não pode votar
    Menores de 18 anos e maiores de 70 anos

Exercício 04
Faça um programa para dado o nome, mês e ano de 
nascimento, informar a idade correta da pessoa.
    ex.: Luis 32 anos

Exercício 05
Faça uma função para calcular 3 valores distintos, 
lembrando que pode ocorrer de somente ser passado 2
valores, quando isso ocorrer, devesse passar o 3º valor
como 0.*/


let soma = 190;

function exe1(){
    soma += 45;
    console.log(soma)
}

exe1();


function exe2(){
    let texto = "TypeScript";
    console.log(`aula de ${texto}`);
}

exe2();

function exe3(){
    let idade = 18;
    if(idade <16 ){
        console.log("Não pode votar")
    }else if(idade >=16 && idade < 18 || idade >=71){
        console.log("voto não obrigatorio")
    }else if(idade >= 18 && idade < 71){
        console.log("voto obrigatorio")
    }
}

exe3();

function exe4(){
    let DA = 14;
    let MA = 6;
    let AA = 2019;

    let nome = "joao";
    let DN = 26;
    let MN = 4;
    let AN = 2000;

    let idade = AA - AN;

    if(MA < MN || MA == MN && DA < DN){
        idade--;
    }

    console.log(`${nome} tem ${idade} anos`);
}

exe4();


function exe5(){
    let num1 = 687
    let num2 = 54;
    let num3;
    
    if(num3 == undefined){
        num3 = 0;
    }
    
    let result = num1 * num2 * num3;
    console.log(`o resultado na multiplicação é ${result}`)
}

exe5();
    