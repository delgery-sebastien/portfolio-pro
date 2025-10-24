import CaseFeature from "@/components/CaseFeature";
import { BulletList } from "@/components/BulletList"; // <- ta liste standard
import Image from "next/image";

export default function CaceisCase(){
  return (
    <>
      <section className="container pt-8 prose prose-invert">
        <h1>Caceis - Développement de proximité - Commando VBA</h1>
        <p><strong>Rôle :</strong> Consultant Développeur VBA / SQL Senior</p>
        <p>
          Texte à compléter
        </p>
      </section>

	  <CaseFeature
		  title="Contexte"
		  imgSrc="/cases/omnes-education/image1.png"
		  imgAlt="Schéma des flux : Écoles → Excel/VBA → SQL Server → Power BI"
		  priority
		>
		  <p>
			Texte à compléter
		  </p>
		  
		  <h3>Objectifs</h3>
		  <div>
		  <BulletList
			variant="target"
			items={[
			  "Texte à compléter",
			  "Texte à compléter",
			  "Texte à compléter",
			  "Texte à compléter"
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
			  "Texte à compléter",
			  "Texte à compléter",
			  "Texte à compléter",
			  "Texte à compléter"
			]}
		  />

		  <h3>Résultats</h3>
		  <BulletList
			variant="check"
			items={[
			  "Texte à compléter",
			  "Texte à compléter",
			  "Texte à compléter",
			  "Texte à compléter"
			]}
		  />
		</CaseFeature>
		
		
      <section className="container pt-8 prose prose-invert">
		<h2>Mise à disposition des outils via menu personnalisé dans les applications office</h2>
        <div>
			Les outils ont été déployés au près des utilisateurs par l’intermédiaire d’un portail et d’un ruban intégré à Microsoft Excel, personnalisé en fonction du service et de la couverture fonctionnelle de l’utilisateur.
        </div>
		<div className="not-prose my-10">
		  <Image
			src="/cases/caceis/CustomRibbon.png"
			alt="Aperçu global de l'application harmonisée"
			width={1920}
			height={1080}
			priority
			className="w-full h-auto rounded-2xl border border-slate-800"
		  />
		</div>
      </section>

      <section className="container pt-8 prose prose-invert">
		<h2>Audit des traitements EoD</h2>
        <p>
          Un tableau de bord permet de connaître l'éat d'avancement des traitements quotidiens et d'en analyser la performance.
        </p>
		<div className="not-prose my-10">
		  <Image
			src="/cases/caceis/eod_status.png"
			alt="Aperçu global de l'application harmonisée"
			width={1920}
			height={1080}
			priority
			className="w-full h-auto rounded-2xl border border-slate-800"
		  />
		</div>
      </section>
	
      <section className="container pt-8 prose prose-invert">
		<h2>Rapprochement clearing/CCP automatisé (Traitement Oracle P/SQL)</h2>
        <p>
          Des procédures stockées de rapprochement de données sont executées après chaque intégration de fichier reçu des chambres de compensation. Elles permettent d'autoamtiser à plus de 90% le travaille du back office
        </p>
		<div className="not-prose my-10">
		  <Image
			src="/cases/caceis/eod_matching_rate.png"
			alt="Aperçu global de l'application harmonisée"
			width={1920}
			height={1080}
			priority
			className="w-full h-auto rounded-2xl border border-slate-800"
		  />
		</div>
        <p><i>
          (*) Les données ont été anonymisées afin de ne pas divulguer d'informations sensibles. Les chiffres indiqués sont en revanche tout à fait conforme au résultats obtenus.</i>
        </p>
      </section>
	  
      <section className="container pt-8 prose prose-invert">
		<h2>Analyse de la durée des traitements</h2>
        <p>
          La performance des traitements de rapprochements automatisés est mesurée afin de détecter rapidement tout écart et déviation afin d'assurer la mise à disposition aux équipes dans les délais attendus. 
        </p>
		<div className="not-prose my-10">
		  <Image
			src="/cases/caceis/eod_duration.png"
			alt="Aperçu global de l'application harmonisée"
			width={1920}
			height={1080}
			priority
			className="w-full h-auto rounded-2xl border border-slate-800"
		  />
		</div>
      </section>
	  
      <section className="container pt-8 prose prose-invert">
		<h2>Interface de rapprochement manuel</h2>
        <p>
          Les transactions qui n'ont pas pu être rapprochées automatiquement et sur lesquelless des doutes ont subsistés sont ensuite traitées manuellement par l'intermédiaire d'une interface Excel/VBA. Pour ce faire, l'utilisateur sélectionne les lignes identifiées comme solidaires et l'outil effectue une série de controle de cohérence (sens, quantités, produit, etc.). Le matching est enregistré en base, horodaté, et une clé unique est déterminée à la volée.
        </p>
		<div className="not-prose my-10">
		  <Image
			src="/cases/caceis/matching_auto.png"
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



