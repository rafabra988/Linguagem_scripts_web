function exigeMsg(msg:String):void{
    console.log(msg)
}

exigeMsg('Hello World')
let nmFuncao:string = 'exibiMsg'
exigeMsg(`uma outra chamada da função ${nmFuncao}`)

let soma = 10;

function contador(valor:number=1): void{
    soma += valor
    console.log(soma)
}

contador();
contador(5);
contador(10);


//arrow function função ternária
let ParOuImpar:(valor:number) => String;
ParOuImpar = (valor) =>
    (valor % 2 == 0) ? "Par": "Impar";
console.log(ParOuImpar(3));


