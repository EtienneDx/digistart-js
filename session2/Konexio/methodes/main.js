/* LES MÉTHODES */
console.log("Bienvenue dans la console javascript");
console.log("Vous êtes dans les exercices sur les méthodes");

// ------ TODO 1 ------ 
// TODO: ÉTAPE 1
// Écrire une variable du nom de votre choix, et de valeur de type String.

var test = "toute la longueur de cette phrase"; 
console.log(test.length);

// TODO: ÉTAPE 2
// Afficher sa longueur dans la console grâce à la propriété "length".




// ------ TODO 2 ------ 
// TODO: ÉTAPE 1
// Ajouter un espace au début ou à la fin de votre string.

test = test + " ";
//test += " ";



// TODO: ÉTAPE 2
// Afficher sa longueur dans la console, et observez la différence.

console.log(test.length); //34


// ------ TODO 3 ------ 
// TODO: ÉTAPE 1
// Écrire une nouvelle variable du nom de votre choix, et de valeur de type String.

var myName = "Axel"; 


// TODO: ÉTAPE 2
// Afficher dans la console sa valeur en MAJUSCULES grâce à la méthode "toUpperCase".

console.log(myName.toUpperCase());



// ------ TODO 4 ------ 
// TODO: ÉTAPE 1
// Créer une fonction convertToUppercase qui prend en paramètre une chaîne
// de caractères et qui la renvoie en majuscule grâce à la méthode "toUpperCase".
function convertToUppercase(str){
    return str.toUpperCase();

}




// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.
result = convertToUppercase("le ciel est bleu");
console.log(result);


var stringTest = 'j ai envie de manger!';

console.log(stringTest.substring(5,10));

var scoreBarca = 2;
var scoreReal = 1;
var scoreReal2;

console.log(scoreBarca > scoreReal); //true
console.log(scoreBarca < scoreReal); //false
console.log(scoreBarca == scoreReal); //false
console.log(scoreBarca == 42); //false

var result = Boolean(scoreBarca > scoreReal);
console.log(result);

console.log(Boolean(scoreReal));
console.log(Boolean(scoreReal2));