// imposto una variabile per tutti gl'elementi che mi servono
var generateButton = document.getElementById("generate-button");
var checkout = document.getElementById("checkout");
var slider = document.getElementById("slider");
var ticketGenerator = document.getElementById("ticket-generator");

// Al click del bottone "genera"....
generateButton.addEventListener("click", function () {
    // Aggiungo la classe left per mostrare il carrello all'utente
    checkout.className = "left";
    // Aggiungo la classe darker per oscurare il resto della schermata
    slider.className = slider.classList + " darker";
    ticketGenerator.className = ticketGenerator.classList + " darker";

    var prezzoStandard = 1000;

    //Dichiaro delle varibili contententi il valore dei miei input
    var userName = document.getElementById("nome").value;
    var userTime = parseInt(document.getElementById("anni-residenza").value);
    var userAge = document.getElementById("age-user").value;
    var userClass = parseInt(document.getElementById("class-user").value);
    var userOffer = "Prezzo standard";


    // Dichiaro il prezzo finale con la sua formula
    var finalPrice = prezzoStandard * userTime * userClass;

    if (userAge == "minorenne"){
        userOffer = "Sconto minorenni";
        finalPrice * 0.8;
    } else if (userAge == "over") {
        userOffer = "Sconto over 65";
        finalPrice * 0.6;
    }

    var userCode = Math.floor(Math.random() * (100000 - 90000) ) + 90000;
    var userWagon = Math.floor(Math.random() * (1002 - 1) ) + 1;

    document.getElementById("user-name").innerHTML = userName;
    document.getElementById("user-code").innerHTML = userCode;
    document.getElementById("user-wagon").innerHTML = userWagon;
    document.getElementById("user-offer").innerHTML = userOffer;

    document.getElementById("final-price").innerHTML = finalPrice;

});
