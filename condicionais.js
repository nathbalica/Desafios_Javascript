function AprovadoReprovado(n1, n2, n3){
    let media = ((n1*3)+(n2*3)+(n3*4))/10;

    if (media < 7){
        return "Reprovado"
    } else if(media < 7){
        return "Prova Final"
    } else {
        return "Aprovado"
    }
}

function maiorDeIdade(idade) {
    if (idade > 17){
      return "Maior de idade"
    } else{
      return "Menor de idade"
    }
  }

  function situacao(nota) {
    if (nota >= 7){
        return "Aprovado"
    } else if (nota >= 5){
        return "Prova Final"
    } else {
        return "Reprovado"
    }
}

function aprovado(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    if (media >= 7){
      return "sim";
    } else{
      return "não";
    }
  }


 