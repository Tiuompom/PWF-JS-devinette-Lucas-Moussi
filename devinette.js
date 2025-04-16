alert("Bienvenue au jeu de devinette de nombre !");

let min = 1;
let max = 100;

const nombreMystere = Math.floor(Math.random() * max) + min; // Nombre entre 1 et 100
let tentative = 0;
let deviner = false;

while (!deviner) {
  const reponse = prompt(`Devinez le nombre mystère entre ${min} et ${max} :`);
  tentative++;

  if (reponse === null) {
    alert("Jeu annulé. Merci d'avoir joué !");
    break;
  }

  // On récupère la valeur en tant que nombre
  const nombre = parseFloat(reponse);

  if (isNaN(nombre)) {
    alert("Petit malin, ce n'est pas un nombre valide. Tu viens de gacher un essai");
  } else if (!Number.isInteger(nombre) || nombre < min || nombre > max) {
    // Vérification si le nombre n'est pas entier, négatif ou en dehors de l'intervalle [min, max]
    alert("Petit malin, ce n'est pas un nombre valide. Tu viens de gacher un essai.");
  } else if (nombre < nombreMystere) {
    alert("C'est plus !");
  } else if (nombre > nombreMystere) {
    alert("C'est moins !");
  } else {
    alert(`Félicitations ! Vous avez trouvé le nombre ${nombreMystere} en ${tentative} tentative(s).`);
    deviner = true;
  }
}


