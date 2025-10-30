export const metadata = {
  title: 'Tableaux, Collections et Dictionnaires VBA — le trio qu’il faut enfin comprendre',
  description:
    'Comprendre enfin les différences entre Tableaux, Collections et Dictionnaires en VBA — quand utiliser chacun, leurs avantages et exemples concrets.',
}

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 640 220"
      role="img"
      aria-label="Schéma abstrait de structures de données"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#1a365d" />
          <stop offset="1" stopColor="#0f2747" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0" stopColor="#2ecc71" />
          <stop offset="1" stopColor="#c58a5a" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="640" height="220" fill="url(#g1)" rx="16" />
      {/* Tableau */}
      <g transform="translate(24,24)">
        <rect
          width="200"
          height="78"
          rx="10"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.15)"
        />
        {[0, 1, 2].map((r) => (
          <rect
            key={r}
            x="10"
            y={10 + r * 20}
            width={180}
            height="14"
            rx="4"
            fill="rgba(255,255,255,0.1)"
          />
        ))}
        <text x="10" y="72" fontSize="12" fill="#9fb3c8">
          Tableau (index numérique)
        </text>
      </g>

      {/* Collection */}
      <g transform="translate(240,24)">
        <rect
          width="170"
          height="78"
          rx="10"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.15)"
        />
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx={24 + i * 35} cy="38" r="10" fill="rgba(255,255,255,0.12)" />
        ))}
        <text x="10" y="72" fontSize="12" fill="#9fb3c8">
          Collection (liste souple)
        </text>
      </g>

      {/* Dictionary */}
      <g transform="translate(430,24)">
        <rect
          width="186"
          height="78"
          rx="10"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.15)"
        />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(10, ${10 + i * 20})`}>
            <rect width="70" height="14" rx="4" fill="rgba(255,255,255,0.12)" />
            <rect x="80" width="96" height="14" rx="4" fill="rgba(46,204,113,0.35)" />
          </g>
        ))}
        <text x="10" y="72" fontSize="12" fill="#9fb3c8">
          Dictionary (clé → valeur)
        </text>
      </g>

      {/* Lien gradient */}
      <path
        d="M120,120 C220,160 420,140 520,180"
        fill="none"
        stroke="url(#g2)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  )
}

function CodeBlock({ code, lang = 'vba' }: { code: string; lang?: string }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-xl border border-card bg-card p-4 text-sm">
      <code className={`language-${lang}`}>{code}</code>
    </pre>
  )
}

export default function ArticlePage() {
  return (
    <article className="container pt-10">
      {/* Header */}
      <header className="grid gap-6 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-sm text-base-muted">20 octobre 2025 · DELGERY Sébastien</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold">
            Tableaux, Collections et Dictionnaires VBA — le trio qu’il faut enfin comprendre
          </h1>
          <p className="text-base-normal mt-4">
            Comprendre enfin les différences entre Tableaux, Collections et Dictionnaires en VBA —{' '}
            quand utiliser chacun, leurs avantages et exemples concrets.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="card p-0 overflow-hidden">
            <HeroIllustration />
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="prose prose-invert mt-10">
        <p>
          Quand on code en VBA, on finit toujours par croiser ces trois structures :{' '}
          <strong>le tableau</strong>, <strong>la collection</strong> et{' '}
          <strong>le dictionnaire</strong>. Elles paraissent interchangeables… jusqu’à ce qu’on s’y
          perde entre indices, clés et typages. Voici un rappel clair pour choisir la bonne, au bon
          moment.
        </p>
      </section>

      {/* 1. Tableau */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">🧩 1. Le tableau — rapide, mais rigide</h2>
        <p className="mt-2 text-base-normal">
          Le <strong>tableau</strong> est la base : un espace mémoire fixe (ou redimensionnable)
          indexé par nombre, ultra efficace pour traiter des blocs de cellules.
        </p>
        <CodeBlock
          code={`Dim arr() As Variant
ReDim arr(1 To 3)
arr(1) = "Excel"
arr(2) = "VBA"
arr(3) = "SQL"

Debug.Print arr(2)    ' → VBA`}
        />
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="card p-4">
            <h3 className="font-semibold">✅ Avantages</h3>
            <ul className="mt-2 list-disc list-inside text-base-normal space-y-1">
              <li>Très rapide en mémoire</li>
              <li>Parfait pour les blocs Range</li>
              <li>
                Compatible avec <code>Range.Value</code>
              </li>
            </ul>
          </div>
          <div className="card p-4">
            <h3 className="font-semibold">⚠️ Limites</h3>
            <ul className="mt-2 list-disc list-inside text-base-normal space-y-1">
              <li>Index numérique seulement</li>
              <li>Redimensionnement coûteux</li>
              <li>Suppression au milieu non triviale</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-base-normal">
          💡 Astuce : pour traiter un tableau Excel entier d’un coup, c’est imbattable :
        </p>
        <CodeBlock code={`arr = Range("A1:C1000").Value`} />
      </section>

      {/* 2. Collection */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">
          📦 2. La collection — souple, simple, sans clé explicite
        </h2>
        <p className="mt-2 text-base-normal">
          Une <strong>Collection</strong> est un conteneur dynamique natif VBA, parfait pour empiler
          des valeurs ou des objets sans se soucier des tailles.
        </p>
        <CodeBlock
          code={`Dim c As New Collection
c.Add "Excel"
c.Add "VBA"
c.Add "SQL"

Debug.Print c(2)          ' → VBA
Debug.Print c.Count       ' → 3

' Avec clé facultative
c.Add "Sébastien", "Auteur"
Debug.Print c("Auteur")`}
        />
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="card p-4">
            <h3 className="font-semibold">✅ Avantages</h3>
            <ul className="mt-2 list-disc list-inside text-base-normal space-y-1">
              <li>Ajout/Suppression très simple</li>
              <li>Accepte tout type (objets, tableaux…)</li>
              <li>Clé texte possible</li>
            </ul>
          </div>
          <div className="card p-4">
            <h3 className="font-semibold">⚠️ Limites</h3>
            <ul className="mt-2 list-disc list-inside text-base-normal space-y-1">
              <li>
                Pas de <code>.Exists</code> natif
              </li>
              <li>Moins rapide qu’un tableau sur gros volumes</li>
              <li>Accès clés moins direct que Dictionary</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Dictionary */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">
          🧠 3. Le dictionnaire — rapide, structuré, clé → valeur
        </h2>
        <p className="mt-2 text-base-normal">
          Le <strong>Scripting.Dictionary</strong> est l’équivalent d’un <em>Map</em> : on associe
          une <strong>clé unique</strong> à une <strong>valeur</strong>.
        </p>
        <CodeBlock
          code={`Dim d As Object
Set d = CreateObject("Scripting.Dictionary")

d("Langage") = "VBA"
d("Année") = 1995
d("Auteur") = "Microsoft"

If Not d.Exists("Langage") Then d("Langage") = "VBA"

Dim k As Variant
For Each k In d.Keys
    Debug.Print k, d(k)
Next`}
        />

        {/* Comparatif */}
        <div className="mt-8 card p-0 overflow-hidden">
          <div className="px-6 pt-6">
            <h3 className="font-semibold">
              ⚙️ Tableau vs Collection vs Dictionary — le comparatif
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-900/60 border-b border-card">
                <tr className="text-left">
                  <th className="px-6 py-3">Caractéristique</th>
                  <th className="px-6 py-3">Tableau</th>
                  <th className="px-6 py-3">Collection</th>
                  <th className="px-6 py-3">Dictionary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  [
                    'Type d’index',
                    'Numérique',
                    'Numérique / Texte (optionnel)',
                    'Texte / Numérique',
                  ],
                  ['Taille dynamique', 'Redim', 'Oui', 'Oui'],
                  ['Accès direct', 'arr(i)', 'col(i) / col("clé")', 'd("clé")'],
                  ['Test d’existence', 'Non', 'Non (sauf erreur)', '.Exists("clé")'],
                  ['Itération', 'For i=LBound..UBound', 'For Each', 'For Each'],
                  ['Performance', '⭐⭐⭐', '⭐⭐', '⭐⭐⭐'],
                  ['Multi-dimension', 'Oui', 'Non', 'Non'],
                  [
                    'Parfait pour',
                    'Données tabulaires',
                    'Listes souples / objets',
                    'Lookup, mapping, caches',
                  ],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-6 py-3 text-base-normal">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hybrides */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">🧩 5. Combo gagnant : les hybrides</h2>
        <p className="text-base-normal mt-2">
          On peut — et souvent on doit — <strong>combiner</strong> les structures :
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="mt-4 font-semibold">Dictionnaire de tableaux</h3>
            <CodeBlock
              code={`d("Ligne1") = Array("A", "B", "C")
Debug.Print d("Ligne1")(2)    ' → B`}
            />
          </div>
          <div>
            <h3 className="mt-4 font-semibold">Collection de dictionnaires</h3>
            <CodeBlock
              code={`Dim col As New Collection, d2 As Object
Set d2 = CreateObject("Scripting.Dictionary")
d2("Nom") = "Delgery"
d2("Role") = "Consultant"
col.Add d2, "Profil"

Debug.Print col("Profil")("Nom")`}
            />
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mt-10">
        <div className="card p-6">
          <h3 className="font-semibold">🪄 En résumé</h3>
          <ul className="text-base-normal mt-2 list-disc list-inside space-y-1">
            <li>
              <strong>Tableau</strong> → performance brute
            </li>
            <li>
              <strong>Collection</strong> → souplesse sans prise de tête
            </li>
            <li>
              <strong>Dictionary</strong> → structure clé/valeur, parfait pour anonymisation,
              mapping, caches, agrégations
            </li>
          </ul>
          <p className="text-base-normal mt-3">
            Et comme toujours en VBA : commence simple, optimise plus tard. Le bon conteneur est
            celui qui éclaire ton code, pas celui qui impressionne ton compilateur.
          </p>
        </div>
        <p className="mt-4 text-sm text-base-muted">
          Article rédigé par <strong>DELGERY Sébastien</strong> — Consultant PPM &amp; BI /
          Développeur VBA &amp; .NET.
        </p>
      </section>
    </article>
  )
}
