console.log("=========================Execução com callback=========================")

function buscarComAtraso(nome, callback){
    const tempo = Math.floor(Math.random() * 2000);
    console.log(`Buscando resultado... (${tempo}ms) `)
    setTimeout(() => callback(nome), tempo);
}

buscarComAtraso("Ana", (nome) => console.log(`Resultado encontrado: ${nome} `))
buscarComAtraso("Bruno", (nome) => console.log(`Resultado encontrado: ${nome} `))