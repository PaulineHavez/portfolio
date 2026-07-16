import { NavLink } from "react-router-dom";

export default function QuestionOneSelf() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 space-y-4">
      <h1 className="text-3xl font-bold text-heading">
        Capacité de remise en question
      </h1>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Ma définition
      </h2>
      <p className="text-body leading-relaxed">
        La capacité de remise en question, dans le cadre du développement
        informatique, c'est avant tout{" "}
        <strong>
          savoir questionner sa propre solution et son propre raisonnement
        </strong>{" "}
        : accepter que son analyse d'un problème puisse être incomplète, et
        accueillir les critiques de ses collègues comme une opportunité
        d'amélioration plutôt que comme une attaque. Dans un contexte
        professionnel de développement logiciel, cette compétence dépasse le
        simple cadre technique : elle touche aussi à la posture et au
        positionnement que l'on adopte au sein d'une équipe. Le développement,
        lorsqu'il se fait en équipe, est un <strong>travail collectif</strong> —
        code reviews, pair programming, discussions d'architecture — et personne
        ne détient seul la bonne réponse.
      </p>
      <p className="text-body leading-relaxed">
        De manière plus générale,{" "}
        <strong>
          {" "}
          les pratiques de développement évoluent très rapidement
        </strong>
        , ce qui impose d'adapter ses méthodes en continu. L'actualité récente
        l'illustre bien : un article d'ITPro de janvier 2026,{" "}
        <a
          href="https://www.itpro.com/software/development/ai-software-development-2026-vibe-coding-security"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:no-underline"
        >
          AI could truly transform software development in 2026
        </a>
        , décrit comment l'essor de l'IA générative et du « vibe coding »
        bouleverse le métier de développeur. D'après cet article, la grande
        majorité des développeurs utilisent désormais l'IA dans leur travail
        quotidien, mais les gains de productivité sont contrebalancés par une
        hausse des bugs et des failles de sécurité, obligeant les équipes à
        renforcer leurs pratiques de contrôle qualité. Les experts cités
        s'accordent sur un point : les développeurs devront eux-mêmes s'adapter
        et faire évoluer leurs pratiques pour accompagner ces technologies.
        Autrement dit, la remise en question n'est plus une option dans ce
        métier — c'est une condition pour rester pertinent.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Mes éléments de preuve
      </h2>
      <p className="text-body leading-relaxed">
        Je suis apprenante et je travaille en entreprise au sein d'une équipe
        front, sur des sujets variés. Lorsque je propose des solutions, elles
        sont régulièrement challengées par les reviewers de mon équipe, qui
        mettent en lumière les écueils de mes propositions. C'est un exercice
        exigeant mais formateur, qui sollicite directement ma capacité de remise
        en question.
      </p>
      <p className="text-body leading-relaxed">
        <strong> Un exemple concret </strong>: je devais{" "}
        <strong>
          récupérer l'ensemble des langues disponibles pour une page depuis le
          CMS Strapi
        </strong>
        . La solution que j'avais mise en place demandait au client de réaliser
        un appel API par langue possible, et ce pour chaque page. Ma solution
        était fonctionnelle — les tests passaient, le besoin était couvert —
        mais lors de la review de ma pull request, le développeur a pointé un
        problème que je n'avais pas anticipé : cette approche pouvait causer de
        sérieux problèmes de performance, en particulier pour les pages
        affichant des articles de blog traduits en de nombreuses langues, où le
        nombre d'appels explosait.
      </p>
      <p className="text-body leading-relaxed">
        J'ai alors dû remettre en question mon analyse du problème,{" "}
        <strong>
          accepter que ma solution n'était pas viable en l'état, et rebondir
        </strong>
        . En m'appuyant sur les conseils donnés par le développeur, j'ai mis en
        œuvre une nouvelle solution réduisant drastiquement le nombre d'appels
        nécessaires. Le résultat : une fonctionnalité livrée sans risque de
        dégradation des performances pour l'utilisateur final. Ma valeur ajoutée
        dans cette situation n'a pas été d'avoir la bonne solution du premier
        coup, mais <strong>d'avoir su écouter la critique</strong>, comprendre
        le fond du problème (la scalabilité, et pas seulement la fonctionnalité)
        et livrer rapidement une version corrigée et robuste.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Mon autocritique
      </h2>
      <p className="text-body leading-relaxed">
        <strong>Niveau de maîtrise.</strong> Je considère avoir un{" "}
        <strong>bon niveau de maîtrise de cette compétence</strong>. Je remets
        facilement en cause mes solutions et mes analyses, car ma position
        d'apprenante m'aide beaucoup : j'accepte naturellement de ne pas tout
        connaître.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Place dans mon profil.</strong> Cette compétence occupe une
        place centrale dans mon métier de développeuse : elle est{" "}
        <strong>indispensable dès que l'on travaille en collectif</strong>. Sans
        capacité de remise en question, les code reviews deviennent des
        conflits, et l'équipe perd en qualité comme en cohésion.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Mon conseil.</strong> À ceux qui souhaitent développer cette
        compétence, je conseillerais de garder à l'esprit que{" "}
        <strong>
          l'intelligence collective permet en général de construire de belles
          solutions techniques, et que chacun a sa part à apporter — et sa part
          à prendre des autres
        </strong>
        . Recevoir une critique sur son code n'est pas recevoir une critique sur
        sa personne : c'est le point de départ d'une meilleure solution.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Mon évolution dans cette compétence
      </h2>
      <p className="text-body leading-relaxed">
        Je considère cette compétence comme <strong>acquise</strong> à ce stade
        de mon parcours, et je n'identifie pas de besoin de formation spécifique
        la concernant. À plus long terme, j'aimerais aussi passer « de l'autre
        côté » : devenir moi-même une reviewer capable de challenger les
        solutions des autres avec la même bienveillance et la même exigence que
        celles dont je bénéficie aujourd'hui.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Principales réalisations rattachées à cette compétence
      </h2>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/projets/sitemap-nuxt-strapi"
          className="text-primary underline hover:no-underline"
        >
          Gestion multilingue des pages avec le CMS Strapi — refonte de la
          récupération des langues suite à une code review
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/projets/hackathon-ia"
          className="text-primary underline hover:no-underline"
        >
          Hackathon IA — remise en question du rôle à tenir face à une équipe
          mixte technique et non technique
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/projets/shopwise"
          className="text-primary underline hover:no-underline"
        >
          Shopwise — remise en question de l'architecture microservices
          initiale au profit d'une solution plus adaptée
        </NavLink>
      </p>
    </article>
  );
}
