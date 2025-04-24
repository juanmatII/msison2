const entrada = document.getElementById("entrada");
const results = document.getElementById("textResults");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultadoOperacion = document.getElementById("resultadoOperacion");

const ejecutar = function(){
    let valorDeEntrada = (Number)(entrada.value);
    console.info(`La edad que ingresaste es: ${valorDeEntrada}`); 
    if(valorDeEntrada <=5) return results.textContent=`Tu edad es: ${valorDeEntrada}, ¿como sabes escribir 😕?`;
    if(valorDeEntrada >5 && valorDeEntrada <14) return results.textContent=`Tu edad es: ${valorDeEntrada}, entonces eres un niño`;
    if(valorDeEntrada >14 && valorDeEntrada <18) return results.textContent=`Tu edad es: ${valorDeEntrada}, entonces eres un pre adolecente`;
    if(valorDeEntrada > 18 &&  valorDeEntrada< 25) return results.textContent=`Tu edad es: ${valorDeEntrada}, entonces eres adolecente`;  
    if(valorDeEntrada >=25 && valorDeEntrada<50) return results.textContent=`Tu edad es: ${valorDeEntrada}, entonces eres un adulto`; 
    if(valorDeEntrada >= 70 && valorDeEntrada <= 90 ) return results.textContent=`Tu edad es: ${valorDeEntrada}, entonces eres un adulto mayor`;
    results.textContent=`Tu edad es: ${valorDeEntrada}, entonces eres menor de edad`;
}
const calculadora = function(){
    let idOperacion = (Number)(entrada.value);
    switch(idOperacion){
        case 1:
            results.textContent='Quieres hacer una suma'
            break;
        case 2: 
            results.textContent='Quieres hacer una resta'
            break;
    }
}
const sumar = (n1,n2) => resultadoOperacion.textContent = n1+n2;
const resta = (n1,n2) => resultadoOperacion.textContent = n1-n2;
const multiplicar = (n1,n2)=>  resultadoOperacion.textContent = n1*n2;
const dividir = (n1,n2)=>  resultadoOperacion.textContent = n1/n2;

const ejecutarOperaciones = function (operacion=''){
    let valor1 = parseFloat(num1.value)
    let valor2 = parseFloat(num2.value)
    if(operacion === 'suma') sumar(valor1,valor2);
    if(operacion === 'resta') resta(valor1,valor2);
    if(operacion === 'multiplicacion') multiplicar(valor1,valor2);
    if(operacion === 'divicion') dividir(valor1,valor2);
}