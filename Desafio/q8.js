function somaImpares(array){
    var soma = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            soma += array[i];
        }
    }
    return soma;
}

console.log(somaImpares([1,4,6]));
console.log(somaImpares([3,6,8,9]));