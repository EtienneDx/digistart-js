/* LES FONCTIONS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les fonctions');

// ------ TODO 1 ------ 
// TODO: ÉTAPE 1
// Créer une fonction sayHello qui imprime "Bonjour" dans la console

function sayHello() {
    console.log("bonjour");
    console.log("comment ça va?");
}


// TODO: ÉTAPE 2
// L'exécuter

sayHello(); 


// ------ TODO 2 ------ 
// TODO: ÉTAPE 1
// Créer une fonction sayHelloName qui prend en paramètre le nom d'une personne, et
// qui imprime "Bonjour " suivi du nom de la personne dans la console.

function sayHelloName(name) {
    console.log("Bonjour " + name);
};


// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.
sayHelloName("Guillaume"); 



// ------ TODO 3 ------ 
// TODO: ÉTAPE 1
// Créer une fonction addTwo qui prend en paramètre un nombre et qui
// retourne ce nombre + 2
function addTwo(number){
    return number + 2;
};



// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.
console.log(addTwo(2));

var result = addTwo(4);

console.log(result);



// ------ TODO 4 ------ 
// TODO: ÉTAPE 1
// Créer une fonction displaySum qui prend en paramètre deux nombres entiers
// et qui affiche la somme de ces deux nombres dans la console.

function displaySum( number1 , number2){
    return number1 + number2;
};



// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.

var result = displaySum(4, 6);
console.log(result);


var stringTest = "Hello comment ça va?";

console.log(stringTest.length);

console.log(stringTest.toUpperCase());
