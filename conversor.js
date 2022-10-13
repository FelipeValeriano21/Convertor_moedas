var moedas = ['Real', 'Dolar', 'Euro', 'Libra'];
var valordolar = [0.19,1,0.97,1.12];
let tipo_moeda1;
let tipo_moeda2;
let cont1; 
let cont2; 



function calcular(){

for(var i = 0; i<moedas.length; i++){

console.log(moedas[i]);


}

}


function identifica_primeira(){

    let select = document.querySelector('#firstcoins');
    let atualiza1 = select.options[select.selectedIndex];

 
     tipo_moeda1 = atualiza1.text;

    console.log(tipo_moeda1);

    for(var i = 0; i<moedas.length; i++){

    if(tipo_moeda1 == moedas[i]){

     console.log("Foi o escolhido " + moedas[i])  

     cont1 = i; 
     console.log(cont1); 

    }
        
        
    }


    
}


function identifica_segunda(){

    let select = document.querySelector('#seccoins');
    let atualiza1 = select.options[select.selectedIndex];

    tipo_moeda2 = atualiza1.text;

    console.log(tipo_moeda2);

    for(var i = 0; i<moedas.length; i++){

    if(tipo_moeda2 == moedas[i]){

        console.log("Foi o escolhido " + moedas[i])  
   
        cont2 = i; 
        console.log(cont2); 
   
        calcular();
       }
           
           
       }

}

function calcular(){

    let input1 = document.querySelector("#quant1");
    let quant1 = input1.value;
    let aux; 

let valor2; 


aux = quant1*valordolar[cont1];

valor2 = aux/valordolar[cont2];

console.log(valor2);
console.log(quant1);

document.getElementById('resultado').innerText = "Reultado:" + quant1 + " na moeda " + moedas[cont1]  + " equivale a " + valor2 + " na moeda " + moedas[cont2] ; 


} 







