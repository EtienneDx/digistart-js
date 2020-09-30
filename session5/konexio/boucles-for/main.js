/* LES BOUCLES FOR */
console.log('Bienvenue dans la console JavaScript');
console.log('Vous êtes dans les exercices sur les boucles for');

var nombres = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];

// TODO: ÉTAPE 1
// À l'aide d'une boucle for, afficher dans la console toutes les valeurs
// contenues dans le tableau `nombres`, une par une.

var i;

//for (i = 0; i < nombres.length; i++) {
//    console.log(nombres[i]);
//}

// TODO: ÉTAPE 2
// Avec une autre boucle for, afficher dans la console toutes les valeurs
// du tableau `nombres`, une par une, sauf les deux premières.

//for (i = 2; i < nombres.length; i++) {
//    console.log(nombres[i]);
//}
// TODO: ÉTAPE 3
// Avec une autre boucle for, afficher dans la console toutes les valeurs
// du tableau `nombres`, une par une, sauf les trois dernières.
//var end = nombres.length - 3;
//for (i = 0; i < end; i++) {
//    console.log(nombres[i]);
//}

// TODO: ÉTAPE 4
// Avec une autre boucle for, afficher dans la console toutes les valeurs
// du tableau `nombres`, une par une, mais en commençant par la dernière
// valeur et en terminant par la première.

var end = nombres.length - 1;
for (i = end; i >= 0 ; i--) {
    console.log(nombres[i]);
}

// TODO: ÉTAPE 5
// Avec une autre boucle for, afficher dans la console uniquement les
// valeurs du tableau `nombres` ayant un indice pair (0, 2, 4, etc.),
// une par une.

var prenoms = ['Ali', 'Nour', 'Jean', 'Carole', 'Ibrahim', 'Alma'];
end = prenoms.length;
for (i = 0; i < end ; i++) {
    if (i%2 > 0) {
        console.log(prenoms[i]);
    }
}

// TODO: ÉTAPE 6
// À l'aide d'une boucle for, afficher dans la console des messages
// qui saluent chaque prénom contenus dans le tableau `prenoms`.
// Par exemple : "Bonjour Joseph".

var end = prenoms.length;
for (i = 0; i < end ; i++) {
    console.log("Bonjour " + prenoms[i] + " !");
}
// TODO: ÉTAPE 7
// Avec une autre boucle for, afficher dans la console uniquement
// le premier prénom contenant plus de 4 lettres.

console.log("*****TODO: ÉTAPE 7******");

for (i = 0; i < end ; i++) {
    if (prenoms[i].length > 4) {
        console.log("Bonjour " + prenoms[i] + " !");
        break;
    }
}

// TODO: ÉTAPE 8
// Avec une autre boucle for, construire une nouvelle chaîne de
// caractères (string) qui contiendra tous les prénoms séparés par
// une virgule. Afficher cette nouvelle chaîne de caractères dans
// la console.

console.log("*****TODO: ÉTAPE 8******");

var comaPrenoms = "";

for (i = 0; i < end; i++) {
    var prenom = prenoms[i];
    comaPrenoms = comaPrenoms + prenom;
    if (i < end - 1) {
        comaPrenoms = comaPrenoms + ", ";
    }
}
console.log('comaPrenoms', comaPrenoms);

var a = [12, 47, 5, 450, 98, 100, 54, 2, 87, 9999];
var b = [3, 76, 1002, 31, 9, 340, 420, 90, -12, 1];

// TODO: ÉTAPE 9
// À l'aide d'une boucle for, parcourir les deux tableaux `a` et `b`,
// et pour chaque indice, placer la valeur la plus petite dans un
// nouveau tableau.

var minimums = [];

for (i = 0; i < a.length; i++) {
    var va = a[i];
    var vb = b[i];

    if (va < vb) {
        minimums.push(va);
    } else {
        minimums.push(vb);
    }
}
console.log(minimums);

// TODO: ÉTAPE 10
// Avec une autre boucle for, additionner les valeurs de `a` ayant un
// indice pair avec les valeurs de `b` ayant l'indice impair suivant.
// Placer ces résultats d'addition dans un nouveau tableau à afficher
// dans la console.
// Par exemple: a[0] + b[1], a[2] + b[3], etc.

var alternatedSum = 0;
for (i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
        // i est pair
        alternatedSum += a[i];
    } else {
        // i est impair
        alternatedSum += b[i];
    }
}

console.log(alternatedSum);
