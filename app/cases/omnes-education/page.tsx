import { BulletList } from "@/components/BulletList";

export default function OmnesCase() {
  return (
    <section className="container prose pt-8">
      <h1>OMNES Éducation - Harmonisation des programmes & budgets</h1>
      <p><strong>Rôle :</strong> Consultant Développeur VBA / SQL Senior</p>

      <h2>Contexte</h2>
      <p>
        Uniformiser la structure et le suivi des programmes et budgets sur plusieurs écoles.
      </p>

      <h2>Objectifs</h2>
      <BulletList
        variant="check"
        items={[
          "Structurer et fiabiliser la gestion",
          "Centraliser les données",
          "Automatiser le workflow de révision",
          "Améliorer la visibilité groupe",
        ]}
      />

      <h2>Solution livrée</h2>
      <BulletList
        variant="cube"
        items={[
          "Outil Excel VBA centralisé <-> SQL Server",
          "Automatisation du cycle budgétaire",
          "Interfaces sécurisées pour directions locales",
          "Intégration Power BI",
          "Formation et transfert",
        ]}
      />

      <h2>Résultats</h2>
      <BulletList
        variant="check"
        items={[
          "-70% de temps de consolidation",
          "Traçabilité et fiabilité renforcées",
          "Adoption rapide (ergonomie Excel)",
          "Pilotage groupe",
        ]}
      />

      <blockquote>Données anonymisées - visuels illustratifs uniquement.</blockquote>
    </section>
  );
}
