import { NavLink } from "react-router-dom";

export default function MigrationVuetify() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 space-y-4">
      <h1 className="text-3xl font-bold text-heading">
        Migration de composants Vuetify 2 vers Vuetify 3
      </h1>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Présentation du projet
      </h2>
      <p className="text-body leading-relaxed">
        Cette réalisation, effectuée pendant mon alternance, consistait à{" "}
        <strong>migrer des composants de Vuetify 2 vers Vuetify 3</strong>, dans
        le cadre plus large de la migration de l'application de Vue 2 vers Vue
        3.
      </p>
      <p className="text-body leading-relaxed">
        Vuetify est une bibliothèque de composants d'interface pour Vue.js : la
        montée de version majeure du framework (Vue 3) impliquait également
        celle de la bibliothèque de composants, avec des changements importants
        dans l'API et le comportement des composants.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Objectifs, contexte, enjeux et risques
      </h2>
      <p className="text-body leading-relaxed">
        L'objectif était de migrer entièrement une application de Vue 2 à Vue 3.
        Cela impliquait de <strong>faire cohabiter deux applications</strong>{" "}
        pendant toute la durée de la migration, et de s'assurer que le
        développement de la nouvelle version ne casse pas l'existant.
      </p>
      <p className="text-body leading-relaxed">
        Les risques étaient donc significatifs : une migration de cette ampleur
        touche à l'ensemble de l'interface, et chaque composant migré devait
        rester fonctionnel pour ne pas dégrader l'expérience des utilisateurs ni
        bloquer le travail du reste de l'équipe. En parralèle, nous devions
        toujours répondre aux besoins des clients. Notre temps était donc
        répartis entre miration et développement de nouvelles fonctionnalités
        qui devaient être disponibles sur les deux applications.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Les étapes, les acteurs, les interactions et les résultats
      </h2>
      <p className="text-body leading-relaxed">
        <strong>Ce que nous avons fait :</strong> avec mon équipe de
        développement, nous avons travaillé ensemble pour migrer les composants{" "}
        <strong>par groupe</strong>. La stratégie retenue se déroulait en deux
        temps : d'abord migrer les composants pour qu'ils soient fonctionnels,
        même s'ils n'étaient pas encore très esthétiques, puis, dans un second
        temps, les rendre agréables et intuitifs.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Ce que j'ai fait :</strong> afin de migrer ces composants, je me
        suis appuyée sur la <strong>documentation de Vue et Vuetify</strong>,
        j'ai étudié les composants déjà migrés par l'équipe, puis j'ai créé un{" "}
        <strong>mini-protocole à suivre</strong> pour ne rien oublier lors des
        migrations afin de m'assurer que chaque nouveau composant était
        pleinement fonctionnel. Ce protocole m'a permis de systématiser la
        démarche et de fiabiliser mon travail.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Les acteurs et les interactions :</strong> la migration était un
        effort d'équipe, avec une répartition des composants par groupe entre
        les développeurs, des échanges réguliers sur les difficultés rencontrées
        et des revues de code mutuelles.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Les résultats :</strong> pour l'entreprise, la migration
        progressive a permis de moderniser l'application sans interruption de
        service ; pour moi, elle a été un excellent terrain d'apprentissage de
        la rigueur et de la méthode.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Les lendemains du projet
      </h2>
      <p className="text-body leading-relaxed">
        Nous avons aujourd'hui terminé de migrer l'ensemble des composants :{" "}
        <strong>l'application sous Vuetify 3 a vu le jour</strong>. La base de
        code est désormais à jour, ce qui facilite les développements futurs et
        garantit le support des versions actuelles de l'écosystème Vue.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Mon regard critique
      </h2>
      <p className="text-body leading-relaxed">
        Ces développements m'ont permis de comprendre l'
        <strong>enjeu d'une migration</strong> : maintenir une application à
        jour et performante n'est pas un luxe, mais une nécessité pour assurer
        la pérennité d'un produit.
      </p>
      <p className="text-body leading-relaxed">
        Ce projet m'a également donné l'occasion de comprendre en profondeur des
        composants réalisés avec Vue et Vuetify, en analysant leur
        fonctionnement pour les reproduire dans la nouvelle version. Enfin, il
        m'a permis de découvrir <strong>Storybook</strong>, l'outil utilisé pour
        développer et vérifier les composants de manière isolée, qui s'est
        révélé précieux pour valider visuellement et fonctionnellement chaque
        composant migré.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Compétences rattachées à cette réalisation
      </h2>
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
          to="/competences/maintenance-et-evolution"
          className="text-primary underline hover:no-underline"
        >
          Maintenance et évolution
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
    </article>
  );
}
