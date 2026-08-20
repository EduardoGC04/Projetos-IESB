function operacaoInvs(){
    return new Promise((resolve, reject) => {
        const Certo = Math.random() > 0.7;
        setTimeout(() => {
            Certo ? resolve("Sucesso!") : reject("Falhou!");
        }, 300);
    });
}

async function Retry (tentativa){
    for (let i=1;i<=tentativa;i++){
        try {
            const resul = await operacaoInvs();
            console.log(`tentativa ${i}: ${resul}`)
            return resul;
        }catch (erro){
            console.log(`tentativa ${i}: ${erro}, tentando de novo...`);
        }
    }
    console.log("Eu prefiro morrer do que perder a vida depois de: ", tentativa, "tentativas")
}

console.clear();
Retry(5);

