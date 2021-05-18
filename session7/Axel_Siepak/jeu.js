function play() {
    var nbr = Math.floor(Math.random() * 100);
    var ans = 0;

    while (nbr != ans) {

        ans = parseInt(prompt('Plus ou Moins/nVeillez rentrer un chiffre (0-100)'));    

        if (nbr > ans) {
            alert("plus haut");
        }
        else if (nbr < ans) {
            alert("plus bas");
        }
    }
    alert('le nombre était bien' + nbr);
}
