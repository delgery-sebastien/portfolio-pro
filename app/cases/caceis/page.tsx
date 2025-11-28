import CaseFeature from '@/components/CaseFeature'
import { BulletList } from '@/components/BulletList'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getSiteUrl } from '@/lib/site'

const SITE = getSiteUrl()

export const metadata: Metadata = {
  title: 'CACEIS — Commando VBA pour le clearing Dérivés listés',
  description:
    'Mission commando/DevOps métier pour fiabiliser les outils VBA/Oracle du département Dérivés listés Caceis.',
  alternates: { canonical: `${SITE}/cases/caceis` },
}


export default function CaceisCase() {
  return (
    <>
      <section className="container pt-8 prose prose-invert">
        <h1>CACEIS — Commando VBA pour le clearing Dérivés listés</h1>
        <p>
          <strong>Rôle :</strong> Consultant développeur VBA / SQL senior
        </p>
        <p>
          Mission commando pour sécuriser la chaîne de rapprochement titres et dérivés. J’ai rejoint
          l’équipe Support Métier afin de stabiliser les outils Excel/VBA critiques, industrialiser
          les échanges Datamart Oracle, Ubix, Lisa et doter les analystes d’une vision temps réel de
          leurs traitements de fin de journée.
        </p>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Contexte</h2>
        <p>
          La département Dérivés listés devait fiabiliser ses contrôles post-trade sur un périmètre
          multi-places. Les outils historiques reposaient sur des macros isolées et peu documentées,
          avec des échanges de fichiers manuels et un suivi limité de la production.
        </p>
        <div>
          <h3>Objectifs</h3>
          <BulletList
            variant="target"
            items={[
              'Sécuriser les rapprochements et limiter la dépendance aux saisies manuelles',
              'Centraliser les journaux d’exécution pour le pilotage run & change',
              'Réduire le temps de mise à disposition des rapports EoD',
              'Maintenir une expérience Excel familière pour les équipes métier',
            ]}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <h3>Solution livrée</h3>
            <BulletList
              variant="cube"
              items={[
                'Refonte des macros clés en VBA structuré et versionné',
                'Portail de lancement sécurisé avec profils utilisateurs',
                'Conception de datamarts métier spécialisés',
                'Mode opératoire intégré pour l’onboarding des équipes',
              ]}
            />
          </div>
          <div>
            <h3>Résultats</h3>
            <BulletList
              variant="check"
              items={[
                'Disponibilité des rapports avancée de plusieurs heures',
                'Traçabilité exhaustive des traitements et alertes proactives',
                '90 % des rapprochements clearing/CCP automatisés',
                'Equipe métier autonome sur la maintenance de premier niveau',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Déploiement via ruban Office personnalisé</h2>
        <p>
          Les outils ont été déployés auprès des utilisateurs par l’intermédiaire d’un portail et
          d’un ruban intégré à Microsoft Excel. L’interface expose les traitements adaptés au profil
          de l’utilisateur et applique automatiquement les paramètres techniques (bases, chemins,
          droits).
        </p>
        <BulletList
          variant="check"
          items={[
            'Ruban dynamique piloté par profil Active Directory',
            'Gestion centralisée des versions et mises à jour',
            'Documentation contextuelle directement dans l’interface',
          ]}
        />
        <div className="not-prose my-10">
          <Image
            src="/cases/caceis/custom-ribbon.webp"
            alt="Ruban Excel personnalisé pour le déploiement des outils CACEIS"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Pilotage temps réel des traitements EoD</h2>
        <p>
          Un tableau de bord consolidé permet au run de suivre l’état d’avancement des intégrations,
          d’identifier les goulets d’étranglement et de documenter les actions correctives.
        </p>
        <BulletList
          variant="check"
          items={[
            'Statuts consolidés par brique fonctionnelle',
            'Alertes automatiques en cas de dérive de temps',
            'Historisation des performances pour le capacity planning',
          ]}
        />
        <div className="not-prose my-10">
          <Image
            src="/cases/caceis/eod-status.webp"
            alt="Tableau de bord de suivi des traitements EoD"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
          <i>(*) Données anonymisées ; proportions conformes aux résultats obtenus.</i>
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Automatisation du rapprochement Clearing / CCP</h2>
        <p>
          Des procédures stockées itératives Oracle orchestrent les rapprochements dès réception des
          fichiers des chambres de compensation. Les contrôles de cohérence réduisent drastiquement
          les rejets et sécurisent les écritures comptables.
        </p>
        <BulletList
          variant="check"
          items={[
            'Matching multi-critères (produit, sens, quantités, devise, etc.)',
            'Journalisation détaillée pour les revues de conformité',
            'Mode dégradé planifié en cas d’indisponibilité d’une source',
          ]}
        />
        <div className="not-prose my-10">
          <Image
            src="/cases/caceis/eod-matching-rate.webp"
            alt="Taux d’automatisation du rapprochement clearing"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
          <i>(*) Données anonymisées ; proportions conformes aux résultats obtenus.</i>
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Interface de contrôle manuel assisté</h2>
        <p>
          Les transactions résiduelles sont traitées dans une interface Excel/VBA qui guide
          l’analyste du Back Office pas à pas. Les contrôles métiers et la génération de clés
          uniques garantissent la traçabilité des ajustements.
        </p>
        <BulletList
          variant="check"
          items={[
            'Contrôles de cohérence en temps réel avant validation',
            'Historisation des actions et horodatage automatique',
            'Exports prêts à l’emploi pour le back-office et l’audit',
          ]}
        />
        <div className="not-prose my-10">
          <Image
            src="/cases/caceis/matching-auto.webp"
            alt="Interface de rapprochement manuel assisté"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Industrialisation des KPIs Client</h2>
        <p>
          L’équipe client a pu mesurer ses progrès et ajuster ses priorités en temps réel —
          validation directe par le partenaire, qui a salué la clarté des nouveaux indicateurs.
          Au-delà de la valorisation interne, ces KPI sont devenus un point d’appui de la relation
          client, permettant de parler chiffres et résultats plutôt que ressenti ou perception.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <BulletList
              variant="cube"
              items={[
                'Centralisation des indicateurs et automatisation de la mise à jour.',
                'Lecture simple, homogène, adaptée aux échanges managers / clients.',
                'Réduction des tâches manuelles et fiabilisation des données source.',
                'Adoption rapide grâce à une ergonomie “métier”, pensée pour les équipes terrain.',
                'Meilleure réactivité sur les anomalies et les volumes exceptionnels.',
              ]}
            />
          </div>
          <div>
            <BulletList
              variant="check"
              items={[
                'Diminution des erreurs et des écarts non détectés',
                'Gain de temps sur la préparation des comités hebdomadaires',
                'Amélioration de la confiance client et fluidité des échanges opérationnels',
              ]}
            />
          </div>
        </div>
        <div className="not-prose my-10">
          <Image
            src="/cases/caceis/kpi-client.webp"
            alt="Tableau de bord des KPIs Client industrialisés"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
          <i>(*) Données anonymisées ; proportions conformes aux résultats obtenus.</i>
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Outil de gestion des grilles tarifaires – Contrôle et fiabilisation des fees</h2>
        <p>
          Conçu pour centraliser et fiabiliser la gestion des conditions tarifaires des marchés
          dérivés, l’outil permet la saisie directe des taux et commissions par marché et produit,
          avec enregistrement automatique en base de données. Chaque grille devient ainsi la
          référence contractuelle pour le calcul des fees attendues et le rapprochement avec la
          facturation réelle. Les utilisateurs peuvent ajouter ou supprimer des marchés, ajuster les
          valeurs, sauvegarder et générer les documents contractuels en quelques clics, sans
          dépendre d’interventions techniques.
        </p>
        <h3>Bénéfices</h3>
        <div>
          <BulletList
            variant="check"
            items={[
              'Consolidation des données tarifaires dans une structure unique et traçable.',
              'Élimination des écarts entre contrat, static data, facturation et reporting.',
              'Réduction des risques d’erreur et des oublis de facturation.',
              'Autonomie renforcée des équipes dans la gestion des conditions clients.',
            ]}
          />
        </div>

        <div className="not-prose my-10">
          <Image
            src="/cases/caceis/grilles-tarifaires.webp"
            alt="Interface de rapprochement manuel assisté"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
          <i>(*) Données anonymisées ; proportions conformes aux résultats obtenus.</i>
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Addin Datamart des transactions – autonomie et traçabilité des analyses</h2>
        <p>
          Développé pour les équipes Client Services et Contrôles, cet addin transforme Excel en
          véritable outil de requêtage métier. L’utilisateur choisit librement les champs à afficher
          (dates, comptes, instruments, commissions, KPI, etc.), définit ses filtres (marchés,
          apporteurs, périodes…) et génère instantanément ses tableaux d’analyse. Chaque
          configuration peut être enregistrée, réutilisée ou partagée au sein du service,
          garantissant la cohérence des extractions et la traçabilité des analyses.
        </p>

        <CaseFeature
          title="Bénéfices"
          imgSrc="/cases/caceis/datamart-selection.webp"
          imgAlt="Addin Datamart des transactions – autonomie et traçabilité des analyses"
          priority={false}
        >
          <div>
            <BulletList
              variant="target"
              items={[
                'Autonomie totale des utilisateurs dans la construction de leurs rapports.',
                'Réduction des demandes d’extraction au service IT.',
                'Cohérence et traçabilité des critères utilisés.',
                'Gain de temps considérable dans la préparation des reportings clients.',
              ]}
            />
          </div>
        </CaseFeature>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Extracteur de données standardisé</h2>
        <p>
          Conception d'un outil d’extraction générique sous Excel (modèle .xltm, 3 onglets),
          paramétrable par l’équipe support et publiable en quelques minutes pour les utilisateurs.
          On définit la source, la requête, les paramètres et quelques options de mises en page ; on
          clique "Package" : le paramétrage est masqué et l’utilisateur n’a plus qu’à saisir ses
          filtres et lancer l’extraction. Environ 50–60 extracteurs livrés et utilisés au quotidien
          chez CACEIS, tous homogènes, traçables, rapides à déployer et faciles à maintenir.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <h3>Bénéfices</h3>
            <div>
              <BulletList
                variant="check"
                items={[
                  'Déploiement ultra-rapide (quelques minutes par extracteur).',
                  'Homogénéité des exports (mêmes conventions, mêmes options).',
                  'Maintenance simplifiée (même socle technique, même documentation).',
                  'Traçabilité des requêtes/paramètres (journalisation, version).',
                  'Réduction des demandes ad hoc au support/IT.',
                ]}
              />
            </div>
          </div>
          <div>
            <h3>Fonctionnement (3 onglets)</h3>
            <div>
              <BulletList
                variant="check"
                items={[
                  'Paramétrage (support) : source (ODBC/ODBC DSN/connexion), requête SQL, N paramètres, options (mise en page, déclenchement, export)',
                  'Accueil utilisateur : titre, texte d’usage, champs de paramètres ➜ Extract.',
                  'Data : extraction directe dans Excel avec mise en forme automatique.',
                  'Optionnels : des onglets peuvent être ajoutés au cas par cas, avec TCD automatiquement mis à jour lors de l’execution',
                ]}
              />
            </div>
          </div>
        </div>
        <div className="not-prose my-10">
          <Image
            src="/cases/caceis/extracteur-template.webp"
            alt="Extracteur de données standardisé - paramétrage et usage"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
        </div>
      </section>

      <section className="container pt-8 prose prose-invert">
        <h2>Analyse de l’usage et des performances des outils</h2>
        <p>
          Des tableaux de bord permettent d’analyser l’activité des utilisateurs et les performances
          de la solution. Les irritants et goulots d’étranglements sont ainsi détectés ce qui permet
          de cibler l’amélioration continue DevOps. Des analyses complémentaires permettent
          d’observer l’exploitation de la couverture fonctionnelle et connaître les fonctionnalités
          les mieux adoptées, ou les besoins en formation complémentaire.
        </p>
        <BulletList
          variant="check"
          items={[
            'Mesure des actions par profil d’utilisateur',
            'Identification des modules les moins utilisés et nécessitant un accompagnement renforcé',
            'Détection des chutes de performance et des goulots d’étranglement',
            'Alertes sur les comportements à risque (copie locale, macros désactivées)',
          ]}
        />
        <div className="not-prose my-10">
          <Image
            src="/cases/caceis/admin-usage.webp"
            alt="Tableau de bord de suivi des traitements EoD"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
            className="w-full h-auto rounded-2xl border border-card"
          />
          <i>(*) Données anonymisées ; proportions conformes aux résultats obtenus.</i>
        </div>
      </section>

      <section className="container pt-8 pb-16 prose prose-invert">
        <h2>Accélérer vos projets de production back-office</h2>
        <p>
          Besoin d’un renfort commando pour fiabiliser vos macros critiques ou industrialiser une
          chaîne VBA / SQL&nbsp;? Parlons-en.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Discuter de votre projet
          </Link>
          <a href="/downloads/CV_DELGERY_Sebastien.pdf" className="btn btn-ghost" download>
            Télécharger mon CV
          </a>
        </div>
      </section>
    </>
  )
}
