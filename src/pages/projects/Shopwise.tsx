import { NavLink } from "react-router-dom";

export default function Shopwise() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 space-y-4">
      <h1 className="text-3xl font-bold text-heading">
        Shopwise — Une application de gestion pour commerçants et artisans
      </h1>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Présentation du projet
      </h2>
      <p className="text-body leading-relaxed">
        Shopwise est une étude de cas que j'ai réalisée dans le cadre de ma
        formation <strong>Expert en ingénierie logicielle</strong> au sein de
        l'ISCOD. L'objectif de cette étude était de développer une application
        proposant aux commerçants et artisans d'une ville un service de gestion
        des clients, des stocks, des ventes et des rendez-vous, ainsi que la
        mise en place d'une politique de fidélisation.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Objectifs, contexte, enjeux et risques
      </h2>
      <p className="text-body leading-relaxed">
        L'enjeu de cette étude était de mettre en œuvre les notions étudiées en
        cours afin de démontrer l'acquisition de plusieurs compétences du titre
        Expert en Ingénierie Logicielle, et notamment :
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <strong>
          « Développer les fonctionnalités du logiciel en modélisant un domaine
          métier, et en intégrant des composants externes afin d'améliorer la
          qualité du code et faciliter les développements futurs »
        </strong>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <strong>
          « Assurer le suivi des demandes utilisateurs en exploitant des outils
          de suivi permettant de recenser les anomalies afin de procéder aux
          mesures correctives, évolutives et adaptatives de l'application »
        </strong>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <strong>
          « Automatiser la construction de la solution logicielle en configurant
          les chaînes de build et l'exécution des tests unitaires, fonctionnels
          et d'intégration afin de préparer le déploiement continu du logiciel »
        </strong>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <strong>
          « Industrialiser le développement du logiciel à l'aide d'outils
          d'automatisation et le documenter en décrivant le processus de
          déploiement de manière à faire évoluer les logiciels développés et
          minimiser les erreurs de manipulation par les tiers »
        </strong>
      </p>
      <p className="text-body leading-relaxed">
        Le contexte imposait plusieurs contraintes techniques : l'utilisation d'
        <strong>Angular</strong> côté front-end, de <strong>Spring</strong> et{" "}
        <strong>Java</strong> pour le back-end, ainsi que la mise en place d'une{" "}
        <strong>base de données relationnelle</strong>. Afin que ce projet reste
        réalisable dans la durée d'un exercice, le périmètre fonctionnel était
        volontairement restreint à la gestion des clients, des rendez-vous, des
        transactions et de la fidélisation.
      </p>
      <p className="text-body leading-relaxed">
        Le principal risque était de se disperser : partir sur une architecture
        trop ambitieuse ou un périmètre trop large, au détriment de la qualité
        et de la livraison dans les délais.
      </p>
      <p className="text-body leading-relaxed">
        Il a donc fallu concevoir le schéma de la base de données relationnelle,
        mettre en place le back-end et le front-end, puis développer les user
        stories demandées.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Les étapes, les acteurs, les interactions et les résultats
      </h2>
      <p className="text-body leading-relaxed">
        <strong>Ce que j'ai fait :</strong>
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Mise en place du projet</strong> : j'ai commencé par la
        conception de la base de données, puis par le choix de l'infrastructure.
        Je suis initialement partie sur une architecture en{" "}
        <strong>microservices</strong>. Cependant, en échangeant avec des amis
        développeurs, je me suis rendue compte que cette architecture n'était pas
        adaptée à la taille et aux besoins du projet. Je me suis donc réorientée
        vers une architecture plus simple et plus pertinente : un back-end et un
        front-end distincts.
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Itérations sur la conception</strong> : de la même manière,
        j'ai fait évoluer à plusieurs reprises le schéma de la base de données
        au fur et à mesure que ma compréhension du domaine métier s'affinait.
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Développement des fonctionnalités</strong> : j'ai ensuite
        développé les user stories demandées (gestion des clients, des
        rendez-vous, des transactions et de la fidélisation) en respectant les
        contraintes techniques imposées.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Les acteurs et les interactions :</strong> ce projet a été mené
        en autonomie, mais les échanges avec des développeurs expérimentés de
        mon entourage ont joué un rôle déterminant dans les choix
        d'architecture. Le correcteur de l'ISCOD est intervenu en fin de
        parcours pour évaluer le livrable.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Les résultats :</strong> une fois l'application terminée, j'ai
        soumis le projet pour correction et il a été <strong>validé</strong>.
        Pour moi, ce résultat concrétise l'acquisition des compétences visées.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Les lendemains du projet
      </h2>
      <p className="text-body leading-relaxed">
        Dans un futur immédiat, la validation du projet est très encourageante :
        elle confirme que je commence à maîtriser les compétences demandées par
        le titre Expert en Ingénierie Logicielle. Avec du recul, ce projet
        constitue également une base réutilisable, tant sur le plan technique
        (stack Angular / Spring / base relationnelle) que méthodologique, pour
        mes projets futurs.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Mon regard critique
      </h2>
      <p className="text-body leading-relaxed">
        Ce projet m'a appris plusieurs leçons importantes :
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Un projet continue d'évoluer.</strong> La conception initiale
        n'est jamais définitive : l'architecture comme le modèle de données ont
        été remaniés plusieurs fois en cours de route.
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Le développement révèle de nouveaux besoins.</strong> On
        anticipe certaines contraintes techniques ou fonctionnelles en amont,
        mais c'est souvent en développant que l'on identifie de nouveaux besoins
        ou de nouvelles contraintes, qui entraînent des évolutions.
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Il faut s'outiller dès le départ.</strong> Mettre en place
        immédiatement les outils qui facilitent le développement fait gagner un
        temps précieux : par exemple un <strong>jeu de données</strong> pour
        alimenter la base de données, ou des{" "}
        <strong>commandes exécutables pertinentes</strong> comme le démarrage de
        l'application en mode <em>watch</em>, qui met à jour l'application
        automatiquement lorsque le code évolue.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Compétences rattachées à cette réalisation
      </h2>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/competences/analyse-du-besoin"
          className="text-primary underline hover:no-underline"
        >
          Analyse du besoin
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/competences/concevoir-une-solution"
          className="text-primary underline hover:no-underline"
        >
          Conception d'une solution
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/competences/developpement-d-une-solution"
          className="text-primary underline hover:no-underline"
        >
          Développement d'une solution
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/competences/etude-d-une-documentation"
          className="text-primary underline hover:no-underline"
        >
          Étude d'une documentation
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/competences/raisonnement-logique"
          className="text-primary underline hover:no-underline"
        >
          Raisonnement logique
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/competences/capacite-remise-en-question"
          className="text-primary underline hover:no-underline"
        >
          Capacité de remise en question
        </NavLink>
      </p>
    </article>
  );
}
