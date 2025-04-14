console.log("Hello there !")

// Début de l'exercice
// Obenir un choix aléatoire de l'ordinateur
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "pierre";
    } else if (computerChoice === 1) {
        return "feuille";
    } else {
        return "ciseaux";
    }
}

// Obtenir un choix de l'utilisateur
function getHumanChoice() {
    let humanChoice = prompt("Choisissez entre pierre, feuille et ciseaux !").toLowerCase();
    if (!["pierre", "feuille", "ciseaux"].includes(humanChoice)) {
        alert("Vous ne pouvez choisir que pierre, feuille ou ciseaux !");
        return getHumanChoice();
    }
    return humanChoice;
}

// Initialiser les scores
let humanScore = 0;
let computerScore = 0;

// Jouer un tour
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Égalité !");
    } else if ((humanChoice === "pierre" && computerChoice === "ciseaux")
        || (humanChoice === "ciseaux" && computerChoice === "feuille")
        || (humanChoice === "feuille" && computerChoice === "pierre")) {
        console.log("Gagné !");
    } else {
        console.log("Perdu !");
    }
    // Suivi du score
    if ((humanChoice === "pierre" && computerChoice === "ciseaux")
        || (humanChoice === "feuille" && computerChoice === "pierre")
        || (humanChoice === "ciseaux" && computerChoice === "feuille")) {
        humanScore++;
    } else if ((computerChoice === "pierre" && humanChoice === "ciseaux")
        || (computerChoice === "feuille" && humanChoice === "pierre")
        || (computerChoice === "ciseaux" && humanChoice === "feuille")) {
        computerScore++;
    }
    console.log(`Score : Vous - ${humanScore} / Ordinateur - ${computerScore}`);
}

// Suivi de la partie
function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`Tour ${round}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Fin de la partie !");
    console.log(`Score final : Vous - ${humanScore} / Ordinateur - ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Bravo, vous avez gagné la partie !");
    } else if (computerScore > humanScore) {
        console.log("Dommage, vous avez perdu la partie !");
    } else {
        console.log("Égalité !");
    }
}

// Lancement de la partie
playGame();