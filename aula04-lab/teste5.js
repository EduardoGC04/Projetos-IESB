function tarefa(nome, tempo){
    return new Promise((r) => setTimeout(() => r(nome), tempo));
}

async function sequencial(){
    console.time("Sequencial");
    await tarefa("A", 1000);
    await tarefa("B", 1000);
    console.timeEnd("Sequencial");
}

async function paralelo(){
    console.time("paralelo");
    await Promise.all([tarefa("A", 1000, tarefa("B",1000))]);
    console.timeEnd("paralelo");
}

sequencial().then(paralelo);