import { NavLink } from "react-router-dom";

export default function EcoCityGuide() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 space-y-4">
      <h1 className="text-3xl font-bold text-heading">
        Eco City Guide — Une carte collaborative des lieux éco-responsables
      </h1>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Présentation du projet
      </h2>
      <p className="text-body leading-relaxed">
        Eco City Guide est un projet que j'ai réalisé en groupe lors de ma
        première année de reconversion pour devenir développeuse. L'application
        avait pour but de créer un site proposant une carte permettant de
        recenser les lieux, commerçants et sites éco-responsables d'une ville.
      </p>
      <p className="text-body leading-relaxed">
        Au sein d'une équipe de quatre personnes, nous avons mené ce projet de
        bout en bout : définition des fonctionnalités attendues pour le MVP (
        <em>Minimum Viable Product</em>), choix des stacks techniques,
        développement, tests et déploiement. Ce travail a été réalisé en équipe,
        parfois en <em>peer coding</em>, parfois en mettant en commun nos
        travaux respectifs.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Objectifs, contexte, enjeux et risques
      </h2>
      <p className="text-body leading-relaxed">
        Ce projet était le fil conducteur de ma formation, à l'issue de laquelle
        je devais passer le titre{" "}
        <strong>Concepteur Développeur d'Applications</strong>. L'objectif était
        de réaliser une application complète avec un back-end et un front-end en{" "}
        <strong>JavaScript</strong>, de mettre en place des tests des
        fonctionnalités et de déployer l'application sur un serveur{" "}
        <strong>VPS</strong>.
      </p>
      <p className="text-body leading-relaxed">
        L'enjeu était double : d'une part concrétiser une application
        fonctionnelle en équipe, d'autre part disposer d'un support solide pour
        la suite, puisque ce projet servirait de base pour la soutenance du
        titre. Le principal risque d'un projet de groupe étalé sur plusieurs
        mois était de ne pas parvenir à finaliser le périmètre fixé, d'où
        l'importance d'avoir défini un MVP réaliste dès le départ.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Les étapes, les acteurs, les interactions et les résultats
      </h2>
      <p className="text-body leading-relaxed">
        <strong>Ce que nous avons fait :</strong> avec mes camarades, nous avons
        travaillé en équipe en suivant une démarche structurée. Nous avons
        d'abord défini ensemble un <em>Minimum Viable Product</em>, puis
        développé les fonctionnalités, chacun intervenant côté back-end et côté
        front-end. Nous avons tous travaillé sur les tests ainsi que sur le
        déploiement de l'application.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Les acteurs et les interactions :</strong> l'équipe était
        composée de quatre développeurs en formation. Les interactions étaient
        constantes : sessions de <em>peer coding</em>, mises en commun
        régulières du travail de chacun, et revues de code mutuelles. Nous avons
        notamment suivi la méthodologie Scrum avec des dailys quotidien, créé
        user stories et des tickets associés dans Jira.{" "}
      </p>
      <p className="text-body leading-relaxed">
        <strong>Les résultats :</strong> ce projet a duré plusieurs mois et nous
        sommes parvenus à finaliser le MVP que nous nous étions fixé, conforme à
        ce que nous voulions.
      </p>
      <p className="text-body leading-relaxed">
        <strong>Les difficultés rencontrées :</strong> l'un des points de
        difficulté a été la découverte des pratiques des projets de
        développement. Travaillant à cette époque en alternance sur un logiciel
        quasiment <em>no code</em>, j'ai appris à cette occasion les bonnes
        pratiques du développement collaboratif : les revues de code ou bien
        encore l'absence de commentaires non résolus dans une{" "}
        <em>pull request</em>.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Les lendemains du projet
      </h2>
      <p className="text-body leading-relaxed">
        Dans la continuité immédiate du projet, j'ai construit mon exposé de
        soutenance en me basant sur cette réalisation, et j'ai{" "}
        <strong>réussi le titre Concepteur Développeur d'Applications</strong>.
        Ce projet a donc pleinement rempli son rôle de fil conducteur de la
        formation.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Mon regard critique
      </h2>
      <p className="text-body leading-relaxed">
        Depuis, mon expérience en temps que développeuse s'est accrue et j'ai
        beaucoup appris. Il est toujours agréable de constater que des notions
        qui ont pu paraître compliquées à l'époque se révèlent finalement très
        claires aujourd'hui.
      </p>
      <p className="text-body leading-relaxed">
        C'est un phénomène que j'observe souvent dans l'apprentissage de
        l'informatique : nous manipulons continuellement des notions abstraites
        et il faut parfois du temps pour assimiler entièrement ces abstractions
        et y trouver un sens. Le recul et la pratique transforment
        progressivement ce qui semblait opaque en évidence.
      </p>
      <h2 className="text-2xl font-semibold text-heading mt-8">
        Compétences rattachées à cette réalisation
      </h2>
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
    </article>
  );
}
