

function play() {
    var nbr = Math.floor(Math.random() * 100);

    // TODO 1
    // créer une variable userNbr qui contient le nombre deviné par l'utilisateur
    var userNbr = 55;

    // TODO 2
    // créer une boucle while, avec comme condition que userNbr et nbr soit différents
    while(userNbr != nbr){
        // TODO 2.1 (dans le while)
        // En utilisant la fonction prompt, demander un nombre a l'utilisateur et stocker le résultat dans userNbr
        // /!\ N'oubliez pas de transformer la chaine de charactères en nombre avec parseInt
    
        userNbr = prompt("Quel est le nombre");
        userNbr = parseInt(userNbr);
        
        // TODO 2.2 (dans le while)
        // Dire a l'utilisateur si le nombre est plus grand ou plus petit que ce qu'il a entré
        if(nbr >userNbr){
        alert("le nombre plus grand");

        }
                 
        if(nbr <userNbr){
        alert("le nombre plus petit");
        }
             
                      
        
    }




    // TODO 3 (hors de la boucle)
    // Dire a l'utilisateur qu'il a trouvé
    


}

