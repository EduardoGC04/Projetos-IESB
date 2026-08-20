function buscar(nome,tempo){
    return new Promise((resolve) => {
        setTimeout(() => resolve(nome), tempo);
    });
}

console.time("total");
Promise.all([
    buscar("Usuário", 1000),
    buscar("Pedidos", 1500),
    buscar("Pagamentos", 800)
]) .then((resultados) => {
    console.log(resultados);
    console.timeEnd("total")
})