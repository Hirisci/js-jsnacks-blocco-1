// Snack 9 (Bonus)

// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.



const listNum2 = [1,2,3,4,5,6,7,8,9,10];
const listNum1 = [1,2,3];
let elementEmpty= listNum1.length - listNum2.length;

if(elementEmpty>0){
    for(let i = 0 ; i<elementEmpty; i++){
        listNum2.push(Math.floor(Math.random()*10));
    }
} else {
    for(let i = 0 ; i<(elementEmpty*-1); i++){
        listNum1.push(Math.floor(Math.random()*10));
    }
}

console.log(listNum1,listNum2)



