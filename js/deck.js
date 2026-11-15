const atelierDeck = document.getElementById("atelier-deck");
const resultatDeck = document.getElementById("resultat-deck");

function verifierDeck(event) {
    event.preventDefault();

    const pokemon = Number(atelierDeck.elements["pokemon"].value);
    const dresseurs = Number(atelierDeck.elements["dresseurs"].value);
    const energies = Number(atelierDeck.elements["energies"].value);
    const total = pokemon + dresseurs + energies;

    if (total === 60) {
        resultatDeck.textContent = "60 cartes. Ton deck a le bon nombre de cartes.";
    } else if (total < 60) {
        resultatDeck.textContent = total + " cartes. Il en manque " + (60 - total) + ".";
    } else {
        resultatDeck.textContent = total + " cartes. Il faut en retirer " + (total - 60) + ".";
    }
}

atelierDeck.addEventListener("submit", verifierDeck);
atelierDeck.hidden = false;
