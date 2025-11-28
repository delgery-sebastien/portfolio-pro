import CaseFeature from '@/components/CaseFeature'
import { BulletList } from '@/components/BulletList'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'OMNES Éducation — Harmonisation des programmes & budgets',
  description:
    'Transformation d’un mille-feuille Excel en référentiel pédagogique et budgétaire piloté via SQL et Power BI.',
  alternates: { canonical: '/cases/omnes-education' },
}


export default function OmnesCase() {
  return (
    <>
      <section className="container pt-8 prose prose-invert">
        <h1>OMNES Éducation — Harmonisation des programmes & budgets</h1>
        <p>
          <strong>Rôle :</strong> Consultant développeur VBA / SQL senior
        </p>
        <p>
          En renfort de la direction des programmes et du contrôle de gestion groupe, j'ai repris un
          projet stratégique pour aligner les différentes écoles du groupe sur un même référentiel
          pédagogique et budgétaire. Objectif&nbsp;: transformer un mille-feuille de fichiers Excel
          en un socle commun harmonisé, consolidé et pilotable.
        </p>
      </section>

      <CaseFeature
        title="Contexte"
        imgSrc="/cases/omnes-education/workflow-func.webp"
        imgAlt="Schéma des flux entre Excel, Access et SQL Server"
        imgAlign="center"
        priority
      >
        <p>
          Les directions locales travaillaient sur des fichiers disparates, sans vision consolidée.
          La DAF groupe devait fiabiliser ses arbitrages budgétaires et réduire les allers-retours
          lors des campagnes de construction de programmes. La direction des programmes souhaitait
          réduire les erreurs de saisie, la charge manuelle et les délais de consolidation.
        </p>
        <h3>Objectifs</h3>
        <BulletList
          variant="target"
          items={[
            'Structurer et fiabiliser la gestion des programmes et budgets',
            'Centraliser les données dans un modèle commun',
            'Automatiser le workflow de révision budgétaire',
            'Améliorer la visibilité et la cohérence nationale',
            "Doter la direction d'indicateurs partagés",
          ]}
        />
      </CaseFeature>

      <CaseFeature
        title="Solution livrée"
        imgSrc="/cases/omnes-education/omnes-samples.webp"
        imgAlt="Interface Excel harmonisée pour OMNES Éducation"
        reverse
      >
        <BulletList
          variant="cube"
          items={[
            'Outils Excel VBA centralisé connecté à Access, puis SQL Server',
            'Automatisation complète de la construction des programmes et du cycle budgétaire',
            'Interfaces ergonomiques pour les directions locales',
            'Restitutions Excel et Power BI pour visualisation consolidée',
            'Accompagnement au changement et transfert de compétences',
          ]}
        />
        <h3>Résultats</h3>
        <BulletList
          variant="check"
          items={[
            'Campagnes budgétaires réduites de plusieurs semaines',
            'Réduction des écarts de saisie grâce aux validations embarquées',
            'Adoption rapide grâce à l’ergonomie Excel familière',
            'Pilotage du processus à l’échelle groupe via tableaux de bord Power BI',
          ]}
        />
      </CaseFeature>

      <section className="container pt-8 prose prose-invert">
        <h2>Structuration pédagogique assistée</h2>
        <p>
          Cette brique centrale constitue le socle du dispositif. Chaque école y définit la
          structure de ses programmes : matières, UEP, volumes horaires par modalité (synchrone,
          asynchrone, autonomie, évaluation, stage, etc.). Des contrôles de cohérence assurent la
          conformité avec le référentiel groupe et les exigences réglementaires. La barre d’outils,
          simple et ergonomique, guide la saisie : ajout de modules, suppression, validation finale.
        </p>
        <h3>Fonctionnalités clés</h3>
        <BulletList
          variant="check"
          items={[
            'Interface de saisie ergonomique et assistée permettant la construction de programmes d’études conformes.',
            'Contrôles en ligne sur volumes horaires, les prérequis réglementaires et la gestion des crédits ECTS.',
            'Validation et synchronisation automatique vers la base centrale (Access dans 1er temps, puis SQL Server).',
          ]}
        />
        <div className="not-prose my-10">
          <Image
            src="/cases/omnes-education/structure.webp"
            alt="Interface de structuration des programmes"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Maquette pédagogique et valorisation budgétaire</h2>
        <p>
          À partir des structures pédagogiques validées, chaque campus dispose d’une maquette
          opérationnelle par famille de programmes (Grande École, MSc, Bachelor, etc.). Les équipes
          y renseignent les activités, effectifs prévisionnels, volumes horaires et coûts associés
          afin d’obtenir une estimation budgétaire consolidée. Les contrôles automatiques
          garantissent la conformité avec les réglementations et référentiels groupe, tout en
          laissant une marge d’adaptation locale sous validation. Auparavant, ce processus était
          manuel et fastidieux.
        </p>
        <h3>Fonctionnalités clés</h3>
        <BulletList
          variant="check"
          items={[
            'Consolidation automatique des données structurelles et budgétaires par campus.',
            'Respect des cadres réglementaires (RNCP, financement, certifications).',
            'Contrôles intégrés et possibilité d’ajustement encadré des contenus.',
            'Réduction significative du temps de traitement par rapport au processus manuel antérieur.',
          ]}
        />
        <div className="not-prose my-10">
          <Image
            src="/cases/omnes-education/maquette-pedago.webp"
            alt="Interface de structuration des programmes"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Accompagnement du changement embarqué</h2>
        <p>
          Une documentation est directement intégrée aux outils pour faciliter la prise en main par
          les utilisateurs. L'aide est intégrée soit par un onglet dédié, soit via des info-bulles
          contextuelles.
        </p>
        <div className="not-prose my-10">
          <Image
            src="/cases/omnes-education/modop.webp"
            alt="Mode opératoire intégré dans l’outil"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Tableaux de bord pour le pilotage du processus</h2>
        <p>
          Des tableaux de bord automatisés permettent le suivi de l’avancement du processus. Les
          données sont directement extraites de la base de données. Les segments permettent de
          cibler tout ou partie du périmètre pour cibler les retards potentiels.
        </p>
        <BulletList
          variant="check"
          items={[
            'Statuts temps réel issus de la base SQL',
            'Indicateurs d’activité par établissement et par rôle',
            'Exports instantanés pour les comités hebdomadaires',
          ]}
        />
        <div className="not-prose my-10">
          <Image
            src="/cases/omnes-education/suivi-process.webp"
            alt="Tableau de bord de suivi de processus"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Analyse des usages et amélioration continue</h2>
        <p>
          Un monitoring dédié observe l’exploitation des fonctionnalités, détecte les irritants et
          alimente le plan d’amélioration continue DevOps.
        </p>
        <BulletList
          variant="check"
          items={[
            'Mesure des actions par type d’utilisateur',
            'Identification des modules les moins utilisés et nécessitant un accompagnement renforcé',
            'Détection des chutes de performance et des goulots d’étranglement',
            'Alertes sur les comportements à risque (copie locale, macros désactivées)',
          ]}
        />
        <div className="not-prose my-10">
          <Image
            src="/cases/omnes-education/suivi-admin.webp"
            alt="Tableau de bord d’analyse d’usage"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Mise à disposition via Power BI</h2>
        <p>
          Des tableaux de bord sont déployés par le canal Power BI pour la consultation par la
          direction. Ils permettent le suivi de l'avancement du processus et contrôle de
          l'harmonisation nationale des programmes. Conçu comme un démonstrateur, il préfigure le
          déploiement d’un outil groupe de pilotage et de reporting unifié.
        </p>
        <div className="not-prose my-10">
          <Image
            src="/cases/omnes-education/power-bi.webp"
            alt="Exemple de rapport Power BI pour OMNES Éducation"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Synthèse pour la direction des programmes</h2>
        <p>
          Les maquettes pédagogiques validées sont agrégées automatiquement dans une vue consolidée
          couvrant tous les campus et familles de programmes. Cette synthèse permet à la direction
          des programmes de suivre en temps réel les volumes horaires, effectifs prévisionnels, les
          coûts d’enseignement et les écarts budgétaires par rapport aux objectifs du groupe.
          L’arborescence hiérarchique offre une lecture claire par école, campus tout en permettant
          l'accès direct aux données détaillées. La génération de cette vue ne prend que quelques
          secondes.
        </p>
        <BulletList
          variant="check"
          items={[
            'Consolidation instantanée des données multi-campus.',
            'Analyse globale des coûts, volumes horaires et écarts.',
            'Support décisionnel pour l’ajustement des politiques pédagogiques et budgétaires.',
          ]}
        />
        <div className="not-prose my-10">
          <Image
            src="/cases/omnes-education/synthese-programmes.webp"
            alt="Exemple de rapport Power BI pour OMNES Éducation"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Synthèse consolidée pour le contrôle de gestion</h2>
        <p>
          Les données consolidées des maquettes pédagogiques sont croisées avec les budgets du
          contrôle de gestion afin d’identifier les écarts entre prévisions et réalisations. La
          réconciliation intègre les hypothèses d’effectifs (nouveaux entrants, redoublants,
          abandons) et restitue une vue homogène entre services. Ce travail transversal renforce la
          cohérence entre les processus pédagogiques et financiers, tout en fiabilisant les
          reportings consolidés.
        </p>
        <BulletList
          variant="check"
          items={[
            'Comparaison automatique entre maquettes et budgets validés CdG.',
            'Analyse des écarts par école, campus et scénario d’effectifs.',
            'Consolidation pédagogique et financière au niveau groupe.',
          ]}
        />
        <div className="not-prose my-10">
          <Image
            src="/cases/omnes-education/synthese-finance.webp"
            alt="Exemple de rapport Power BI pour OMNES Éducation"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Rapprochement de référentiels – continuité assurée entre systèmes</h2>
        <p>
          Pour pallier le retard du projet Newton (Salesforce) et éviter une ressaisie complète des
          données, un outil de matching automatisé a été développé. Il compare et rattache les
          programmes des campagnes successives entre Excel et Newton, en s’appuyant sur des clés
          uniques et des contrôles de cohérence. Cette approche a permis d’assurer la reprise des
          données, de fiabiliser le référentiel et de maintenir la continuité opérationnelle entre
          deux systèmes en transition.
        </p>
        <BulletList
          variant="check"
          items={[
            'Alignement automatique entre les programmes Excel et le référentiel Salesforce (Newton).',
            'Génération de clés uniques et levée des incohérences.',
            'Sécurisation de la transition et conservation de l’historique des données.',
          ]}
        />
        <div className="not-prose my-10">
          <Image
            src="/cases/omnes-education/matching-newton.webp"
            alt="Exemple de rapport Power BI pour OMNES Éducation"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
        </div>
      </section>

      <section className="container pt-8 pb-16 prose prose-invert">
        <h2>Structurer vos campagnes budgétaires multi-sites</h2>
        <p>
          Vous cherchez à harmoniser des outils Excel disparates ou à connecter vos maquettes
          pédagogiques à une base SQL / Power BI&nbsp;? Je peux vous aider à franchir le cap.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Planifier un échange
          </Link>
          <a href="/downloads/CV_DELGERY_Sebastien.pdf" className="btn btn-ghost" download>
            Télécharger mon CV
          </a>
        </div>
      </section>
    </>
  )
}
