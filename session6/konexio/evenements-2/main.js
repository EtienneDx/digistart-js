

var button = document.getElementById("main");


// ------ TODO 2 ------
// Créer la fonction qui sera appelée dans le TODO3.
// Elle devra afficher dans la console "Le bouton a été cliqué",
// ainsi qu'une alerte "Click !".

function onClick(event) {
    console.log("Le bouton a été cliqué", event);
}


// ------ TODO 3 ------
// Attacher un événement "click" sur le bouton, et appeler la fonction lors du clic.

button.addEventListener("click", onClick);