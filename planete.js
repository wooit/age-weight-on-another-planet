
//let planetes_S = {"Terre" : 365.25, "Mercure" : 0.2408467, "Vénus" : 0.61519726, "Mars" : 1.8808158, "Jupiter" : 11.862615, "Saturne" : 29.447498, "Uranus" : 84.016846, "Neptune": 164.79132, "Pluton" : 258.59};
let planetes_A = {"Terre" : 1, "Mercure" : 4.149141753, "Vénus" : 1.624388073, "Mars" : 0.531914894, "Jupiter" : 0.084317032, "Saturne" : 0.033967391, "Uranus" : 0.011903345, "Neptune": 0.006068329, "Pluton" : 0.003867126};
let secondes_A = 31557600; // Une année en secondes sur terre
let result = 0;
let poids_P = {"Terre" : 1, "Mercure" : 3.72, "Vénus" : 8.85, "Mars" : 3.72, "Jupiter" : 24.8, "Saturne" : 10.5, "Uranus" : 9, "Neptune": 11, "Pluton" : 0.8};
let pesanteurTerre = 9.81;
// evenement click qui appelle la fonction calcul_age grâce a l'id="valider" du button valider
document.getElementById("valider").addEventListener("click",function calcul_age(){
let age = document.getElementById("age").value;
let choix = document.getElementById("choix").value;
if(age == 'pizza'){
    let result2="";
    result = '<img src="img/dog.gif" id="dog" alt="dog">';
    document.getElementById("result2").innerHTML = "on s'en fout, les pizzas c'est la vie!";
    document.getElementById("result").innerHTML = result;
} else if(age > 999){
        for (i in planetes_A){ // i itère sur les keys de mon tableau associatif
            if(choix == i){
                result = (age/secondes_A)*planetes_A[i];
                document.getElementById("result").innerHTML = "Votre age sur la planète " + i + " est de : " + result.toFixed(2) + " ans";
            }
        }
    }
    else if (age < 999){
        for (j in planetes_A){
            if(choix == j){
                result = age*planetes_A[j];
                console.log(result);
                document.getElementById("result").innerHTML = "Votre age sur la planète " + j + " est de : " + result.toFixed(2) + " ans";
            }
        }
    }
});
document.getElementById("valider2").addEventListener("click",function calcul_poids(){
    let poids = document.getElementById("poids").value;
    let choix2 = document.getElementById("choix2").value;
        for (j in poids_P){
            if(choix2 == j){
                resultPoids = (poids *poids_P[j])/pesanteurTerre ;
                document.getElementById("resultPoids").innerHTML = "Votre poids sur la planète " + j + " est de : " + resultPoids.toFixed(2) + " kg";
            }
        }
    }
);
// evenement click qui efface le contenu des entrées utilisateur via le button effacer
document.getElementById("reset").addEventListener("click",function(){
    document.getElementById("result").innerHTML="En attente de votre validation";
    document.getElementById("result2").innerHTML="";
    document.getElementById("age").value="";
    document.getElementById("choix").value="";
});
document.getElementById("reset2").addEventListener("click",function(){
    document.getElementById("resultPoids").innerHTML="En attente de votre validation";
    document.getElementById("poids").value="";
    document.getElementById("choix2").value="";
});
