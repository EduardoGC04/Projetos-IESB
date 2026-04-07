// Menu interativo com funções, switch-case e laço de repetição
// Laço de repetição
let i = 0
let r;
do {
// Menu interativo
let op = parseInt(prompt("Digite a operação que deseja fazer:\n 1 - Calcular média de 2 numeros:\n 2 - Calcular a raiz quadrada de um número:\n 3 - Somar números aleatórios\n 4 - Calcular área de uma circunferencia: \n 5 - Sair: \n Sua opção: "));
if (op==1){
    r=0
} else if(op==2){
    r=1
} else if(op==3){
    r=2
} else if(op==4){
    r=3
} else if (op==5){
    r=4
}
//Funções a serem executadas
switch(r){
//Função para calcular média
    case 0:
     let n1 = parseFloat(prompt("Digite o primeiro número para calcular: "))
    let n2 = parseFloat(prompt("Digite o segundo número para calcular: "))
    function calcularMedia(n1,n2){
         let md = (n1+n2)/2
        return (md);
    }
    console.log("A média é de: ",calcularMedia(n1,n2))
break;
//FFunção para calcular a Raiz quadrada
    case 1:
    let num = parseFloat(prompt("Digite o número para calcular: "))
    function calcularRaiz(num){
        let raiz = Math.sqrt(num)
        return(raiz)
    }
    console.log(calcularRaiz(num))
break;
//Função para somar números aleatórios
    case 2:
        function somaRandom(){
        let soma = 0;
        for(let i=0;i<5;i++){
            let num = Math.random()*100
            soma = num+soma
            console.log("Os números são: ",num.toFixed(0))
        }
        return(soma)
    }
    console.log("Resultado", somaRandom().toFixed(0))
break;
//Função para calcular área de circunferencia
    case 3:
            let raio = parseFloat(prompt("Digite a área: "))
    function calcularArea(raio){
        let area = Math.PI * Math.pow(raio,2)
        return (area)
    }
    console.log("A área é de: ",calcularArea(raio).toFixed(2))
break;
//Finalizar programa
    case 4:
        console.log("Obrigado e volte sempre!")
        i++
break;
}
//Fim do laço de repetição
} while (i==0)
