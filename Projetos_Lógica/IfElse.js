// Utilizando If/Else
console.log("========== Cálculo de nota IESB ==========")

let n1 = parseFloat(prompt("Digite a primeira nota: "));
let n2 = parseFloat(prompt("Digite a segunda nota: "));

const result = (0.4*n1+0.6*n2);

if (result>=5){
    alert("Resultado da média é:", result, "Você está aprovado, parabéns! :D");
} else if (result<5){
    alert("Resultado da média é:", result, "Infelizmente você não atingiu a nota mínima :(");
} else {
    alert("Algo deu errado '-'");
}
