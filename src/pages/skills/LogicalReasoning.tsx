import { NavLink } from "react-router-dom";

export default function LogicalReasoning() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 space-y-4">
      <h1 className="text-3xl font-bold text-heading">Raisonnement logique</h1>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Ma définition
      </h2>
      <p className="text-body leading-relaxed">
        Le <strong>raisonnement logique</strong> est la capacité à{" "}
        <strong>
          analyser et à déduire en se basant sur des faits et des prémisses
        </strong>
        . Dans le métier de développeur web, c'est la compétence qui permet de{" "}
        <strong>concevoir, développer et déboguer</strong> : elle est
        essentielle au code, qui repose entièrement — ou presque — sur la
        logique. Écrire un programme, c'est enchaîner des conditions, des causes
        et des conséquences ; le moindre raisonnement erroné produit un
        comportement erroné.
      </p>
      <p className="text-body leading-relaxed">
        La <strong>déduction</strong> joue un rôle particulier dans le{" "}
        <strong>débogage</strong> : face à un bug, le développeur part de faits
        observés (un comportement anormal, un message d'erreur, une valeur
        inattendue) et remonte par déduction jusqu'à la cause, en éliminant les
        hypothèses une à une. Le raisonnement logique est ainsi une{" "}
        <strong>compétence socle</strong> : c'est elle qui permet de mettre en
        œuvre les autres compétences de mon profil — l'analyse du besoin, la
        conception de solution ou encore la pédagogie reposent toutes sur la
        capacité à structurer une pensée rigoureuse.
      </p>
      <p className="text-body leading-relaxed">
        Cette compétence reste{" "}
        <strong>plus centrale que jamais malgré l'essor de l'IA</strong> : si
        les outils d'IA générative accélèrent l'écriture du code,{" "}
        <strong>
          le débogage, la validation et l'architecture restent des activités
          profondément humaines
        </strong>
        , qui exigent de comprendre et de vérifier ce que la machine produit.
        C'est ce que met en évidence{" "}
        <a
          href="https://www.itpro.com/software/development/ai-software-development-2026-vibe-coding-security"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:no-underline"
        >
          cet article d'ITPro sur le développement logiciel assisté par IA en
          2026
        </a>{" "}
        : à l'heure du « vibe coding », la capacité à raisonner sur le code —
        plutôt qu'à simplement le générer — devient le vrai différenciateur,
        notamment sur les questions de fiabilité et de sécurité.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Mes éléments de preuve
      </h2>
      <h3 className="text-xl font-semibold text-heading mt-6">
        Comprendre la réactivité de Vue à mon arrivée en alternance
      </h3>
      <p className="text-body leading-relaxed">
        À mon arrivée en alternance, j'ai dû comprendre la{" "}
        <strong>réactivité du framework Vue</strong>, un des mécanismes les plus
        subtils de cette technologie : comment le framework détecte les
        changements de données et met automatiquement à jour l'interface. Cette
        compréhension m'a demandé un véritable travail de{" "}
        <strong>logique et d'analyse</strong>, notamment autour des{" "}
        <strong>composables</strong> (fonctions réutilisables encapsulant de la
        logique réactive) et des <strong>valeurs calculées</strong> — les{" "}
        <strong>computed</strong> — dont il faut comprendre précisément quand et
        pourquoi elles se recalculent.
      </p>
      <p className="text-body leading-relaxed">
        Ma démarche a été méthodique et illustre le raisonnement logique en
        action : <strong>lire la documentation</strong> pour établir les faits
        et les prémisses (comment la réactivité est censée fonctionner), puis{" "}
        <strong>tester et expérimenter</strong> pour confronter ces prémisses à
        la réalité — formuler une hypothèse sur le comportement d'un composable
        ou d'une computed, écrire un cas de test, observer le résultat, et
        ajuster ma compréhension lorsque l'observation contredisait mon
        hypothèse.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Résultat et valeur ajoutée</strong> : j'ai acquis une
        compréhension solide du système de réactivité de Vue, qui me permet
        aujourd'hui de développer et de déboguer efficacement sur la stack du
        projet — de prédire le comportement du code réactif plutôt que de le
        subir. Ma valeur ajoutée a été de ne pas me contenter d'un usage
        superficiel du framework : en raisonnant sur son fonctionnement interne,
        j'ai gagné en autonomie et en fiabilité, ce qui m'a permis de monter
        rapidement en compétence sur les projets de mon alternance.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Mon autocritique
      </h2>
      <p className="text-body leading-relaxed">
        <strong>Mon niveau de maîtrise</strong> : je considère{" "}
        <strong>
          maîtriser globalement cette capacité pour les problèmes de code de
          difficulté facile et moyenne
        </strong>
        . Il me reste à renforcer cette capacité sur les{" "}
        <strong>problèmes de code plus complexes</strong>, où le nombre de faits
        à tenir simultanément en tête et la profondeur des chaînes de déduction
        augmentent fortement.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Sa place dans mon profil</strong> : c'est sans doute la
        compétence la plus <strong>fondamentale</strong> de mon profil de
        développeur — celle qui sous-tend toutes les autres. Concevoir une
        solution, analyser un besoin, expliquer un concept technique : tout
        repose in fine sur la capacité à raisonner de manière logique. C'est pourquoi je la
        considère comme prioritaire, non pas à acquérir (elle est déjà
        présente), mais à <strong>muscler continuellement</strong>.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Mon recul et mes conseils</strong> : pour développer cette
        compétence, j'ai identifié trois pratiques : <strong>coder</strong>,
        encore et toujours, car le raisonnement logique s'entretient comme un
        muscle ;{" "}
        <strong>étudier des solutions et des patterns complexes</strong>, qui
        exposent à des raisonnements plus élaborés que les siens ; et{" "}
        <strong>lire la documentation des stacks que l'on utilise</strong>, pour
        en comprendre même les aspects les plus complexes — par exemple,
        comprendre la réactivité du framework Vue dans toute sa profondeur, et
        non seulement en surface. Mon conseil : ne jamais accepter qu'un code «
        marche sans qu'on sache pourquoi » — chaque zone d'ombre non élucidée
        est un raisonnement qu'on s'est épargné, et une occasion de progression
        manquée.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Mon évolution dans cette compétence
      </h2>
      <p className="text-body leading-relaxed">
        Dans mon <strong>projet personnel et professionnel</strong>, je souhaite
        porter cette compétence à un niveau me permettant d'aborder sereinement
        des problèmes de code de <strong>haute complexité</strong> : à moyen
        terme, mon objectif est de raisonner avec la même aisance sur des
        systèmes complexes que sur des problèmes simples aujourd'hui, et d'
        <strong>accroître ma vélocité</strong> — c'est-à-dire réduire le temps
        entre l'apparition d'un problème et l'identification de sa cause ou de
        sa solution.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Pour y parvenir</strong>, je compte m'exposer volontairement à
        la difficulté :{" "}
        <strong>comprendre des patterns encore plus complexes</strong>, me
        confronter à des{" "}
        <strong>problèmes de code encore plus exigeants</strong> — dans mes
        projets d'alternance comme dans mes projets personnels —, et poursuivre
        la lecture approfondie des documentations et des sources des outils que
        j'utilise. Cette autoformation continue, faite de pratique délibérée et
        d'étude, est le moyen le plus direct de renforcer ma capacité de
        raisonnement logique et la rapidité avec laquelle je la mobilise.
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
          Hackathon IA — raisonnement pour concevoir un agent conversationnel
          pertinent en deux jours
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/projets/migration-vuetify"
          className="text-primary underline hover:no-underline"
        >
          Migration Vuetify 2 → 3 — compréhension de la réactivité de Vue par
          déduction et expérimentation
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/projets/shopwise"
          className="text-primary underline hover:no-underline"
        >
          Shopwise — raisonnement sur le modèle de données au fil de
          l'affinement du domaine métier
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/projets/sitemap-nuxt-strapi"
          className="text-primary underline hover:no-underline"
        >
          Sitemap dynamique Nuxt & Strapi — arbitrage logique entre
          automatisation, performance et maintenabilité
        </NavLink>
      </p>
    </article>
  );
}
