# MemeCoinBarry

## MemeCoinBarry est une application web permettant de créer, partager et supprimer des memes. L'application comprend un backend construit avec Node.js, Express et MongoDB, et un frontend construit avec React et Material-UI.

### Table des matières
* Prérequis
* Installation
* Lancement du projet
* Utilisation
* Architecture du projet
* Fonctionnalités
* Contribuer
* Licence

## Prérequis :
Avant de commencer, assurez-vous d'avoir installé les logiciels suivants sur votre machine :

Node.js (version 14 ou supérieure)
MongoDB
Installation
Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/yourusername/MemeCoinBarry.git
cd MemeCoinBarry
```
## Backend
Naviguez dans le répertoire backend :

```bash
cd backend
```
### Installez les dépendances :

```bash
yarn install
```
### Configurez la base de données MongoDB :

## Frontend

### Naviguez dans le répertoire frontend :

```bash
cd ../frontend
```
### Installez les dépendances :

```bash
yarn install
```

# Lancement du projet

## Backend

Assurez-vous que MongoDB est en cours d'exécution sur votre machine.

Naviguez dans le répertoire backend :

```bash
cd backend
```

### Lancer le serveur :

```bash
yarn start
```

Le serveur backend devrait maintenant être en cours d'exécution sur http://localhost:3001.

## Frontend :

Naviguez dans le répertoire frontend :

```bash
cd ../frontend
```

### Lancer le client :


```bash
yarn start
```

L'application frontend devrait maintenant être en cours d'exécution sur http://localhost:3000.

## Utilisation :

Ouvrez votre navigateur et allez à http://localhost:3000.
Utilisez le formulaire pour ajouter de nouveaux memes en fournissant un texte et une image.
Les memes ajoutés seront affichés sur la page d'accueil.
Vous pouvez supprimer un meme en cliquant sur l'icône de poubelle à côté du meme.

### Architecture du projet :

```css
MemeCoinBarry/
├── backend/
│   ├── controllers/
│   │   └── memeController.js
│   ├── models/
│   │   └── memeModel.js
│   ├── routes/
│   │   └── memeRoutes.js
│   ├── uploads/
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── MemeList.js
│   │   │   └── Form.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   └── CreateMeme.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   └── package.json
└── README.md
```

## Fonctionnalités

* Création de memes : Ajoutez de nouveaux memes en fournissant un texte et une image.
* Affichage de memes : Affichez tous les memes ajoutés sur la page d'accueil.
* Suppression de memes : Supprimez un meme en cliquant sur l'icône de poubelle.


## Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

* Forkez le dépôt.
* Créez une branche pour votre fonctionnalité (git checkout -b feature/AmazingFeature).
* Commitez vos modifications (git commit -m 'Add some AmazingFeature').
* Poussez vers la branche (git push origin feature/AmazingFeature).
* Ouvrez une Pull Request.

## Licence
Distribué sous la licence MIT. Voir LICENSE pour plus d'informations.

