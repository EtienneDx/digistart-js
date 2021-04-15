/* LES FONCTIONS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les fonctions');

// ------ TODO 1 ------ 
// TODO: ÉTAPE 1
// Créer une fonction sayHello qui imprime "Bonjour" dans la console

function sayHello() {
    console.log("Bonjour "); //Affiche Bonjour
}

// TODO: ÉTAPE 2
// L'exécuter

sayHello();

// ------ TODO 2 ------ 
// TODO: ÉTAPE 1
// Créer une fonction sayHelloName qui prend en paramètre le nom d'une personne, et
// qui imprime "Bonjour " suivi du nom de la personne dans la console.

function sayHelloName(name) {
  console.log('Bonjour ', name);
}

// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.

sayHelloName("Barnabé"); //Affiche Bonjour Barnebé

// ------ TODO 3 ------ 
// TODO: ÉTAPE 1
// Créer une fonction addTwo qui prend en paramètre un nombre et qui
// retourne ce nombre + 2

function addTwo(nombre) {
    return nombre + 2;
}

// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.

console.log(addTwo(98));  //Affiche 98

// tu peux afficher directement addTwo(98) dans le console log, ou bien via une var intermediaire

// ------ TODO 4 ------ 
// TODO: ÉTAPE 1
// Créer une fonction displaySum qui prend en paramètre deux nombres entiers
// et qui affiche la somme de ces deux nombres dans la console.

function displaySum(int1, int2) {
    
    console.log(int1 + int2);
}

// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.

displaySum(9, 10); // Affiche 19

