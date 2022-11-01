function AprovadoReprovado(n1, n2, n3, faltas){
    let media = (n1*+n2+n3)/3;

    if (media < 7 && faltas < 10){
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

function classificado(notaVestibular, notaEnem) {
    let aprovadoVestibular = (notaVestibular > 8);
    let aprovadoEnem = (notaEnem > 700);

    if (!aprovadoVestibular){
        return (" not aprovado")
    }
    if (aprovadoVestibular || aprovadoEnem){
        return "Classificado";
    } else {
        return "Desclassificado";
    }
}

function pecoDesconto(preco, estaComDesconto) {
    let estaComDesconto = true
    if (preco > 100 && !estaComDesconto){
      return "Quero pechinchar"
    } else{
      return "Negócio fechado"
    }
  }

  function tudoPositivo(num1, num2, num3) {
    if (num1 < 0 || num2 < 0 || num3 < 0){
        return "Tem negativo!"
    } else{
        return "Tudo positivo!"
    }
  }