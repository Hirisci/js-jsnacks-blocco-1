// Snack 8

// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari




const listNum=[1,23,132,56,4,8,7,98,5,2,32,54,4,58,12];
let somma = 0;

for (let i = 0; i < listNum.length; i++) {
    
    if(i%2===1){
        somma += listNum[i]
    }
    
}

console.log(somma)