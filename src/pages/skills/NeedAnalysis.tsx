import { NavLink } from "react-router-dom";

export default function NeedAnalysis() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 space-y-4">
      <h1 className="text-3xl font-bold text-heading">Analyse du besoin</h1>
      <h2 className="text-2xl font-semibold text-heading mt-8">Ma définition</h2>
      <p className="text-body leading-relaxed">L'<strong>analyse du besoin</strong>, c'est la capacité à comprendre un <strong>besoin métier</strong> et à en dégager les <strong>enjeux techniques</strong> nécessaires à sa réalisation. En développement informatique, cela consiste à traduire une demande fonctionnelle — souvent exprimée en langage courant par un client, un chef de produit ou un utilisateur — en une compréhension précise de ce qu'il faudra concevoir techniquement.</p>
      <p className="text-body leading-relaxed">Prenons un exemple simple en développement web : *« un utilisateur doit pouvoir ajouter un article dans son panier »*. Derrière cette phrase d'apparence anodine se cachent plusieurs enjeux techniques : il faut <strong>récupérer l'article</strong> (donc pouvoir l'identifier de manière unique), puis <strong>l'ajouter à un panier d'achat associé à un utilisateur</strong> (donc gérer la notion de session ou de compte, la persistance du panier, la relation entre l'utilisateur, le panier et les articles). Analyser le besoin, c'est faire émerger toutes ces implications <strong>avant</strong> d'écrire la première ligne de code, afin de concevoir une solution juste, complète et réalisable.</p>
      <p className="text-body leading-relaxed">Cette compétence est d'autant plus cruciale aujourd'hui que les projets logiciels évoluent sous des <strong>contraintes fortes</strong> : maîtrise des <strong>coûts</strong>, intégration de l'<strong>intelligence artificielle</strong>, exigences de <strong>gouvernance</strong> et de conformité. Comme le montre{" "}
        <a
          href="https://www.techtarget.com/searcherp/feature/How-enterprise-software-planning-is-taking-shape-for-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:no-underline"
        >
          cet article de TechTarget sur la planification des logiciels d'entreprise pour 2026
        </a>
        , les organisations arbitrent de plus en plus finement leurs investissements logiciels : une analyse du besoin rigoureuse en amont est ce qui permet d'éviter les développements inutiles, les dérives budgétaires et les solutions inadaptées.</p>
      <h2 className="text-2xl font-semibold text-heading mt-8">Mes éléments de preuve</h2>
      <h3 className="text-xl font-semibold text-heading mt-6">ShopWise : traduire une liste de fonctionnalités en enjeux techniques</h3>
      <p className="text-body leading-relaxed">Dans le cadre de mon <strong>Master</strong>, j'ai travaillé sur <strong>ShopWise</strong>, une étude de cas comportant différents besoins métier exprimés sous forme de fonctionnalités, telles que : *« un client doit pouvoir se connecter et vérifier ses informations personnelles »*.</p>
      <p className="text-body leading-relaxed">À partir de cette <strong>liste de fonctionnalités</strong>, mon travail a consisté à <strong>identifier les attentes et les contraintes techniques</strong> nécessaires à leur implémentation. Pour la fonctionnalité citée, mon analyse a fait ressortir plusieurs exigences techniques :</p>
      <p className="text-body leading-relaxed">- le client doit être <strong>enregistré en base de données</strong> avec ses informations personnelles et un <strong>mot de passe</strong> (ce qui soulève des questions de modélisation des données et de sécurisation du mot de passe) ;</p>
      <p className="text-body leading-relaxed">- il doit pouvoir <strong>se connecter via une interface</strong> (ce qui implique un mécanisme d'authentification) ;</p>
      <p className="text-body leading-relaxed">- il doit pouvoir <strong>lire ses informations personnelles</strong> — l'opération <strong>READ</strong> en termes techniques, au sens du CRUD (Create, Read, Update, Delete).</p>
      <p className="text-body leading-relaxed"><strong>Résultat et valeur ajoutée</strong> : cette analyse a permis de passer d'une simple phrase fonctionnelle à un <strong>cahier des charges technique exploitable</strong> : modèle de données, opérations à implémenter, contraintes de sécurité. Ma valeur ajoutée a été de ne rien laisser d'implicite — chaque besoin a été décomposé en exigences concrètes, ce qui sécurise l'implémentation et évite les oublis coûteux découverts en cours de développement.</p>
      <h2 className="text-2xl font-semibold text-heading mt-8">Mon autocritique</h2>
      <p className="text-body leading-relaxed"><strong>Mon niveau de maîtrise</strong> : je considère <strong>maîtriser</strong> cette compétence, en ce sens que je sais analyser des besoins <strong>à l'aune de mes connaissances techniques</strong>. Et lorsque mes connaissances ne suffisent pas, j'ai le bon réflexe : je <strong>fais des recherches</strong> pour mieux comprendre le besoin, mieux définir les enjeux techniques, et percevoir les contraintes ainsi que les outils et les données nécessaires. Savoir identifier ce que l'on ne sait pas — et aller le chercher — fait pour moi partie intégrante de l'analyse du besoin.</p>
      <p className="text-body leading-relaxed"><strong>Sa place dans mon profil</strong> : cette compétence est <strong>fondamentale</strong> dans mon métier de développeur web. Elle intervient en amont de tout développement et conditionne la qualité de tout ce qui suit : un besoin mal analysé produit une solution inadaptée, quelle que soit la qualité du code. C'est aussi une compétence charnière entre le métier et la technique, qui fait du développeur un véritable interlocuteur de conception et pas seulement un exécutant.</p>
      <p className="text-body leading-relaxed"><strong>Mon recul et mes conseils</strong> : ce que j'ai compris, c'est que cette compétence <strong>se développe en augmentant ses connaissances techniques et sa connaissance des bonnes pratiques</strong> du développement. Plus mon bagage technique s'élargit, plus mon analyse est fine : je perçois plus vite les implications cachées d'un besoin (sécurité, performance, cas limites). Mon conseil — pour moi-même comme pour les autres — est donc double : ne jamais considérer un besoin comme « évident » sans l'avoir décomposé, et cultiver en permanence sa culture technique, car c'est elle qui nourrit la qualité de l'analyse.</p>
      <h2 className="text-2xl font-semibold text-heading mt-8">Mon évolution dans cette compétence</h2>
      <p className="text-body leading-relaxed">Dans mon <strong>projet personnel et professionnel</strong>, l'analyse du besoin est une compétence que je souhaite porter à un niveau d'expertise : à moyen terme, j'aspire à être capable d'analyser des besoins de plus en plus complexes — systèmes distribués, intégration d'IA, fortes contraintes de sécurité ou de performance — et d'anticiper leurs enjeux techniques avec la même rigueur que sur des cas plus simples.</p>
      <p className="text-body leading-relaxed"><strong>Le chemin pour y parvenir</strong> passe par l'élargissement continu de mes connaissances en développement informatique, cette culture technique accroissant ma capacité d'analyse. Le champ d'apprentissage est ici <strong>infini</strong>, et je m'appuie sur une <strong>veille et une autoformation permanentes</strong> : articles et documentation en ligne, <strong>outils d'IA</strong> utilisés comme assistants d'apprentissage, <strong>revues spécialisées</strong> et <strong>podcasts</strong> techniques. Cette montée en compétence se poursuit également à travers ma formation en Master et les projets concrets — professionnels ou personnels — qui me confrontent à de nouveaux besoins à analyser.</p>
      <h2 className="text-2xl font-semibold text-heading mt-8">Principales réalisations rattachées à cette compétence</h2>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/projets/eco-city-guide"
          className="text-primary underline hover:no-underline"
        >
          Eco City Guide — définition collective du MVP à partir des besoins
          identifiés
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/projets/hackathon-ia"
          className="text-primary underline hover:no-underline"
        >
          Hackathon IA — analyse des besoins en documentation des différentes
          équipes de l'entreprise
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/projets/migration-vuetify"
          className="text-primary underline hover:no-underline"
        >
          Migration Vuetify 2 → 3 — analyse des besoins techniques d'une
          migration sans casser l'existant
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/projets/shopwise"
          className="text-primary underline hover:no-underline"
        >
          Shopwise — étude de cas ShopWise
        </NavLink>
      </p>
      <p className="text-body leading-relaxed">
        -{" "}
        <NavLink
          to="/projets/sitemap-nuxt-strapi"
          className="text-primary underline hover:no-underline"
        >
          Sitemap dynamique Nuxt & Strapi — analyse du besoin de référencement
          et des contraintes de performance
        </NavLink>
      </p>
    </article>
  );
}
