// Seleziona l'elemento dell'immagine
let paneImage = document.getElementById("paneImage");

// Visualizza l'immagine
paneImage.classList.remove("hidden");

// Nascondi l'immagine dopo 10 secondi
setTimeout(function() {
  paneImage.classList.add("hidden");
}, 10000); // 10000 millisecondi = 10 secondi

