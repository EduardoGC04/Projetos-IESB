function proItem(item){
    return new Promise((resolve) =>
    setTimeout(() => {
        console.log(`processando: ${item}`);
        resolve();
    }, 500)
    );
}

async function processAll(lista){
    for(const item of lista){
        await proItem(item);
    }
    console.log("Lista Processada!")
}
processAll(["Arroz", "Feijão", "Ovo", "Tomate"])