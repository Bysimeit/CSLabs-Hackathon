# CSLabs-Hackathon

Problématiques :
Aider les personnes qui sont en manque de motivation ou en décrochage scolaire

### Objectifs :
- Application avec un coté prof et un coté élève.
- Coté prof :
  - Edition des différentes UA à valider dans le parcours des élèves
  - Validation des différentes étapes (vue global par UA pour valider sur une liste d'élève)
  - Possibilité d'ajouter des remarques ou commentaire pour chaque UA/Etape
  - Voir des statistiques afin de prévoir d'éventuelle session de ratrappage par UA
  - Reçevoir des alertes si l'on remarque un élève avec un taux de réussite plus bas que la normal
  - Possibilité de créer des palier de récompense (par exemple : le prof doit raconter une blague ou regarder un film)
  - Recevoir des conseils sur comment motiver des élèves. Un blog interprof?

- Coté Elève :
  - Consultation de son profil avec les différentes étape et leur état
  - Possibilité d'ajout d'information dans une UA/Etape
  - Possibilité de mettre son profil en public/privé afin de pouvoir se comparer aux autres
  - Possibilité de dépenser ses points pour atteindre des paliers de récompense
  - Recevoir des notifications liées à la validation d'un devoir (collectés automatiquement, ils ne disparaissent pas si on n'ouvre pas l'application)


- Système de points : 
  - les points peuvent être utile pour acheter des skins, certains cours peuvent donner des skins exclusifs. Le profs à un certains controle sur le gains des points pour s'assurer de donner les points à ceux qui le mérite.
  - Les profs peuvent créer des palliers de points. Une fois atteind le prof devra réaliser une tache qui sera lié au pallier
  - Améliorer les points reçus quand on rend plusieurs devoirs d'affilé, winstreak --> motive à maintenir le cap : mutliplicateur : X1.2, X1.5,..., X2
  - Gros regain de points et un message genre "Welcome back" si l'étudiant ne s'est plus connecté depuis longtemps --> remet sur les rails un élève en décrochage
  - Gros gain de points après un examen !!! X5
  - Gros gain de points au début d'année pour inciter les étudiants à venir/retourner sur l'appli

## Implémentation :
### Besoins :
- Api
- Web ou **Mobile**

### Docker :
Pour initialiser et démarrer le service Docker du projet : 
```
docker-compose up
```
Une fois créé, vous pouvez lancer la db via le Docker Desktop pour plus de facilité.
