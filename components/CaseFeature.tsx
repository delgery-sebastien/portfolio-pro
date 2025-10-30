import Image from 'next/image'
import { BulletList } from '@/components/BulletList' // <- ta liste standard

type Props = {
  title: string
  /** Points à afficher avec BulletList ; si absent, on rend children */
  points?: string[]
  /** Contenu libre (paragraphes, listes, etc.) */
  children?: React.ReactNode
  imgSrc: string
  imgAlt: string
  imgAlign?: 'top' | 'center' | 'bottom' // <-- nouvelle prop
  /** Sur desktop : inverse texte/image (mobile = texte puis image, toujours) */
  reverse?: boolean
  /** Mettre true sur la 1re image de la page (LCP) */
  priority?: boolean
  /** Variante de puces BulletList : 'check' (✓) ou 'cube' */
  bulletVariant?: 'check' | 'cube'
}

export default function CaseFeature({
  title,
  points,
  children,
  imgSrc,
  imgAlt,
  imgAlign = 'top',
  reverse = false,
  priority = false,
  bulletVariant = 'check',
}: Props) {
  const textOrder = reverse ? 'md:order-2' : 'md:order-1'
  const imgOrder = reverse ? 'md:order-1' : 'md:order-2'

  const alignClasses = {
    top: 'object-top',
    center: 'object-center',
    bottom: 'object-bottom',
  }

  return (
    <section className="container my-10">
      <div className="grid md:grid-cols-12 gap-6 items-start">
        {/* Texte */}
        <div className={`prose prose-invert max-w-none order-1 ${textOrder} md:col-span-6`}>
          <h3 className="!mt-0">{title}</h3>

          {/* Si 'points' est fourni → on délègue à BulletList ; sinon on rend 'children' */}
          {Array.isArray(points) && points.length > 0 ? (
            <BulletList items={points} icon={bulletVariant} />
          ) : (
            children
          )}
        </div>

        {/* Image */}
        <div className={`order-2 ${imgOrder} md:col-span-6`}>
          <div className="relative w-full h-[260px] md:h-[360px] rounded-2xl overflow-hidden">
            <Image
              src={imgSrc}
              alt={imgAlt}
              width={1600} // largeur max de ton export
              height={0} // facultatif : Next ignore la hauteur si tu mets style
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '1rem',
                border: '1px solid #1f2937',
              }}
              priority={priority}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
