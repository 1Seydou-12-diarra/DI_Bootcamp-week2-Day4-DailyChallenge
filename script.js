

let Mots = prompt("Veuillez entrer plusieurs mots");
let tableauMots = Mots.split(",");

function words(Mots) {
  let TailleMots = 0;
  for (let i = 0; i < tableauMots.length; i++) {
    if (TailleMots < tableauMots[i].length) {
      TailleMots = tableauMots[i].length;
    }
  }
  return TailleMots;
}
// Affiche les étoiles au dessus
console.log("*".repeat(words() + 4));

for (let i = 0; i < tableauMots.length; i++) {
  console.log(
    // Les étoiles encadrant les mots de l'utilisateur
    "* " + tableauMots[i] + " ".repeat(words() - tableauMots[i].length) + " *"
  );
}
// Affiche les étoiles à la fin du programme
console.log("*".repeat(words() + 4));





