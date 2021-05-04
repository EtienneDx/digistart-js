/* LES BOUCLES WHILE */
console.log('Bienvenue dans la console JavaScript');
console.log('Vous êtes dans les exercices sur les boucles while');

// TODO: ÉTAPE 1
// À l'aide d'une boucle while, afficher dans la console les nombres
// de 1 à 10 compris.
var integer = 1;

while (integer <= 10){
    console.log(integer);
    integer++;
}

// TODO: ÉTAPE 2
// Avec une autre boucle while, afficher les mêmes nombres dans la
// console, mais dans l'ordre inverse.

integer = 10;

while (integer > 0 ){
    console.log(integer);
    integer--;
}

var nombres = [45, 2, 9, 12, 44, 29, 11, 3];

// TODO: ÉTAPE 3
// À l'aide d'une boucle while, afficher les valeurs du tableau `nombres`
// dans la console jusqu'à la valeur égale à 29.
var i = 0;

while (nombres[i] != 29){
    console.log(nombres[i]);
    i++;
}
console.log("TODO: ÉTAPE 4");
// TODO: ÉTAPE 4
// Avec une autre boucle while, afficher les valeurs du tableau `nombres`
// tant qu'elles sont inférieures à 50.
i = 0;
while (nombres[i] < 50 ){
    console.log(nombres[i]);
    i++;
}

var prenoms = ['Ali', 'Nora', 'Jean', 'Carole', 'Ibrahim', 'Joseph'];

console.log("TODO: ÉTAPE 5");
// TODO: ÉTAPE 5
// À l'aide d'une boucle while, afficher les valeurs du tableau `prenoms`
// tant que leur longueur ne dépasse pas 5 caractères.
i = 0;
while (prenoms[i].length <= 5) {
    console.log(prenoms[i]);
    i++;
}

console.log("TODO: ÉTAPE 6");
// TODO: ÉTAPE 6
// Avec une autre boucle while, afficher les valeurs du tableau `prenoms`
// tant qu'elles contiennent la lettre "a" ou "A".

i = 0;
while (prenoms[i]) {
    if (prenoms[i].includes("a") || prenoms[i].includes("A")) {
        console.log(prenoms[i]);
    }
    i++;
}

//while ((prenoms[i] == 'a') || (prenoms[i] == 'A'))
// TODO: ÉTAPE 7a
// Avec une autre boucle while, utiliser la méthode pop() sur le tableau
// `prenoms` pour retirer une valeur du tableau et l'afficher dans la
// console tant que le tableau n'est pas vide.
// Documentation de la méthode Array.prototype.pop() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop

console.log("TODO: ÉTAPE 7");
var popReturn = "";

while (popReturn != undefined) {
    popReturn = prenoms.pop();
    console.log(popReturn);
}

// TODO: ÉTAPE 8
// À l'aide d'une boucle while, afficher le résultat de la fonction
// Date.now() dans la console tant qu'une variable aléatoire est inférieure
// à 50. Utiliser la fonction Math.random() pour définir cette variable
// aléatoire à chaque itération de la boucle.
// Documentation de la fonction Date.now() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/now
// Documentation de la fonction Math.random() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random

var random = Math.random() * 100;
//console.log(random);

while (random < 50) {
    //console.log(Date.now());
    console.log(random);
    random = Math.random() * 100;
}

console.log(random);