import { CheckIcon, CubeIcon } from './Icons'
import { TargetIcon } from './Icons'
import type { ReactNode } from 'react'

type IconName = 'check' | 'cube' | 'target'

export function BulletList({
  items,
  icon, // "check" | "cube" | "target" | ReactNode
  variant, // rétro-compat: "check" | "cube" | "target"
  color,
}: {
  items: string[]
  icon?: IconName | ReactNode
  variant?: IconName // <-- compat
  color?: string
}) {
  // 1) Quelle icône ? (priorité à `icon` si string, sinon `variant`)
  const name: IconName = typeof icon === 'string' ? icon : variant ?? 'check'

  // 2) Composant d'icône si `name` est utilisé (sinon on affichera `icon` s'il est ReactNode)
  const IconComp = name === 'cube' ? CubeIcon : name === 'target' ? TargetIcon : CheckIcon

  // 3) Couleur par défaut selon l’icône si `color` absent
  const defaultColor = name === 'cube' ? 'text-[#c58a5a]' : 'text-emerald-400'
  const iconColorClass = color ?? defaultColor

  return (
    <ul className="bullet-reset my-3">
      {items.map((it, i) => (
        <li key={i}>
          <span className={`bullet-ico mr-2 inline-flex translate-y-[1px] ${iconColorClass}`}>
            {typeof icon === 'object' && icon !== null ? icon : <IconComp />}
          </span>
          <span className="text-base-normal leading-6">{it}</span>
        </li>
      ))}
    </ul>
  )
}
