import { NavLink } from "react-router-dom";

export default function SitemapNuxtStrapi() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 space-y-4">
      <h1 className="text-3xl font-bold text-heading">
        Mise en place d'un sitemap dynamique — Nuxt & Strapi
      </h1>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Présentation du projet
      </h2>
      <p className="text-body leading-relaxed">
        L'objectif de cette réalisation était de mettre en place un{" "}
        <strong>sitemap</strong> pour le site web sur lequel je travaille en
        entreprise dans le cadre de mon alternance.
      </p>
      <p className="text-body leading-relaxed">
        Un sitemap est un fichier (généralement au format XML) qui recense les
        pages d'un site web afin d'aider les moteurs de recherche à les
        découvrir et à les indexer. C'est un élément important du référencement
        naturel (SEO) : il permet de s'assurer que les contenus pertinents du
        site sont bien visibles des moteurs de recherche.
      </p>
      <p className="text-body leading-relaxed">
        Le site en lui-même est développé en <strong>Vue</strong> avec{" "}
        <strong>Nuxt</strong> côté front-end, et s'appuie sur{" "}
        <strong>Strapi</strong> comme CMS.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Objectifs, contexte, enjeux et risques
      </h2>
      <p className="text-body leading-relaxed">
        Plusieurs enjeux encadraient cette mission :
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Respecter le temps imparti</strong> pour le développement de
        la fonctionnalité.
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Préserver la performance de l'application</strong> : il
        fallait penser une solution qui n'impacterait pas les performances du
        site, tout en permettant d'avoir un <strong>sitemap dynamique</strong>,
        car des pages et de nouveaux articles sont régulièrement ajoutés sur le
        site.
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Développer une solution claire et lisible</strong>, facilement
        compréhensible et maintenable par les autres développeurs de l'équipe.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Les étapes, les acteurs, les interactions et les résultats
      </h2>
      <p className="text-body leading-relaxed">
        <strong>Ce que j'ai fait :</strong>
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Étude de la documentation</strong> : j'ai d'abord analysé la
        documentation pour étudier les différentes possibilités de mise en place
        d'un sitemap compatible avec Strapi et Nuxt.
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Discussion avec l'équipe</strong> : j'ai échangé avec mon
        équipe de développeurs pour définir la solution la plus adaptée et la
        plus maintenable. En effet, toutes les pages ne doivent pas se retrouver
        dans un sitemap : c'est le cas par exemple des pages de profil ou des
        pages auxquelles un utilisateur n'a accès qu'en se connectant. Il
        fallait donc mettre en place une solution qui définisse précisément les
        pages à inclure dans le sitemap, tout en restant facilement maintenable
        si d'autres pages sont ajoutées plus tard.
      </p>
      <p className="text-body leading-relaxed">
        - <strong>Développement et review</strong> : après discussion, j'ai mis
        en place la solution retenue, puis je l'ai soumise en revue de code.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Les acteurs et les interactions :</strong> ce travail s'est fait
        en interaction constante avec mon équipe de développeurs, en amont pour
        le choix de la solution, et en aval lors de la revue de code.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Les résultats :</strong> la review a été rapide, et le
        développeur qui l'a effectuée a trouvé que la solution était très bien
        conçue. Pour l'entreprise, le site dispose désormais d'un sitemap fiable
        qui améliore son référencement ; pour moi, c'est la validation d'une
        démarche complète, de l'analyse à la livraison.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Les lendemains du projet
      </h2>
      <p className="text-body leading-relaxed">
        Le sitemap est aujourd'hui approuvé et en place en production. Le
        développement de cette fonctionnalité est une réussite, et la solution
        retenue continue d'accompagner l'évolution du site au fil de l'ajout de
        nouveaux contenus.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Mon regard critique
      </h2>
      <p className="text-body leading-relaxed">
        En développant cette solution, j'ai réalisé qu'il n'existe pas toujours
        de solution idéale d'un point de vue performance et maintenabilité, et
        que cette dernière doit s'adapter au projet : il n'est pas toujours
        possible de mettre en place une solution entièrement dynamique à
        laquelle il ne serait plus jamais nécessaire de penser au fil du
        développement. Le compromis entre automatisation, performance et
        maintenabilité fait partie intégrante du métier.
      </p>
      <p className="text-body leading-relaxed">
        J'ai également dû faire preuve de <strong>rigueur</strong> en
        développant cette solution : respecter les conventions de nommage ou
        bien encore faire un usage correct de <em>helpers</em>,{" "}
        <em>middlewares</em> et <em>plugins</em> au bon moment.
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
