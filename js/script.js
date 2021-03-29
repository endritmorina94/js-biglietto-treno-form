//Creiamo un finto biglietto del treno con:
//Nome passeggero
//Codice treno (numero casuale tra 90000 e 100000 escluso)
//Numero carrozza
//Prezzo calcolato (Il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.)
//Categoria selezionata dall'utente
//Se clicchiamo su Genera, la sezione col biglietto apparirà e sarà popolata coi dati del biglietto
//Se clicchiamo su annulla dobbiamo ripulire il form e nascondere la sezione col biglietto

//Imposto una variabile per tutti gl'elementi che mi servono
var generateButton = document.getElementById("generate-button");
var checkout = document.getElementById("checkout");
var slider = document.getElementById("slider");
var ticketGenerator = document.getElementById("ticket-generator");

//Al click del bottone "genera"....
generateButton.addEventListener("click", function () {
    //Aggiungo la classe left per mostrare il carrello all'utente
    checkout.className = "left";
    //Aggiungo la classe darker per oscurare il resto della schermata
    slider.className = slider.classList + " darker";
    ticketGenerator.className = ticketGenerator.classList + " darker";


    //Dichiaro delle varibili contententi il valore dei miei input
    var userName = document.getElementById("nome").value;
    var userKm = parseInt(document.getElementById("km-user").value);
    var userAge = document.getElementById("age-user").value;


    //Imposto il prezzo standard
    var prezzoStandard = 0.21;

    //Imposto l'offerta standard
    var userOffer = "Prezzo standard";


    //Dichiaro il prezzo finale con la sua formula
    var finalPrice = prezzoStandard * userKm;

    //Controllo se il passeggio è in una fascia d'età nella quale devo applicargli sconti
    if (userAge == "minorenne"){
        userOffer = "Sconto minorenni";
        finalPrice = finalPrice * 0.8;
    } else if (userAge == "over") {
        userOffer = "Sconto over 65";
        finalPrice = finalPrice * 0.6;
    }

    //Creo in modo randomico il numero del biglietto e della carrozza
    var userCode = Math.floor(Math.random() * (100000 - 90000) ) + 90000;
    var userWagon = Math.floor(Math.random() * (101 - 1) ) + 1;


    //Stampo nel carrello i dettagli del biglietto
    document.getElementById("user-name").innerHTML = userName;
    document.getElementById("user-code").innerHTML = userCode;
    document.getElementById("user-wagon").innerHTML = userWagon;
    document.getElementById("user-offer").innerHTML = userOffer;

    document.getElementById("final-price").innerHTML = finalPrice.toFixed(2) + "€";

});

//Indico il bottone annulla con una variabile
var cancelButton = document.getElementById("cancel-button");

//Quando il bottone annulla verrà cliccato...
cancelButton.addEventListener("click", function() {
    //Il carrello scompare
    checkout.className = "right";

    //Il resto si illumina di nuovo
    slider.classList.toggle("darker");
    ticketGenerator.classList.toggle("darker");

    //Resetto gli input
    document.getElementById("nome").value = "";
    document.getElementById("km-user").value = "";
    document.getElementById("age-user").value = "";
});
