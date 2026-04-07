// Cálculadora de notas (If/Else)
let aluno = prompt("Digite seu nome: ");
let p1 = parseFloat(prompt("Sua nota da P1: "));
let p2 = parseFloat(prompt("Sua nota da P2: "));
let at = parseFloat(prompt("Nota das atividades: "));

md = p1*0.35+p2*0.35+at*0.30;

if (md >= 9 && md <= 10){
    
    console.log("Olá ",aluno," Aqui está a suas notas.");
    console.log("Sua média final é: ",md.toFixed(2));
    console.log("Situação = Aprovado");
    console.log("Menção = SS");
    
} else if (md >= 7 && md <= 8.9){
    
    console.log("Olá ",aluno," Aqui está a suas notas.");
    console.log("Sua média final é: ",md.toFixed(2));
    console.log("Situação = Aprovado");
    console.log("Menção = MS");
    
} else if (md >= 5 && md <= 6.9){
    
    console.log("Olá ",aluno," Aqui está a suas notas.");
    console.log("Sua média final é: ",md.toFixed(2));
    console.log("Situação = Aprovado");
    console.log("Menção = MM");
    
} else if (md >= 2.9 && md <= 4.9){
    
    console.log("Olá ",aluno," Aqui está a suas notas.");
    console.log("Sua média final é: ",md.toFixed(2));
    console.log("Situação = Recuperação");
    console.log("Menção = MI");
    
} else if (md >= 0.1 && md <= 2.9){
    
    console.log("Olá ",aluno," Aqui está a suas notas.");
    console.log("Sua média final é: ",md.toFixed(2));
    console.log("Situação = Recuperação");
    console.log("Menção = II");
    
}  else if (md < 0.1 ){
    console.log("Olá ",aluno," Aqui está a suas notas.");
    console.log("Sua média final é: ",md.toFixed(2));
    console.log("Situação = Reprovado");
    console.log("Menção = SR");;
} else {
    console.log(md)
    console.log("Algo deu errado")
}

if (md < 5 && md > 0){
    
     let p3 = parseFloat(prompt("Qual a sua nota da prova de recuperação?: "));
     
        if (p3 > p1 && p3 < p2){
            
        let md = p3*0.35+p2*0.35+at*0.30;
        console.log("Olá ",aluno," Aqui está a suas notas.");
        console.log("Sua média final é: ",md.toFixed(2));
        
            if (md >= 3 && md <= 4.9){
                
    console.log("Olá ",aluno," Aqui está a suas notas.");
    console.log("Sua média final é: ",md.toFixed(2));
    console.log("Situação = Reprovado");
    console.log("Menção = MI");
    
} else if (md >= 0,1 && md <= 2.9){
    
    console.log("Olá ",aluno," Aqui está a suas notas.");
    console.log("Sua média final é: ",md.toFixed(2));
    console.log("Situação = Reprovado");
    console.log("Menção = II");
    
} else {
    console.log("Algo deu muito errado");
}
    } if (p3 > p2 && p3 < p1){
        
        let md = p1*0.35+p3*0.35+at*0.30;
        console.log("Olá ",aluno," Aqui está a suas notas.");
        console.log("Sua média final é: ",md.toFixed(2));
        
        if (md >2.9 && md <= 4.9){
            
    console.log("Olá ",aluno," Aqui está a suas notas.");
    console.log("Sua média final é: ",md.toFixed(2));
    console.log("Situação = Reprovado");
    console.log("Menção = MI");
    
} else if (md >= 0.1 && md <= 2.9){
    
    console.log("Olá ",aluno," Aqui está a suas notas.");
    console.log("Sua média final é: ",md.toFixed(2));
    console.log("Situação = Reprovado");
    console.log("Menção = II");
    
} else {
    
    console.log("Algo deu errado")
}
}
}
