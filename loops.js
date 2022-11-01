 function umbridge(){
    let contador = 0;
    let frase = "";

    while(contador < 100){
        frase = frase + "Não devo contar mentiras"
        contador++;
    }
    return frase
 }

 function umbridge2(){
    for(let contador = 0; contador <100; contador++){

    }
 }
 console.log(umbridge())

 function vezes10(texto) {
    let res = ""
    for(contador = 0; contador<10; contador++){
      res += texto;
    }
    return res
  }

function multiplica(texto, repeticoes) {
    let res = ""
    for(contador = 0; contador<repeticoes; contador++){
        res += texto
    }
    return res
}