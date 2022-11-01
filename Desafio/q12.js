function numeroDriven(num){
    for(let i = 0; i < num; i++){
        if(Math.pow(3,i) - 1 == num){
            return "É desse tipo"
        }
    }
    return "Não é desse tipo"
}

console.log(numeroDriven(2));
console.log(numeroDriven(8));
console.log(numeroDriven(5));