# SportSquad

**SportSquad** est une plateforme web qui permet aux passionnés de sport de :

-  Découvrir des événements sportifs autour d’eux
-  Participer à des séances (matchs, entraînements, etc.)
-  Créer et gérer leurs propres événements
-  Laisser des avis sur les organisateurs

---

##  Liens utiles

-  [Confluence (documentation)](https://pierreschiavon.atlassian.net/wiki/spaces/SportSquad/overview)  
-  [Trello (gestion de projet)](https://trello.com/b/pgPXV35i/sportsquad)  
-  [Google Doc (rédaction collaborative)](https://docs.google.com/document/d/1XNbMg7qusUweL1eAUP531mL-wss00a_ekAbzAcz_uVg/edit?tab=t.0)  
-  [Maquette Canva](https://www.canva.com/design/DAGV4rDLfLM/5vQHzbH4UVvnEQz5iW_Exw/view?utm_content=DAGV4rDLfLM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha158e45141#1)

---

##  Fonctionnalités clés

-  Carte interactive avec géolocalisation
-  Gestion du calendrier des événements
-  Formulaire de création d'événements
-  Système de participation et d'évaluation
-  Authentification sécurisée (JWT)

---

##  Stack technique

### Frontend – React

-  Vite.js
-  React Router
-  Bootstrap 
-  Leaflet pour la carte
-  JWT pour la gestion de session

### Backend – Express.js

-  Node.js / Express
-  PostgreSQL
-  Middleware de sécurité (JWT, validation)
-  API RESTful

---

##  Installation du projet

### 1. Cloner le repo

git clone https://github.com/PierreSCHIAVON/SportSquad.git
cd SportSquad

### 2. Installer le front

cd Frontend
npm install
npm run dev

### 3. Installer le Back

cd Backend
npm install
npx nodemon app.js

