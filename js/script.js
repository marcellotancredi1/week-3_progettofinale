
var numero = "";
var operatore1  = "";
var operatore2 = "" ;
var operazione = "" ;

function definisciNumero(valore) {
    numero = numero+""+valore; 
    scrivi(numero);
}


//PULSANTI
function numeroCalc1() {
    let numero1 = document.getElementById('numero1').value;
    document.getElementById('numero1').value;
/*     numero = numero+""+numero1; 
    scrivi(numero); */
    definisciNumero (numero1);
}

function numeroCalc2() {
    let numero2 = document.getElementById('numero2').value;
    document.getElementById('numero2').value;
/*     numero = numero+""+numero2; 
    scrivi(numero); */
    definisciNumero (numero2);

}

function numeroCalc3() {
    let numero3 = document.getElementById('numero3').value;
    document.getElementById('numero3').value;
/*     numero = numero+""+numero3; 
    scrivi(numero); */
    definisciNumero (numero3);

}

function numeroCalc4() {
    let numero4 = document.getElementById('numero4').value;
    document.getElementById('numero4').value;
/*     numero = numero+""+numero4; 
    scrivi(numero); */
    definisciNumero (numero4);

}

function numeroCalc5() {
    let numero5 = document.getElementById('numero5').value;
    document.getElementById('numero5').value;
/*     numero = numero+""+numero5; 
    scrivi(numero); */
    definisciNumero (numero5);

}

function numeroCalc6() {
    let numero6 = document.getElementById('numero6').value;
    document.getElementById('numero6').value;
/*     numero = numero+""+numero6; 
    scrivi(numero); */
    definisciNumero (numero6);

}

function numeroCalc7() {
    let numero7 = document.getElementById('numero7').value;
    document.getElementById('numero7').value;
/*     numero = numero+""+numero7; 
    scrivi(numero); */
    definisciNumero (numero7);

}

function numeroCalc8() {
    let numero8 = document.getElementById('numero8').value;
    document.getElementById('numero8').value;
/*     numero = numero+""+numero8; 
    scrivi(numero); */
    definisciNumero (numero8);

}

function numeroCalc9() {
    let numero9 = document.getElementById('numero9').value;
    document.getElementById('numero9').value;
/*     numero = numero+""+numero9; 
    scrivi(numero); */
    definisciNumero (numero9);

}

function numeroCalc0() {
    let numero0 = document.getElementById('numero0').value;
    document.getElementById('numero0').value;
/*     numero = numero+""+numero0; 
    scrivi(numero); */
    definisciNumero (numero0);

}

function numeroCalcPunto() {
    let numeroPunto = document.getElementById('numeroPunto').value;
    document.getElementById('numeroPunto').value;
    scrivi(numeroPunto);
    numero = numero+""+numeroPunto; 
    scrivi(numero);
}

//PULSANTI / OPERAZIONI
function divisione() {
    let divisione = document.getElementById('divisione').value;
    document.getElementById('divisione').value;
    scrivi(divisione);
    operatore1 = numero;
    numero = "";
    operazione = "/";   
}

function moltiplicazione() {
    let moltiplicazione = document.getElementById('moltiplicazione').value;
    document.getElementById('moltiplicazione').value;
    scrivi(moltiplicazione);
    operatore1 = numero;
    numero = "";
    operazione = "*";
}

function sottrazione() {
    let sottrazione = document.getElementById('sottrazione').value;
    document.getElementById('sottrazione').value;
    scrivi(sottrazione);
    operatore1 = numero;
    numero = "";
    operazione = "-";
}

function somma() {
    let somma = document.getElementById('somma').value;
    document.getElementById('somma').value;
    scrivi(somma);
    operatore1 = numero;
    numero = "";
    operazione = "+";
}

function uguale() {
    let uguale = document.getElementById('uguale').value;
    document.getElementById('uguale').value;
    scrivi(uguale);
    operatore2 = numero;
    numero = "";
    if (operazione=="+") {
        numero = parseInt(operatore1) + parseInt(operatore2);
    }
    if (operazione=="-") {
        numero = parseInt(operatore1) - parseInt(operatore2);
    }
    if (operazione=="*") {
        numero = parseInt(operatore1) * parseInt(operatore2);
    }
    if (operazione=="/") {
        numero = parseInt(operatore1) / parseInt(operatore2);
    }

    scrivi(numero);
   // numero = 0;
} 

function cancella() {
    /* let cancella = document.getElementById('cancella').value;
    document.getElementById('cancella').value;
    scrivi(cancella); */
    numero = "";
    operatore1  = "";
    operatore2 = "" ;
    operazione = "" ;
    scrivi(0);
}


//STAMPA
function scrivi(numero1) {
    document.getElementById('risultato').innerHTML = numero1; 
}

function scrivi(numero2) {
    document.getElementById('risultato').innerHTML = numero2; 
}

function scrivi(numero3) {
    document.getElementById('risultato').innerHTML = numero3; 
}

function scrivi(numero4) {
    document.getElementById('risultato').innerHTML = numero4; 
}

function scrivi(numero5) {
    document.getElementById('risultato').innerHTML = numero5; 
}

function scrivi(numero6) {
    document.getElementById('risultato').innerHTML = numero6; 
}

function scrivi(numero7) {
    document.getElementById('risultato').innerHTML = numero7; 
}

function scrivi(numero8) {
    document.getElementById('risultato').innerHTML = numero8; 
}

function scrivi(numero9) {
    document.getElementById('risultato').innerHTML = numero9; 
}

function scrivi(numero0) {
    document.getElementById('risultato').innerHTML = numero0; 
}

function scrivi(numeroPunto) {
    document.getElementById('risultato').innerHTML = numeroPunto; 
}

//STAMPA / OPERAZIONI
function scrivi(divisione) {
    document.getElementById('risultato').innerHTML = divisione; 
}

function scrivi(moltiplicazione) {
    document.getElementById('risultato').innerHTML = moltiplicazione; 
}

function scrivi(sottrazione) {
    document.getElementById('risultato').innerHTML = sottrazione; 
}

function scrivi(somma) {
    document.getElementById('risultato').innerHTML = somma.value; 
}

function scrivi(uguale) {
    document.getElementById('risultato').innerHTML = uguale; 
}

function scrivi(cancella) {
    document.getElementById('risultato').innerHTML = cancella; 
}

function scrivi(operazioni) {
    document.getElementById('risultato').innerHTML = operazioni; 
}

