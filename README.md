# PokéDex TCG

**Projet de programmation web — Thibault Ruellan**

PokéDex TCG est un site consacré au jeu de cartes Pokémon. J’ai repris le thème de mon projet de base de données, dans lequel j’avais réuni des cartes et des résultats de tournois. Pour le site, j’ai voulu qu’on puisse explorer ces données : retrouver une carte, comparer plusieurs Pokémon, constituer sa collection et comprendre comment les cartes s’utilisent pendant une partie.

## Le catalogue et la collection

Le catalogue réunit **42 fiches**. Il associe les cartes de mon projet d’origine à une sélection de Pokémon de Paldea et à six cartes Dresseur et Énergie. Chaque fiche présente les informations utiles selon la carte : les points de vie et l’évolution d’un Pokémon, l’effet d’une carte Dresseur ou le type d’Énergie fourni.

Les filtres peuvent se combiner. On peut par exemple sélectionner **Découverte de Paldea** et le type **Feu** pour retrouver Chochodile, Crocogril et Flâmigator. Les cartes ajoutées à la collection restent enregistrées dans le navigateur et peuvent être affichées seules.

## Découvrir le jeu

La page d’accueil présente les trois catégories de cartes à partir d’une situation de jeu. Une Faiblo Ball permet de chercher Chochodile et de le placer sur le Banc. Une fois Chochodile en position de Pokémon Actif, l’exemple montre les Énergies à réunir pour utiliser son attaque à 50 dégâts. Un mini-quiz permet ensuite de vérifier ce qu’on a retenu.

## Tournois et atelier deck

La page **Tournois** présente six événements fictifs et les résultats de leurs 24 matchs. On peut sélectionner un tournoi pour retrouver ses résultats.

L’atelier deck permet de tester une répartition entre cartes Pokémon, Dresseur et Énergie. Il calcule le total et indique combien de cartes ajouter ou retirer pour atteindre les 60 cartes d’un deck classique.

- **Sources** — Les références des cartes, des illustrations et des règles figurent sur la page [À propos](apropos.html).
