function teste(){
    let alunos = ["Ana", "Bia", "Carlos"];
    let texto = "";

    for(i=0; i=alunos.length; i++){
        texto += alunos[i];
    }
    return texto;
}

  function somarTodos(lista){
    let soma = 0;
    for(i=0; i < lista.length; i++){
        soma += lista[i]
    }
    return soma;
  }

  function maiorIndice(lista) {
    indice = 0
    for(i=0; i< lista.length; i++)
      if(lista[i] > lista[indice] ){
          indice = i
    return indice
}}

function avancarDias(dia, quantidade) {
    let lista = ["Segunda-feira", "Terca-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo"]
    if (quantidade > 7){
        quantidade -= 7
    }
    for(i=1; i < lista.length+1; i++){
        if (dia == lista[i]){
            i += quantidade
            dia = lista[i]
        }
    }
    return dia
}

function intervaloPares(inicio, fim, quantidade) {
    inicio += 1
    const valor = []
    for(inicio; inicio < fim; inicio++){
        console.log(inicio)
      if (inicio % 2 == 0){
        valor.push(inicio);
      }
    }
    return (valor.slice(0, quantidade))
}

// intervaloPares(4, 13, 3);

function contaLetras(string, letra) {
	let soma = 0
	for(i=0; i < string.length; i++){
		if(string[i] == letra){
			soma ++
		}
	}
	return soma
}
// contaLetras("ovo", "o")

function trocaVogais(string){
    const arr = []
    for(i=0; i< string.length; i++){
        if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
            arr.push("1");
        }else{
            arr.push(string[i])
        }
    }
    return arr.join("")
}
// console.log(trocaVogais("ovo"))

function tiraNumeros(string) {
    const arr = []
    for(i=0; i < string.length; i++){
        if(isNaN(string[i]) == true){
            arr.push(string[i])
        }
    }
    return arr.join("")
  }
//   console.log(tiraNumeros("ab2c4d"))

function somaAteMeta(inicio, meta) {
    let soma = 0
    const arr = []
    for(i=inicio+1; soma < meta; i++){
        arr.push(i)
        soma+=i
    }
    return arr
  }

  console.log(somaAteMeta(2, 12))