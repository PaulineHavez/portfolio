import { NavLink } from "react-router-dom";

export default function Rigor() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 space-y-4">
      <h1 className="text-3xl font-bold text-heading">Rigueur</h1>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Ma définition
      </h2>
      <p className="text-body leading-relaxed">
        <strong>
          {" "}
          Être rigoureuse, c'est être précise, minutieuse et méthodique dans les
          process que l'on met en œuvre
        </strong>
        . Dans le développement informatique, cette compétence se manifeste à
        chaque étape du travail : le code nécessite d'analyser la situation avec
        rigueur, d'identifier les pistes potentielles, puis de mettre en place
        une solution optimale sans coquille ni erreur. Cela passe aussi par des
        détails qui n'en sont pas : ne pas laisser traîner de `console.log` dans
        le code livré, soigner ses commentaires, penser aux cas de tests. La
        rigueur s'exerce également lors des reviews de pull requests : relire le
        code d'un collègue demande beaucoup d'attention, car il faut comprendre
        un problème et une solution que l'on n'a pas travaillés en amont. Enfin,
        elle est indispensable dans la création de process et de documentation
        destinés à être partagés aux autres membres de l'équipe : un document
        imprécis fait perdre du temps à tous ceux qui s'y réfèrent.
      </p>
      <p className="text-body leading-relaxed">
        L'actualité souligne l'importance croissante de cette compétence. Un
        article d'IT Brief de décembre 2025,{" "}
        <a
          href="https://itbrief.com.au/story/txp-warns-on-low-code-ai-overload-supplier-risk-in-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:no-underline"
        >
          TXP warns on low code, AI overload & supplier risk in 2026
        </a>
        , alerte sur les risques liés à l'essor du low-code et de l'IA. Selon le
        cabinet TXP, la croissance du low-code et des « citizen developers »
        pourrait donner naissance à la prochaine crise du legacy : de nombreuses
        organisations découvrent qu'elles ne peuvent pas maintenir ce qu'elles
        ont construit, créant une nouvelle forme de dette technique, car ces
        applications sont souvent développées sans processus structurés de test,
        de documentation et de conformité. L'article pointe aussi le risque de
        surcharge cognitive lié à l'IA :{" "}
        <strong>
          les outils d'IA génèrent des volumes massifs de contenus à l'apparence
          crédible, dont le ton assuré peut masquer des erreurs
        </strong>
        , obligeant les humains à vérifier et interpréter ces sorties plus vite
        que jamais. Dans ce contexte, la rigueur du développeur — tester,
        documenter, vérifier, ne rien laisser au hasard — devient un rempart
        essentiel du contrôle qualité et de la gouvernance du code.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Mes éléments de preuve
      </h2>
      <p className="text-body leading-relaxed">
        <strong>Shopwise</strong> est un projet d'école qui m'a demandé une
        <strong>
          {" "}
          grande rigueur dans le développement de la solution, et ce dès
          l'organisation du travail{" "}
        </strong>
        : j'ai créé des issues sur GitHub et découpé le travail à réaliser avec
        méthode, afin de ne rien oublier et d'avoir une vision claire de
        l'avancement. Ce découpage rigoureux m'a permis d'éviter les oublis de
        fonctionnalités et de travailler de manière structurée plutôt que de
        coder « au fil de l'eau ».
      </p>
      <p className="text-body leading-relaxed">
        La rigueur s'est aussi exercée dans le{" "}
        <strong>respect du cahier des charges de l'application</strong> : chaque
        fonctionnalité développée devait correspondre précisément à ce qui était
        attendu, ce qui m'a obligée à penser des solutions réellement
        fonctionnelles et à vérifier systématiquement mon travail par rapport
        aux exigences. Le résultat : une application conforme au cahier des
        charges, développée sans oubli de périmètre grâce au suivi méthodique
        des issues. Ma valeur ajoutée a été précisément cette organisation : en
        structurant le travail en amont, j'ai transformé un projet
        potentiellement dispersé en une réalisation maîtrisée de bout en bout.
      </p>
      <p className="text-body leading-relaxed">
        Cette expérience m'a d'ailleurs appris que si la rigueur est très
        importante dans le travail en équipe — où les oublis et imprécisions des
        uns retombent sur les autres — elle reste tout aussi nécessaire lorsque
        l'on travaille seule : c'est elle qui garantit un{" "}
        <strong>résultat qualitatif</strong>, même sans regard extérieur.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Mon autocritique
      </h2>
      <p className="text-body leading-relaxed">
        <strong>Niveau de maîtrise.</strong> Je maîtrise{" "}
        <strong>partiellement cette compétence</strong> : je suis de nature
        rigoureuse, mais j'ai encore des réflexes à consolider qui affineront
        progressivement ma rigueur d'un point de vue développement — penser
        systématiquement à tous les cas de tests, ne jamais laisser de
        `console.log`, écrire des commentaires précis.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Place dans mon profil.</strong> Cette compétence est prioritaire
        dans mon métier de développeuse : elle{" "}
        <strong>
          conditionne directement la qualité du code livré, la fiabilité des
          reviews que je réalise et la clarté de la documentation que je partage
        </strong>
        . Dans une équipe, un manque de rigueur individuel devient vite un coût
        collectif.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Vitesse d'acquisition.</strong>{" "}
        <strong>
          Cette compétence s'accroît naturellement avec l'expérience
        </strong>{" "}
        : contrairement à d'autres, elle ne s'acquiert pas d'un coup mais se
        construit progressivement, à mesure que les bonnes pratiques deviennent
        des automatismes.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Mon conseil.</strong> Pour la développer, il faut développer,
        tout simplement : c'est en pratiquant que l'on identifie les patterns
        réguliers — les commentaires à préciser, les `console.log` à ne pas
        oublier de retirer, les cas de tests à penser — qui reviennent
        systématiquement. C'est cette répétition qui permet d'acquérir des
        réflexes naturels pour appliquer les bonnes pratiques sans y penser.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Mon évolution dans cette compétence
      </h2>
      <p className="text-body leading-relaxed">
        Je souhaite continuer à améliorer cette compétence dans mon métier de
        développeuse informatique, avec l'objectif à moyen terme d'atteindre un
        niveau où les bonnes pratiques seront devenues des automatismes
        complets. Pour cela, ma méthode est claire :
        <strong>
          {" "}
          persévérer, développer des solutions, et surtout identifier
          systématiquement les points où j'ai pu manquer de rigueur
        </strong>{" "}
        — notamment grâce aux retours de reviews de mon équipe — afin de
        m'améliorer en continu. Il s'agit moins d'une formation théorique que
        d'une autoformation par la pratique : chaque projet, chaque PR et chaque
        retour de reviewer est une occasion d'affiner mes réflexes. À terme, je
        souhaite que cette rigueur me permette aussi d'être une reviewer fiable
        pour mon équipe, capable de détecter les imprécisions dans le code des
        autres avec la même exigence que celle que j'applique au mien.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Principales réalisations rattachées à cette compétence
      </h2>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/projets/hackathon-ia"
          className="text-primary underline hover:no-underline"
        >
          Hackathon IA — rigueur nécessaire pour livrer un produit démontrable
          en seulement deux jours
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/projets/migration-vuetify"
          className="text-primary underline hover:no-underline"
        >
          Migration Vuetify 2 → 3 — protocole rigoureux pour ne rien oublier
          lors de la migration des composants
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/projets/sitemap-nuxt-strapi"
          className="text-primary underline hover:no-underline"
        >
          Sitemap dynamique Nuxt & Strapi — respect des conventions et usage
          rigoureux des helpers, middlewares et plugins
        </NavLink>
      </p>
    </article>
  );
}
