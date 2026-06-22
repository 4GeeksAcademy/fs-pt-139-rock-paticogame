//write your code here


function juego(userChoice) {
  const opcionUsuario = userChoice
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];

  const opcionComputadora =
    choices[Math.floor(Math.random() * choices.length)];

  const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"],
  };

  let resultado;

  if (opcionUsuario === opcionComputadora) { resultado = "Draw"; }
  else if (rules[opcionUsuario].includes(opcionComputadora)) { resultado = "You win"; }
  else { resultado = "You lose"; }

  console.log("Usuario eligio: " + opcionUsuario);
  console.log("Computadora eligio: " + opcionComputadora);
  console.log(resultado);
};

juego("scissors");