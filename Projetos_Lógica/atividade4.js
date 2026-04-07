// Menu de estoque (If/Else)
let op = parseFloat(prompt("Digite a opção que deseja efetuar:\n 1 - Listar produtos (crescente) \n 2 - Listar produtos (decrescente)\n 3 - Buscar produto \n 4 - Adicionar produto \n 5 - Remover produto\n 6 - Adicinar novo estoque\n 7 - Sair\n :"));

let estoque = Array();
estoque.push('Cruze','Onix','Corsa','Tracker','Camaro','Astra','Vectra','Classic','Opala')

if (op==1){
    console.log("Temos o total de ",estoque.length, " produtos no estoque.")
    console.log(estoque.sort());
} else if (op==2){
    console.log("Temos o total de ",estoque.length, " produtos no estoque.")
    estoque.sort()
    estoque.reverse()
    console.log(estoque);
} else if (op==3){
    let pd = prompt("Nome do produto que deseja buscar: ");
    let index = estoque.indexOf(pd)
    if (index!== -1){
        console.log("Produto encontrado")
    } else {
        console.log("Produto não encontrado")
    }
} else if(op==4){
    console.log("Temos o total de ",estoque.length, " produtos no estoque.")
    console.log(estoque.sort())
    let pd = prompt("Digite o nome do produto que deseja adicionar ao estoque: ")
    estoque.push(pd);
    console.log("Produto adicionado com sucesso.");
    console.log("Temos o total de ",estoque.length, " produtos no estoque.")
    console.log(estoque);
    let op2 = prompt("Deseja adicionar mais um produto?\n 1- Sim \n 2- Não \n:")
        if (op2==1 && estoque.length < 10){
            let pd = prompt("Digite o nome do produto que deseja adicionar ao estoque: ")
        estoque.push(pd);
        console.log("Produto adicionado com sucesso.");
        console.log("Temos o total de ",estoque.length, " produtos no estoque.")
        console.log(estoque);
        } else {
        console.log("Temos o total de ",estoque.length, " produtos no estoque. Estoque está cheio")
        console.log(estoque);
        }
} else if(op==5) {
    console.log("Temos o total de ",estoque.length, " produtos no estoque.")
    console.log(estoque)
    let pd = prompt("Digite o nome do produto que deseja remover do estoque: ");
    let index = estoque.indexOf(pd)
    if (index!== -1){
        estoque.splice(index,1)
        console.log("Item removido com sucesso")
        console.log("Temos o total de ",estoque.length, " produtos no estoque.")
        console.log(estoque);
    } else {
        console.log("Produto não encontrado")
    }
}else if(op==6){
  let estoque2 = Array('Argo','Cronos','Uno','Toro','Palio')
  let estf = estoque.concat(estoque2) 
  estf.sort()
  console.log(estf)
} else if (op==7){
    console.log("Obrigado e volte sempre")
} else {
    console.log("Valor inválido, tente novamente")
}
