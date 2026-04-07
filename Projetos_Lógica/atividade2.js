// Comparar número par ou ímpar
let num = parseFloat(prompt("Digite um número entre 0 e 9: "));
let pi = num%2;

if (num <0 || num>9){
    console.log("Valor inválido. Por favor, tente novamente");
} else {
    if (num<5 && pi==0){
        console.log("Amarelo e Verde");
    } else if(num>5 && pi==0){
        console.log("Preto e Branco");
    } else if(num<6 && !(pi===0)){
        console.log("Azul e vermelho");
    } else if(num>6 && !(pi===0)){
        console.log("Laranja e cinza");
    }
}
