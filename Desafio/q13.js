function captura(posicaoTorre, posicaoAdversario) {
    let torreX = Number(posicaoTorre[0]);
    let torreY = Number(posicaoTorre[1]);
    let adversarioX = Number(posicaoAdversario[0]);
    let adversarioY = Number(posicaoAdversario[1]);

    if(torreX === adversarioX || torreY === adversarioY) {
        return "Sim";
    } else {
        return "Não";
    }
}
console.log(captura(11, 31))