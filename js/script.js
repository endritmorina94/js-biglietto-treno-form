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


});
