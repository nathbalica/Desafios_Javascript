function decidirCompra (preco, parcelas) {
  if (parcelas >= 10 && preco > 1000) {
    return "Vou comprar";
  } else if (parcelas >= 5 && preco > 500) {
    return "Vou comprar";
  } else if (preco <= 500) {
    return "Vou comprar";
  } else {
    return "Não vou comprar";
  }
}