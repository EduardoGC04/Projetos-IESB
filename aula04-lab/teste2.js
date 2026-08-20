function dividir(a,b,callback){
    if (b === 0){
        callback(new Error("Não é possivel dividir por 0!, tente outro divisor."))
        return;
    } 
    callback (null, a/b);
}

dividir (10,2, (erro, resultado) => {
    if (erro) return console.error("Erro:", erro.message);
    console.log(`Resultado de 10 e 2:`, resultado);
});

dividir (10, 0, (erro, resultado) => {
    if (erro) return console.error("Erro: ", erro.message);
    console.log(`Resultado de 10 e 0`, resultado);
});