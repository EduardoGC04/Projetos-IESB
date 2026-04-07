// Cálculo de Segundo Grau
console.log("========== CALCULADORA DO SEGUNDO GRAU ==========")

let a = parseFloat(prompt("Digite o valor de A: "));
let b = parseFloat(prompt("Digite o valor de B: "));
let c = parseFloat(prompt("Digite o valor de C: "));

console.log("A formula de Delta é D=b²-4.a.c");
console.log("Aplicando a formula: D =",Math.pow(b,2),"-",4*a*c);

let D = Math.pow(b,2)-4*a*c;

if (D > 0){
    let x1 = (-b+Math.sqrt(D))/2*a;
    let x2 = (-b-Math.sqrt(D))/2*a;
    console.log("O valor de Delta é D=", D);
    console.log("Há duas raízes reais sendo x1 =", x1.toFixed(2), ", e 2 = ", x2.toFixed(2));
} else if (D == 0){
    let x = -b/(2*a);
    console.log("O valor de Delta é:", D);
    console.log("Há apenas uma raiz real = ",x);
} else if (D < 0){
    console.log("O valor de Delta é ", D);
    console.log("Não há raìzes reais.");
}


console.log("Calculadora de fatorial");

let x = parseFloat(prompt("Digite um valor para calcular: "));

if (x==0){
    console.log("Digite um valor válido e tente novamente.");
} else {
    let t1 = x;
    let t2 = x**2/2;
    let t3 = x**3/6;
    let t4 = x**4/24;
    let t5 = x**5/120;
    let e = 1+t1+t2+t3+t4+t5;
    console.log("O resultado é ",e.toFixed(2));
}