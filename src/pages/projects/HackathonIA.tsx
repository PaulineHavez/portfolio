import { NavLink } from "react-router-dom";

export default function HackathonIA() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 space-y-4">
      <h1 className="text-3xl font-bold text-heading">
        Hackathon IA — Construire un outil de documentation intelligent en deux
        jours
      </h1>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Présentation du projet
      </h2>
      <p className="text-body leading-relaxed">
        Ce troisième projet est un <strong>hackathon autour de l'IA</strong>{" "}
        impliquant des profils techniques et non techniques. Cette expérience a
        eu lieu pendant mon alternance. Le but était de construire, en deux
        jours seulement, une application s'appuyant sur un outil utilisant
        l'intelligence artificielle et pouvant servir concrètement à
        l'entreprise.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Objectifs, contexte, enjeux et risques
      </h2>
      <p className="text-body leading-relaxed">
        Avec mon équipe, nous avons souhaité créer un{" "}
        <strong>outil de documentation centralisé</strong> pour l'ensemble des
        équipes de l'entreprise, où l'on pourrait regrouper les documentations
        de chacune d'elles. L'idée : permettre à chaque membre de l'entreprise,
        à travers un <strong>agent conversationnel IA</strong>, de poser des
        questions et d'obtenir des réponses adaptées à son profil.
      </p>
      <p className="text-body leading-relaxed">
        Le contexte du hackathon imposait des contraintes fortes : un délai de
        deux jours, une équipe mixte composée de profils techniques et non
        techniques, et l'obligation d'aboutir à une démonstration fonctionnelle.
        Les principaux risques étaient de ne pas réussir à livrer un produit
        démontrable dans le temps imparti, et de ne pas parvenir à faire
        contribuer efficacement les membres non techniques de l'équipe.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Les étapes, les acteurs, les interactions et les résultats
      </h2>
      <p className="text-body leading-relaxed">
        <strong>Ce que nous avons fait :</strong>
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Analyse du besoin</strong> : nous avons d'abord questionné les
        membres des différentes équipes pour connaître leurs besoins en matière
        de documentation.
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Cadrage et conception</strong> : nous avons ensuite défini un{" "}
        <em>Minimum Viable Product</em> et maquetté l'application.
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Préparation de l'environnement</strong> : nous avons mis en
        place l'environnement de développement sur les ordinateurs des profils
        non techniques (VS Code, clés SSH) pour qu'ils puissent coder avec nous.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Mon rôle et les interactions :</strong> j'ai joué un rôle de
        transmission auprès des membres non techniques. Je leur ai expliqué le
        fonctionnement d'un environnement de développement ainsi que celui de
        GitHub, comment utiliser l'IA pour coder rapidement, et comment envoyer
        du code depuis son environnement local vers le repository dédié. Cette
        dimension pédagogique a été essentielle pour que toute l'équipe puisse
        réellement contribuer au projet.J'ai bien sûr aussi participé au débat
        et au développement du produit, notamment côté back-end.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Les résultats :</strong> nous avons codé le projet ensemble et,
        après une démonstration finale devant un jury, nous avons remporté le{" "}
        <strong>deuxième prix du hackathon</strong>. Pour moi, ce résultat
        valide à la fois ma capacité technique et ma capacité à transmettre ;
        pour l'entreprise, il ouvre la voie à un outil concret d'accès à la
        documentation interne.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Les lendemains du projet
      </h2>
      <p className="text-body leading-relaxed">
        Dans un futur proche, nous pourrons observer si le projet sera adopté
        par l'entreprise et déployé au-delà du cadre du hackathon. Le deuxième
        prix obtenu constitue en tout cas un signal positif quant à la
        pertinence du besoin identifié.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Mon regard critique
      </h2>
      <p className="text-body leading-relaxed">
        Ce hackathon fut une belle aventure dans laquelle nous nous sommes tous
        enrichis, notamment du fait de la diversité de nos profils. J'ai
        particulièrement aimer le challenge de création d'une application de
        toutes pièces et d'adopter, avant même la vision technique, une{" "}
        <strong>vision produit</strong> : penser le besoin des utilisateurs et
        concevoir un outil pertinent et intuitif.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Compétences rattachées à cette réalisation
      </h2>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/competences/capacite-remise-en-question"
          className="text-primary underline hover:no-underline"
        >
          Capacité de remise en question
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/competences/rigueur"
          className="text-primary underline hover:no-underline"
        >
          Rigueur
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/competences/esprit-collaboratif"
          className="text-primary underline hover:no-underline"
        >
          Esprit collaboratif
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/competences/sens-du-dialogue-et-pedagogie"
          className="text-primary underline hover:no-underline"
        >
          Sens du dialogue et de la pédagogie
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
    </article>
  );
}
