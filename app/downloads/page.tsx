import Image from 'next/image'

export default function Downloads(){
  const files = [
    { name: 'CV - DELGERY Sébastien (PDF)', file: 'CV_DELGERY_Sebastien.pdf' },
    { name: 'Portfolio Pro (PDF)', file: 'CV_DELGERY_Sebastien.pdf' },
  ]
  return (
    <section className="container pt-12">
      <h1 className="text-3xl font-semibold">Téléchargements</h1>
		<p className="text-slate-300 mt-2">
			Documents publics et à jour (CV, Book). Les téléchargements sont tracés de manière anonymisée pour mesurer l’intérêt (compteurs anonymisés via n8n).
		</p>
	  
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {files.map(f => (
          <div key={f.file} className="card p-6">
            <h3 className="font-semibold">{f.name}</h3>
            <p className="text-slate-300 mt-1 break-all">/downloads/{f.file}</p>
            <a href={`/d/${f.file}`} className="btn btn-ghost mt-3">Télécharger</a>
          </div>
        ))}
      </div>
    </section>
  )
}
