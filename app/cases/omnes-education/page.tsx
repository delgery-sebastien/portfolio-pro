import CaseFeature from "@/components/CaseFeature";
import { BulletList } from "@/components/BulletList"; // <- ta liste standard
import Image from "next/image";

export default function OmnesCase(){
  return (
    <>
      <section className="container pt-8 prose prose-invert">
        <h1>OMNES Éducation — Harmonisation des programmes & budgets</h1>
        <p><strong>Rôle :</strong> Consultant Développeur VBA / SQL Senior</p>
        <p>
          Uniformiser la structure et le suivi des programmes et budgets sur plusieurs écoles,
          avec automatisation Excel/VBA ↔ SQL Server et visualisation Power BI.
        </p>
      </section>

	  <CaseFeature
		  title="Contexte"
		  imgSrc="/cases/omnes-education/image2.png"
		  imgAlt="Schéma des flux : Écoles → Excel/VBA → SQL Server → Power BI"
		  priority
		>
		  <p>
			Le groupe OMNES souhaitait uniformiser la structure et le suivi de ses programmes et budgets répartis sur plusieurs écoles. Les outils existants étaient hétérogènes et peu maintenables.
		  </p>
		  
		  <h3>Objectifs</h3>
		  <div>
		  <BulletList
			variant="target"
			items={[
			  "Structurer et fiabiliser la gestion des programmes et budgets",
			  "Centraliser les données dans un modèle commun",
			  "Automatiser le workflow de révision budgétaire",
			  "Améliorer la visibilité et la cohérence nationale"
			]}
		  /></div>
		</CaseFeature>


		<CaseFeature
		  title="Solution livrée"
		  imgSrc="/cases/omnes-education/image2.png"
		  imgAlt="Schéma des flux : Écoles → Excel/VBA → SQL Server → Power BI"
		  reverse
		>
		  <BulletList
			variant="cube"
			items={[
			  "Outils Excel VBA centralisé connecté à Access/SQL Server",
			  "Automatisation complète du cycle budgétaire",
			  "Interfaces ergonomiques pour directions locales",
			  "Intégration Power BI pour visualisation consolidée",
			  "Formation et transfert de compétences"
			]}
		  />

		  <h3>Résultats</h3>
		  <BulletList
			variant="check"
			items={[
			  "Réduction drastique du temps de consolidation",
			  "Traçabilité et fiabilité renforcées",
			  "Adoption rapide grâce à l’ergonomie Excel",
			  "Pilotage du processus à l’échelle groupe"
			]}
		  />
		</CaseFeature>
		
		
      <section className="container pt-8 prose prose-invert">
		<h2>Développement - Structure pédagogique (Excel/VBA &lt;--&gt; Access/SQL Server)</h2>
        <div>
          La structure pédagogique est la brique centrale du processus et permet aux écoles de définir le contenu de chaque programme. 
		  <BulletList
			variant="check"
			items={[
			  "Interface de saisie ergonomique et assistée permettant la construction de programmes d’études conformes aux exigences du groupe.",
			  "Des contrôles valident la consistance de la saisie.",
			  "Les données sont consolidées dans une base centralisée (MS Access dans un 1er temps, puis migration sous SQL Server dans un 2nd temps)."
			]}
		  />
        </div>
		<div className="not-prose my-10">
		  <Image
			src="/cases/omnes-education/structure.png"
			alt="Aperçu global de l'application harmonisée"
			width={1920}
			height={1080}
			priority
			className="w-full h-auto rounded-2xl border border-slate-800"
		  />
		</div>
      </section>

      <section className="container pt-8 prose prose-invert">
		<h2>Mode opératoire et accompagnement du changement embarqué</h2>
        <p>
          Une documentation est directement intégrée aux outils pour faciliter la prise en main par les utilisateurs.
        </p>
		<div className="not-prose my-10">
		  <Image
			src="/cases/omnes-education/modop.png"
			alt="Aperçu global de l'application harmonisée"
			width={1920}
			height={1080}
			priority
			className="w-full h-auto rounded-2xl border border-slate-800"
		  />
		</div>
      </section>
	
      <section className="container pt-8 prose prose-invert">
		<h2>Tableaux de bord de suivi du processus - Excel/VBA</h2>
        <p>
          Des tableaux de bord automatisés permettent le suivi de l’avancement du processus. Les données sont directement extraites de la base de données. Les segments permettent de cibler tout ou partie du périmètre. 
        </p>
		<div className="not-prose my-10">
		  <Image
			src="/cases/omnes-education/suivi_process.png"
			alt="Aperçu global de l'application harmonisée"
			width={1920}
			height={1080}
			priority
			className="w-full h-auto rounded-2xl border border-slate-800"
		  />
		</div>
      </section>
	  
      <section className="container pt-8 prose prose-invert">
		<h2>Tableaux de bord d'analyse de l'activité des utilisateurs - Excel/VBA</h2>
        <p>
          Des tableaux de bord permettent d’analyser l’activité des utilisateurs et les performances de la solution. Ils permettent l’anticipation d’éventuels retards de processus et d’accompagner les utilisateurs qui en ont le plus besoin. Des analyses complémentaires permettent d’observer l’exploitation de la couverture fonctionnelle et connaître les fonctionnalités les mieux adoptées.
        </p>
		<div className="not-prose my-10">
		  <Image
			src="/cases/omnes-education/suivi_admin.png"
			alt="Aperçu global de l'application harmonisée"
			width={1920}
			height={1080}
			priority
			className="w-full h-auto rounded-2xl border border-slate-800"
		  />
		</div>
      </section>
	  
      <section className="container pt-8 prose prose-invert">
		<h2>Mise à disposition via Power BI</h2>
        <p>
          Des tableaux de bord sont déployés par le canal Power BI pour la consultation par la direction.
        </p>
		<div className="not-prose my-10">
		  <Image
			src="/cases/omnes-education/power_bi.png"
			alt="Aperçu global de l'application harmonisée"
			width={1920}
			height={1080}
			priority
			className="w-full h-auto rounded-2xl border border-slate-800"
		  />
		</div>
      </section>
	  
    </>
	
  );
}



