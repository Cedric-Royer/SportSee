# SportSee Frontend

## Description
SportSee est une application de coaching sportif permettant aux utilisateurs de suivre leur activité physique, leurs performances, et leurs données nutritionnelles grâce à une interface utilisateur intuitive et des graphiques interactifs. Ce projet concerne le développement de la nouvelle page profil utilisateur avec React.

## Prérequis
Avant de démarrer le projet, assurez-vous d'avoir les éléments suivants :

- **Node.js** (version 14 ou supérieure) installé sur votre machine.
- **npm** ou **yarn** pour la gestion des dépendances.

## Backend
Le projet repose sur un backend micro-API dédié qui permet de récupérer les données utilisateur.  

- **Dépôt Backend** : [SportSee Backend Repository](https://github.com/OpenClassrooms-Student-Center/SportSee.git)
- **Endpoints disponibles** :  
  - `GET /user/:userId` : Informations principales sur un utilisateur.  
  - `GET /user/:userId/activity` : Activité journalière d'un utilisateur.  
  - `GET /user/:userId/average-sessions` : Sessions moyennes par jour.  
  - `GET /user/:userId/performance` : Performance utilisateur (énergie, endurance, etc.).  

Pour les détails d'installation et d'utilisation, veuillez consulter le [README du dépôt backend](https://github.com/OpenClassrooms-Student-Center/SportSee.git).

## Installation
1. Clonez le dépôt :
   ```bash
   git clone <lien-du-repository>
   ```
2. Accédez au dossier du projet :
   ```bash
   cd sportsee-frontend
   ```
3. Installez les dépendances :
   ```bash
   npm install
   # ou avec Yarn
   yarn install
   ```

## Scripts disponibles
Voici les scripts que vous pouvez exécuter pour gérer le projet :

- **Démarrer le serveur de développement** :
  ```bash
  npm run dev
  ```
  Lance l'application en mode développement à l'adresse [http://localhost:5173].(http://localhost:5173)

- **Construire le projet pour la production** :
  ```bash
  npm run build
  ```
  Générez les fichiers statiques optimisés dans le dossier `dist`.

- **Prévisualiser la build** :
  ```bash
  npm run preview
  ```
  Prévisualisez la version construite de l'application.

- **Linter le code** :
  ```bash
  npm run lint
  ```
  Analyse le code avec ESLint pour détecter les erreurs.

- **Générer la documentation** :
  ```bash
  npm run doc
  ```
  Crée une documentation des fichiers JS à l'aide de JSDoc et du thème Docdash.

## Structure du Projet

```plaintext
src/
├── assets/            # Images et fichiers statiques
├── components/        # Composants React
├── services/          # Fonctions de service (API, formatage de données)
├── styles/            # Fichiers de style SCSS
├── App.jsx            # Composant racine de l'application
├── main.jsx           # Point d'entrée de l'application
└── ...
```

### Composants principaux

- **Dashboard** : Tableau de bord principal de l'application.
- **Charts** :
  - `AverageScoreChart` : Graphique radial du score quotidien.
  - `AverageSessionChart` : Graphique linéaire des sessions moyennes.
  - `DailyActivityChart` : Graphique des activités quotidiennes (poids et calories).
  - `PerformanceRadarChart` : Graphique radar des performances.
- **Autres** :
  - `Login` : Page de connexion.
  - `NutritionData` : Affichage des données nutritionnelles.
  - `ErrorPage` : Page d'erreur.

### Services

- **Récupération des données** :
  - `aggregateUserData` : Récupère et agrège toutes les données utilisateur.
  - `getUserActivity`, `getUserAverageSessions`, `getUserData`, `getUserPerformance` : Récupération des données spécifiques.
- **Formatage des données** :
  - `formatUserData`, `formatUserActivityData`, `formatAverageSessionsData`, `formatUserPerformanceData` : Transformation des données brutes.

### Données simulées
Les données sont d'abord mockées pour faciliter le développement. La variable `USE_MOCK_DATA` permet de basculer entre les données simulées et celles provenant de l'API.

## Technologies utilisées
- **React** : Bibliothèque pour la création de l'interface utilisateur.
- **Recharts** : Librairie pour les graphiques interactifs.
- **Sass** : Préprocesseur CSS pour les styles.
- **Vite** : Outil de build et de développement rapide.
- **ESLint** : Analyseur de code.
- **JSDoc** : Génération de documentation des fichiers JS.

## Bonnes pratiques
- Centralisez les appels API dans le dossier `services`.
- Utilisez des PropTypes pour valider les propriétés des composants.
- Formatez les données dans les services avant de les transmettre aux composants.