# MemeCoinBarry

**MemeCoinBarry est une application web permettant de créer, partager et supprimer des memes. L'application comprend un backend construit avec Node.js, Express et MongoDB, et un frontend construit avec React et Material-UI.**

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
* Node.js (v14 ou supérieur)
* MongoDB (v4 ou supérieur)
* npm (v6 ou supérieur)
* Git
* Un navigateur web
* Un compte GitHub (facultatif)
* Un compte MongoDB Atlas (facultatif)
* Un compte Heroku (facultatif)
* Un compte Vercel (facultatif)


### Avant de commencer, assurez-vous d'avoir installé les logiciels suivants sur votre machine :

* Node.js (version 14 ou supérieure)
* MongoDB

## Installation

### Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/ibrahima-eemi/MemeCoinBarry.git
cd MemeCoinBarry
```
#### Backend
Naviguez dans le répertoire backend :

```bash
cd backend
```
### Installez les dépendances :

```bash
yarn install
```
### Configurez la base de données MongoDB :

#### Configuration MongoDB :
Créez un fichier .env dans le répertoire backend avec les informations de connexion à votre DB
MongoDB est utilisé comme base de données pour stocker les informations sur les memes. Voici comment configurer et utiliser MongoDB avec ce projet :

### Installation de MongoDBTélécharger MongoDB :

* Installez MongoDB sur votre machine locale ou utilisez MongoDB Atlas pour héberger votre base de données
* Allez sur le site officiel de MongoDB MongoDB Download Center et téléchargez la version correspondant à votre système d'exploitation.
* Suivez les instructions d'installation pour votre système.

## Démarrer MongoDB :

*Après l'installation, démarrez MongoDB en exécutant la commande suivante dans votre terminal :*

```bash
mongod
```
*Par défaut, MongoDB sera accessible sur mongodb://localhost:27017.*

# Configuration de la base de données

## Connexion à MongoDB :

*Le backend de MemeCoinBarry utilise Mongoose pour se connecter à MongoDB. Assurez-vous que l'URL de connexion dans votre fichier index.js de backend est correcte :*

```javascript
// backend/index.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/memecoin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));
```

## Modèle de données :

### Les memes sont stockés dans une collection MongoDB à l'aide d'un modèle défini dans memeModel.js :

```javascript
// backend/models/memeModel.js
const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;
```

### CRUD Operations :

### Les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sont gérées par memeController.js :

```javascript
// backend/controllers/memeController.js
const Meme = require('../models/memeModel');

exports.getMemes = async (req, res) => {
    const memes = await Meme.find();
    res.send(memes);
};

exports.createMeme = async (req, res) => {
    const meme = new Meme({
        text: req.body.text,
        image: req.file.filename,
    });
    await meme.save();
    res.send(meme);
};

exports.deleteMeme = async (req, res) => {
    const meme = await Meme.findByIdAndDelete(req.params.id);
    res.send(meme);
};
```

## Les routes pour ces opérations sont définies dans memeRoutes.js :

```javascript
// backend/routes/memeRoutes.js
const express = require('express');
const multer = require('multer');
const memeController = require('../controllers/memeController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/api/memes', memeController.getMemes);
router.post('/api/memes', upload.single('image'), memeController.createMeme);
router.delete('/api/memes/:id', memeController.deleteMeme);

module.exports = router;
```

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

