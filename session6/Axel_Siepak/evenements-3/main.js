/* LES ÉVÉNEMENTS */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 3 sur les événements");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button du HTML.

var button = document.getElementsByTagName("button")[0];




// ------ TODO 2 ------
// Créer la fonction qui sera appelée dans le TODO3.
// Elle devra modifier le texte du bouton par un nombre aléatoire.
// Pour obtenir un nombre aléatoire, utiliser Math.random().

function aleatoire() {
    var num = Math.random() * 100;
    button.innerHTML = num;
}



// ------ TODO 3 ------
// Attacher un événement "click" sur le bouton, et appeler la fonction lors du clic.

button.addEventListener("click", aleatoire);

// Bonus

var paragraphColor = document.getElementsByClassName('p');

function changePBG() {

    paragraphColor.style.background-color = "red";
}


