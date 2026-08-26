/* =====================================================================
   projets-data.js — un objet par fiche projet.
   Les projets marqués isPlaceholder:true contiennent des indications
   entre crochets [ ... ] à remplacer par ton propre contenu.
   Le gabarit (projet.html) lit cet objet via l'id passé dans l'URL,
   ex : projet.html?id=alternance-glpi
   ===================================================================== */

const PROJETS = {

  /* ================= PROJET RÉEL 1 — Alternance 3e année ================= */
  "alternance-glpi": {
    isPlaceholder: false,
    kicker: "Alternance · 3e année",
    title: "Fiabiliser l'inventaire informatique d'un hôpital",
    subtitle: "Synchronisation automatique des machines virtuelles entre vSphere et GLPI, à l'échelle d'un groupement hospitalier de territoire.",
    period: "Octobre 2025 – Août 2026",
    org: "Centre Hospitalier Émile Roux",
    cover: "assets/img/projects/alternance_cover.jpg",
    tags: ["Ansible", "API REST", "GLPI", "vSphere", "Sécurité"],
    contexte:
      "Le Centre Hospitalier Émile Roux, établissement support d'un Groupement Hospitalier de Territoire (GHT), s'appuie sur GLPI pour gérer l'ensemble de son parc informatique. Or l'inventaire des machines virtuelles hébergées sur l'infrastructure de virtualisation (vSphere) n'était pas automatiquement répercuté dans GLPI : chaque création ou modification de VM nécessitait une mise à jour manuelle, source d'oublis et de données peu fiables dans un environnement où la continuité de service est critique.",
    objectifs: [
      "Synchroniser automatiquement l'inventaire des VM entre vSphere et GLPI, sans intervention manuelle",
      "Garantir une correspondance fiable entre les deux systèmes, même en cas de renommage d'une machine",
      "Sécuriser les identifiants et secrets utilisés par l'automatisation",
    ],
    missions: [
      "Analyse des écarts entre l'inventaire réel (vSphere) et les fiches GLPI",
      "Sécurisation des accès aux infrastructures sensibles (bastion, pare-feu)",
      "Développement d'un playbook Ansible interrogeant les API vSphere et GLPI",
      "Travaux réseau et support technique en parallèle (switchs, câblage)",
      "Présentations régulières de l'avancement du projet à l'équipe",
    ],
    etapes: [
      "Analyse : comparaison de l'inventaire vSphere avec les fiches GLPI sur un périmètre restreint",
      "Conception : évaluation de plusieurs pistes (mise à jour manuelle, script isolé, automatisation via Ansible)",
      "Développement : écriture du playbook, tests progressifs sur quelques VM avant généralisation",
      "Sécurisation : chiffrement des secrets avec Ansible Vault, définition des droits minimaux",
      "Documentation : rédaction de la procédure pour que la solution reste maintenable par l'équipe",
    ],
    competences: {
      techniques: ["Ansible (playbooks, Vault)", "API REST", "SQL", "Réseau & sécurité (bastion, pare-feu)"],
      transversales: ["Structuration de projet", "Documentation technique", "Évaluation de solutions existantes"],
      humaines: ["Autonomie", "Communication à l'oral", "Rigueur en environnement critique"],
    },
    outils: ["Ansible", "community.vmware", "GLPI (API REST)", "Ansible Vault", "Cron", "Git"],
    apports:
      "Ce projet mobilise des notions vues en réseaux et systèmes (segmentation, sécurisation des accès), en gestion de projet (planification, points d'avancement) et en développement (scripting, automatisation) — au croisement de plusieurs modules du BUT Informatique.",
    numeriqueResponsable:
      "L'automatisation réduit les interventions manuelles répétitives et les risques d'erreur associés, tout en évitant la duplication de données entre systèmes — une démarche de sobriété numérique appliquée à la gestion de parc.",
    conclusion:
      "Ce projet m'a confronté à une contrainte fréquente en environnement professionnel : contourner la limite d'un outil sans compromettre la sécurité ni la fiabilité des données. Au-delà de la solution technique, il m'a appris à documenter mes choix pour qu'ils restent compréhensibles par une équipe, bien au-delà de ma seule présence.",
    gallery: [
      { src: "assets/img/projects/alternance_flux.png", alt: "Schéma du flux vSphere → Ansible → GLPI" },
      { src: "assets/img/projects/alternance_code.jpg", alt: "Extrait du playbook Ansible" },
      { src: "assets/img/projects/alternance_orga.png", alt: "Organigramme de l'équipe pôle Sécurité" },
      { src: "assets/img/projects/alternance_result.jpg", alt: "Résultat de la synchronisation dans GLPI" },
    ],
    lien: null,
    lienNote: "Projet interne à l'hôpital — non public pour des raisons de confidentialité.",
  },

  /* ================= PROJET RÉEL 2 — Stage 2e année ================= */
  "stage-ansible-nextcloud": {
    isPlaceholder: false,
    kicker: "Stage · 2e année",
    title: "Automatiser une procédure de reprise après panne",
    subtitle: "Déploiement automatisé d'un service Nextcloud avec Ansible, pour restaurer rapidement un service critique en cas de défaillance.",
    period: "31 mars – 25 mai 2025",
    org: "Centre Hospitalier Émile Roux",
    cover: "assets/img/projects/stage_cover.jpg",
    tags: ["Ansible", "Docker", "PostgreSQL", "Nextcloud"],
    contexte:
      "En cas de panne d'un service critique comme le partage de fichiers entre services hospitaliers (Nextcloud), le redémarrage manuel était long, peu documenté et exposé à l'erreur humaine — un risque important dans un établissement où plusieurs services dépendent de cet outil pour échanger des documents sensibles au quotidien.",
    objectifs: [
      "Mettre en place une procédure de déploiement automatisée, rapide et fiable",
      "Restaurer un service Nextcloud complet et sécurisé en moins de 5 minutes",
      "Rendre la procédure réutilisable et documentée pour toute l'équipe",
    ],
    missions: [
      "Identification des procédures critiques avec le RSSI",
      "Conception de rôles Ansible modulaires (installation, Docker, Nextcloud, montages)",
      "Génération dynamique des montages SFTP par service hospitalier",
      "Sécurisation des variables sensibles avec Ansible Vault",
      "Tests en environnement Docker simulé et rédaction de la documentation",
    ],
    etapes: [
      "Semaine 1 : découverte du contexte et prise en main des outils (Ansible, Docker, Vault)",
      "Semaines 2-3 : création des rôles de base (configuration système, installation Docker)",
      "Semaines 4-5 : déploiement de Nextcloud et de la base PostgreSQL associée",
      "Semaine 6 : génération dynamique des montages SFTP (JSON via Jinja2)",
      "Semaine 7 : sécurisation avec Vault, mise en place des tâches cron",
      "Semaine 8 : tests complets, documentation, validation avec le tuteur",
    ],
    competences: {
      techniques: ["Ansible (rôles, variables, Vault)", "Docker & Docker Compose", "PostgreSQL", "Templating Jinja2"],
      transversales: ["Approche modulaire", "Documentation", "Gestion de versions (Git)"],
      humaines: ["Travail en autonomie", "Réactivité face aux imprévus", "Communication avec l'équipe"],
    },
    outils: ["Ansible", "Docker", "Docker Compose", "PostgreSQL", "Ansible Vault", "Jinja2", "Git"],
    apports:
      "Ce projet s'appuie directement sur les enseignements de conteneurisation, de scripting et de gestion de bases de données du BUT, tout en introduisant une dimension propre au monde professionnel : la criticité d'un service en production.",
    numeriqueResponsable:
      "La conteneurisation via Docker limite l'empreinte des environnements de test par rapport à des machines virtuelles complètes, et la procédure automatisée réduit le temps d'indisponibilité du service — donc son impact — en cas d'incident.",
    conclusion:
      "Ce stage a été ma première expérience de développement d'une solution pensée pour être utilisée par d'autres que moi, en autonomie, sur une durée de plusieurs semaines. Il a posé les bases techniques (Ansible, conteneurisation) que j'ai pu réinvestir et approfondir l'année suivante lors de mon alternance dans la même structure.",
    gallery: [
      { src: "assets/img/projects/stage_roles.png", alt: "Architecture des rôles Ansible du projet" },
      { src: "assets/img/projects/stage_compose.jpg", alt: "Extrait du docker-compose.yml généré" },
      { src: "assets/img/projects/stage_sftp.jpg", alt: "Exemple de montage SFTP généré dynamiquement" },
      { src: "assets/img/projects/stage_nextcloud.jpg", alt: "Interface Nextcloud déployée" },
    ],
    lien: null,
    lienNote: "Projet interne à l'hôpital — non public pour des raisons de confidentialité.",
  },

  /* ================= PROJET RÉEL 3 — Project Legions ================= */
  "legions": {
    isPlaceholder: false,
    kicker: "Projet étudiant · Atelier création vidéoludique",
    title: "Project Legions: Story of Amaltheis",
    subtitle: "Un jeu de combat (fighting game) mêlant mécaniques stratégiques et ambiance futuriste, développé en équipe sous Unreal Engine 5.",
    period: "Atelier de création vidéoludique",
    org: "IUT Clermont Auvergne — BUT Informatique Graphique",
    cover: "assets/img/projects/legions_cover.png",
    tags: ["Unreal Engine 5", "C++", "Blueprint", "Game Design"],
    contexte:
      "Project Legions est un projet étudiant réalisé en équipe dans le cadre d'un atelier de création vidéoludique du BUT Informatique Graphique. L'objectif : concevoir un jeu de combat qui se démarque par ses mécaniques et son univers, en travaillant les codes du genre tout en proposant une direction artistique futuriste originale.",
    objectifs: [
      "Concevoir un fighting game aux mécaniques stratégiques et accessibles",
      "Développer un univers et une direction artistique cohérents et immersifs",
      "Livrer un prototype jouable en équipe, dans un temps contraint",
    ],
    missions: [
      "Étude comparative des jeux de combat existants pour identifier les mécaniques à retenir",
      "Conception des systèmes de combat et de l'équilibrage",
      "Développement du gameplay en C++ et Blueprint sous Unreal Engine 5",
      "Intégration des retours de playtests en équipe",
    ],
    etapes: [
      "Recherche et analyse de la concurrence (fighting games existants)",
      "Conception des mécaniques de jeu et du game design document",
      "Prototypage rapide sous Unreal Engine 5",
      "Développement itératif du gameplay (C++ et Blueprint)",
      "Tests et ajustements d'équilibrage en équipe",
    ],
    competences: {
      techniques: ["Unreal Engine 5 (C++ & Blueprint)", "Game design", "Équilibrage de gameplay"],
      transversales: ["Conception UI/UX", "Analyse de la concurrence"],
      humaines: ["Travail en équipe", "Créativité", "Itération sur retours"],
    },
    outils: ["Unreal Engine 5", "C++", "Blueprint"],
    apports:
      "Ce projet mobilise les compétences de programmation orientée jeu vidéo et de conception d'interfaces vues en BUT Informatique Graphique, avec une dimension de game design pure — équilibrage, ressenti manette, lisibilité des actions — propre à la spécialisation.",
    numeriqueResponsable:
      "[À compléter si pertinent : optimisation des assets, performance du moteur, accessibilité du jeu.]",
    conclusion:
      "Ce projet m'a permis de toucher à toutes les étapes de la création d'un jeu vidéo, de la recherche de concept à l'implémentation technique, en particulier sur l'équilibrage d'un genre aussi exigeant que le fighting game — un exercice très différent de mes missions en infrastructure, mais qui mobilise la même rigueur logique.",
    gallery: [
      { src: "assets/img/projects/legions_cover.png", alt: "Bannière du jeu Project Legions: Story of Amaltheis" },
      { src: "assets/img/projects/legions_logos.jpg", alt: "Technologies utilisées : Unreal Engine 5 et C++" },
      { src: "assets/img/projects/legions_code.jpg", alt: "Extrait du système de combat en C++" },
      { src: "assets/img/projects/legions_result.jpg", alt: "Interface de combat : barres de vie, timer, système de combo" },
    ],
    lien: null,
    lienNote: "Ajoute ici un lien vers une vidéo de gameplay ou un dépôt du projet si tu en as un.",
  },

  /* ================= PROJET RÉEL 4 — Humanity ================= */
  "humanity": {
    isPlaceholder: false,
    kicker: "Projet étudiant · Janvier – Juin 2024",
    title: "Humanity — Musée virtuel sur Martin Luther King",
    subtitle: "Un musée virtuel interactif retraçant la vie et les combats de Martin Luther King, conçu en équipe sous Unity.",
    period: "Janvier – Juin 2024",
    org: "IUT Clermont Auvergne — BUT Informatique Graphique",
    cover: "assets/img/projects/humanity_cover.png",
    tags: ["Unity", "C#", "Blender"],
    contexte:
      "Projet réalisé en parallèle des cours, en équipe, autour d'un thème engagé : recréer, sous forme de musée virtuel interactif, la vie et les combats de Martin Luther King pour la reconnaissance des droits civiques.",
    objectifs: [
      "Créer un musée virtuel interactif et immersif",
      "Retranscrire fidèlement des éléments historiques réels",
      "Rendre accessible et vivante une thématique engagée grâce au numérique",
    ],
    missions: [
      "Recherches historiques sur la vie de Martin Luther King",
      "Modélisation 3D des espaces et objets du musée",
      "Scénarisation du parcours de visite",
      "Développement interactif sous Unity",
    ],
    etapes: [
      "Recherches historiques et écriture du contenu",
      "Modélisation 3D des salles et objets (Blender)",
      "Intégration et scénarisation sous Unity",
      "Programmation des interactions (C#)",
      "Tests et finitions",
    ],
    competences: {
      techniques: ["Unity", "C#", "Modélisation 3D (Blender)"],
      transversales: ["Recherche documentaire", "Scénarisation", "Narration numérique"],
      humaines: ["Travail d'équipe", "Engagement sociétal"],
    },
    outils: ["Unity", "C#", "Blender"],
    apports:
      "Ce projet croise plusieurs compétences du BUT Informatique Graphique : modélisation 3D, développement interactif, et scénarisation — avec une dimension de recherche historique et de sens donné au projet, au-delà du seul exercice technique.",
    numeriqueResponsable:
      "[À compléter si pertinent : optimisation des modèles 3D, accessibilité du musée virtuel.]",
    conclusion:
      "Travailler sur un sujet aussi engagé m'a rappelé que la technique n'est jamais neutre : elle sert un propos. Ce projet m'a appris à concilier exigence historique, narration et contraintes techniques d'un moteur de jeu, en équipe.",
    gallery: [
      { src: "assets/img/projects/humanity_cover.png", alt: "Logo du projet Humanity" },
      { src: "assets/img/projects/humanity_logos.jpg", alt: "Technologies utilisées : Unity et Blender" },
      { src: "assets/img/projects/humanity_code.jpg", alt: "Extrait du script d'interaction avec une exposition" },
      { src: "assets/img/projects/humanity_result.jpg", alt: "Interface du parcours de visite virtuel" },
    ],
    lien: null,
    lienNote: "Ajoute ici un lien vers une vidéo de visite ou un dépôt du projet si tu en as un.",
  },

  /* ================= PROJET RÉEL 5 — Base de données sécurisée ================= */
  "bdd-securisee": {
    isPlaceholder: false,
    kicker: "Projet étudiant · Méthode SCRUM",
    title: "Base de données sécurisée pour la gestion d'inventaire",
    subtitle: "Conception d'une base de données sécurisée pour la gestion d'inventaire d'une PME, en équipe, selon la méthode agile SCRUM.",
    period: "Projet universitaire en équipe",
    org: "IUT Clermont Auvergne — BUT Informatique Graphique",
    cover: "assets/img/projects/bdd_cover.png",
    tags: ["MySQL", "SQL", "Git", "SCRUM"],
    contexte:
      "Projet universitaire réalisé en équipe, avec pour objectif de concevoir une base de données sécurisée destinée à la gestion d'inventaire d'une PME fictive, en appliquant la méthode agile SCRUM tout au long du développement.",
    objectifs: [
      "Modéliser une base de données répondant aux besoins de gestion d'inventaire d'une PME",
      "Sécuriser les données sensibles via une gestion fine des rôles et permissions",
      "Appliquer une méthodologie agile (SCRUM) en équipe",
    ],
    missions: [
      "Modélisation conceptuelle de la base de données (MCD/MLD)",
      "Rédaction des requêtes SQL de création et de manipulation",
      "Mise en place des rôles et permissions utilisateurs",
      "Documentation technique du projet",
    ],
    etapes: [
      "Recueil des besoins et modélisation conceptuelle",
      "Modélisation logique et physique de la base",
      "Écriture des requêtes SQL et des scripts de sécurisation",
      "Mise en place des rôles et permissions",
      "Documentation et présentation finale",
    ],
    competences: {
      techniques: ["SQL", "Modélisation de bases de données", "Sécurité des données"],
      transversales: ["Méthode SCRUM", "Documentation technique"],
      humaines: ["Collaboration agile", "Organisation en sprints"],
    },
    outils: ["MySQL", "Git", "Lucidchart"],
    apports:
      "Ce projet s'appuie directement sur les enseignements de modélisation de données et de SQL du BUT, avec une mise en application concrète de la méthode SCRUM — une méthodologie que l'on retrouve aussi largement dans le monde professionnel.",
    numeriqueResponsable:
      "[À compléter si pertinent : optimisation des requêtes, limitation de la duplication de données.]",
    conclusion:
      "Ce projet m'a permis de comprendre concrètement pourquoi la sécurité d'une base de données ne se limite pas au chiffrement : la gestion fine des droits d'accès est tout aussi déterminante. Travailler en SCRUM m'a aussi appris à découper un projet en itérations courtes et mesurables.",
    gallery: [
      { src: "assets/img/projects/bdd_cover.png", alt: "Illustration du projet de base de données sécurisée" },
      { src: "assets/img/projects/bdd_logos.jpg", alt: "Technologies utilisées : MySQL et Git" },
      { src: "assets/img/projects/bdd_code.jpg", alt: "Extrait des rôles et permissions SQL" },
      { src: "assets/img/projects/bdd_result.png", alt: "Schéma entité-association (MCD) de la base de données" },
    ],
    lien: null,
    lienNote: "Ajoute ici un lien vers un dépôt du projet si tu en as un.",
  },
};
