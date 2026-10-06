# CineScope

Salut! Bienvenue sur **CineScope**, mon application web pour parcourir un catalogue de films et gérer mes favoris.

Ce projet a été réalisé dans le cadre du cours **SED2515 (Applications web et mobile)** à l'Université d'Ottawa. C'est une application full-stack complète : une interface React qui parle à une API Express, elle-même branchée sur une base de données MySQL.

## Le projet en bref

CineScope permet de consulter une liste de films (titre, genre, année, note) et de rechercher dans le catalogue. J'ai voulu garder quelque chose de simple, clair et facile à faire tourner chez soi, tout en respectant une vraie séparation entre le frontend et le backend.

## Technologies utilisées

- **Frontend :** React JS, Axios, Bulma CSS
- **Backend :** Node.js, Express.js, Sequelize ORM
- **Base de données :** MySQL (via XAMPP)

## Organisation du dépôt

Le projet est séparé en deux parties indépendantes, à la racine :

```
CINESCOPE/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   └── MovieList.jsx
    │   ├── App.js
    │   └── index.js
    └── package.json
```

## Lancer le projet chez vous

Il suffit de suivre les trois étapes dans l'ordre.

### 1. Préparer la base de données MySQL

1. Ouvrez XAMPP et démarrez **Apache** et **MySQL**.
2. Allez sur `http://localhost/phpmyadmin/`.
3. Créez la base de données :

```sql
CREATE DATABASE cinescope_db;
```

4. Créez la table `movies` et ajoutez quelques films pour commencer :

```sql
CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    releaseYear INT NOT NULL,
    rating FLOAT NOT NULL,
    image VARCHAR(255),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO movies (title, genre, releaseYear, rating, createdAt, updatedAt) VALUES
('Inception', 'Science-Fiction', 2010, 8.8, NOW(), NOW()),
('Interstellar', 'Science-Fiction', 2014, 8.6, NOW(), NOW()),
('The Dark Knight', 'Action', 2008, 9.0, NOW(), NOW()),
('Pulp Fiction', 'Crime', 1994, 8.9, NOW(), NOW()),
('Forrest Gump', 'Drame', 1994, 8.8, NOW(), NOW());
```

### 2. Démarrer le backend

Dans un terminal, placez-vous dans le dossier `backend` :

```bash
npm install
node index.js
```

Le serveur tourne alors sur le port `5555`.

### 3. Démarrer le frontend

Dans un **second** terminal, placez-vous dans le dossier `frontend` :

```bash
npm install
npm start
```

L'application s'ouvre automatiquement sur `http://localhost:3000`. Et voilà, bon visionnement! 🍿

## Collaboration et Git

- **Dépôt :** `SED2515-CineScope`
- **Collaborateurs :** les comptes du professeur ont été ajoutés dans `Settings > Collaborators`.
- **Part de code personnel :** environ 85 % du code a été écrit par moi.

## Transparence sur l'IA générative

Le 4 octobre 2026, j'ai utilisé un outil d'IA générative pour m'aider à structurer mes composants React et à configurer mes routes Express. Le reste du travail, ainsi que la compréhension et l'intégration du code, vient de moi.


Merci d'avoir pris le temps de regarder mon projet! N'hésitez pas à me faire part de vos commentaires.

*— Koami Adjawlor*