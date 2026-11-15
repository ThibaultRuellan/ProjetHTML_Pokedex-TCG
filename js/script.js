const formulaire = document.getElementById("filtres");

if (formulaire) {
    const cartes = document.querySelectorAll(".carte");
    const recherche = document.getElementById("recherche");
    const type = document.getElementById("type");
    const selection = document.getElementById("selection-cartes");
    const totalCollection = document.getElementById("total-collection");
    const sectionsCartes = document.querySelectorAll("#paldea, #catalogue-origine, #dresseurs-energies");
    const maCollection = document.getElementById("ma-collection");
    const compteur = document.getElementById("compteur");
    const stockage = document.getElementById("stockage");
    const cleCollection = "pokedex-tcg-collection";
    let collection = [];

    // Le site reste utilisable si le navigateur bloque le stockage.
    function signalerStockage() {
        stockage.textContent = "La collection est disponible sur cette page, mais sa sauvegarde est inaccessible.";
        stockage.hidden = false;
    }

    try {
        const sauvegarde = JSON.parse(localStorage.getItem(cleCollection));
        if (Array.isArray(sauvegarde)) {
            collection = sauvegarde;
        }
    } catch (erreur) {
        signalerStockage();
    }

    // Une recherche sans accent retrouve aussi les noms accentués.
    function normaliser(texte) {
        return texte.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function filtrerCartes() {
        const mot = normaliser(recherche.value.trim());
        let nombre = 0;
        let nombreCollection = 0;

        cartes.forEach(function (carte) {
            const bonNom = normaliser(carte.dataset.nom).includes(mot);
            const bonType = type.value === "" || type.value === carte.dataset.type;
            const possedee = collection.includes(carte.dataset.id);

            const bonneSelection = selection.value === "" || selection.value === carte.dataset.selection;
            if (possedee) {
                nombreCollection++;
            }

            if (bonNom && bonType && bonneSelection && (!maCollection.checked || possedee)) {
                carte.hidden = false;
                nombre++;
            } else {
                carte.hidden = true;
            }
        });

        sectionsCartes.forEach(function (section) {
            section.hidden = !section.querySelector(".carte:not([hidden])");
        });
        totalCollection.textContent = "Ma collection : " + nombreCollection + " / " + cartes.length;
        totalCollection.hidden = false;

        if (nombre === 0) {
            compteur.textContent = "Aucune carte trouvée.";
        } else if (nombre === 1) {
            compteur.textContent = "1 carte affichée";
        } else {
            compteur.textContent = nombre + " cartes affichées";
        }
    }

    function afficherBouton(bouton, possedee) {
        bouton.setAttribute("aria-pressed", possedee);
        bouton.textContent = possedee ? "Retirer de ma collection" : "Ajouter à ma collection";
    }

    cartes.forEach(function (carte) {
        const bouton = carte.querySelector(".collection");
        const id = carte.dataset.id;
        afficherBouton(bouton, collection.includes(id));
        bouton.hidden = false;

        bouton.addEventListener("click", function () {
            const position = collection.indexOf(id);
            if (position === -1) {
                collection.push(id);
            } else {
                collection.splice(position, 1);
            }

            try {
                localStorage.setItem(cleCollection, JSON.stringify(collection));
            } catch (erreur) {
                signalerStockage();
            }

            afficherBouton(bouton, collection.includes(id));
            filtrerCartes();
            if (carte.hidden) {
                maCollection.focus();
            }
        });
    });

    formulaire.addEventListener("submit", function (event) {
        event.preventDefault();
        filtrerCartes();
    });
    recherche.addEventListener("input", filtrerCartes);
    type.addEventListener("change", filtrerCartes);
    selection.addEventListener("change", filtrerCartes);
    maCollection.addEventListener("change", filtrerCartes);
    filtrerCartes();
    formulaire.hidden = false;
}

const choixTournoi = document.getElementById("choix-tournoi");

if (choixTournoi) {
    const blocs = document.querySelectorAll(".matchs");

    function filtrerTournois() {
        blocs.forEach(function (bloc) {
            bloc.hidden = choixTournoi.value !== "" && bloc.dataset.tournoi !== choixTournoi.value;
        });
    }

    function suivreAncre() {
        const cible = document.getElementById(window.location.hash.slice(1));
        if (cible && cible.dataset.tournoi) {
            choixTournoi.value = cible.dataset.tournoi;
            filtrerTournois();
            cible.scrollIntoView();
        }
    }

    document.querySelectorAll("table a").forEach(function (lien) {
        lien.addEventListener("click", function () {
            const cible = document.getElementById(lien.hash.slice(1));
            choixTournoi.value = cible.dataset.tournoi;
            filtrerTournois();
        });
    });

    choixTournoi.addEventListener("change", filtrerTournois);
    window.addEventListener("hashchange", suivreAncre);
    filtrerTournois();
    suivreAncre();
    document.getElementById("filtre-tournois").hidden = false;
}
