var punteggio = 0;
var im = 0;
var ima;
var r = false;
var numero;

//function main
function Risultato() {
    IM();
    Risposta();
    Reaction();
    Stampa();
}
//check if the correct answer has been selected (answer id must be G + answer number)
function Risposta() {
    for (numero = 1; numero < 4; numero++) {
        var ID = "G" + numero;
        var r = document.getElementById(ID).checked;
        if (r == true) {
            punteggio++;
        }
    }
}

//based on the score obtained, the "Reaction" function changes the image of the img tag contained in the ma variable
function Reaction() {
    switch(punteggio) {
        case 0:
            ma.src="https://www.pngkit.com/png/full/287-2870510_disappointed-anime-face-png-disappointed-anime-face-anime.png";
            break;
        case 1:
            ma.src="https://i.imgur.com/7DgggYC.jpg";
            break;  
        case 2:
            ma.src="https://i.redd.it/hvpt38mn4vd11.jpg";
            break;  
        case 3:
            ma.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZeku6nG52b_tK2Ir5_iXWf0iwnt3MzS2nQ&usqp=CAU";
            break; 
    }
}

//the "IM" function creates img tags in the html document only if the variable im is 0, so only once
function IM() {
    if (im < 1) {
        ma = document.createElement("IMG");
        ma.src="";
        ma.height="300";
        ma.width="300";
        document.body.appendChild(ma);
        im = 1;
    }
}

//the function "Stampa" modify the paragraph with id "risposta" with the score obtained and finally reset it
function Stampa() {
    document.getElementById("risposta").innerHTML = "Risultato: " + punteggio;
    punteggio = 0;
}

//the function passed two parameters which would be the ids of the other two inputs, makes sure that clicking on one answer the others are de-selected
function to_1(t1, t2) {
    document.getElementById(t1).checked = false;
    document.getElementById(t2).checked = false;
}