# 🎬 CineScope — Application Full-Stack (Catalogue & Favoris de Films)

Application web interactive de gestion et de recherche de films développée dans le cadre du cours **SED2515 (Applications web et mobile)** à l'Université d'Ottawa.

---

## 🛠️ Stack Technique
* **Frontend :** React JS, Axios, Bulma CSS
* **Backend :** Node.js, Express.js, Sequelize ORM
* **Base de données :** MySQL (via XAMPP)

---

## 📂 Structure du Dépôt GitHub
Le dépôt GitHub doit contenir l'architecture découplée suivante à la racine :
```text
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

---

## 🚀 Instructions d'Exécution et de Test

### 1. Base de données MySQL
1. Démarrer **Apache** et **MySQL** depuis le panneau de contrôle XAMPP.
2. Ouvrir `http://localhost/phpmyadmin/`.
3. Créer une base de données nommée `cinescope_db` :
   ```sql
   CREATE DATABASE cinescope_db;
   ```
4. Créer la table `movies` et insérer les données initiales :
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

### 2. Démarrer le Backend
1. Ouvrir un terminal dans le dossier `backend`.
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer le serveur :
   ```bash
   node index.js
   ```
   *(Le serveur s'exécutera sur le port `5555`).*

### 3. Démarrer le Frontend (React)
1. Ouvrir un second terminal dans le dossier `frontend`.
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer l'application React :
   ```bash
   npm start
   ```
   *(L'application s'ouvrira sur `http://localhost:3000`).*

---

## 👥 Collaboration & Git
* **Dépôt Git :** Nommé de préférence `SED2515-CineScope` ou `CineScope`.
* **Collaborateurs :** Les comptes du professeur ont été ajoutés dans les paramètres GitHub (`Settings > Collaborators`).
* **Pourcentage de code personnel :** 85% écrit par l'étudiant.

---

## 🤖 Avertissement GenAI
Outil GenAI utilisé le 4 octobre 2026 pour assister dans la structuration des composants React et la configuration des routes Express.
