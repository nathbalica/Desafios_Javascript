 function apresentar(nome){
    let texto = "Olá" + nome;
    return texto;
 }

 function calcularMedia(n1, n2, n3){
    let media = ((n1*3)+(n2*3)+(n3*4))/10;
    let resultado = "Sua média é:" + media;
    return resultado
 }

 console.log(calcularMedia(5, 8, 10))