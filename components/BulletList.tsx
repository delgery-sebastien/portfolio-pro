import { CheckIcon, CubeIcon } from './Icons'

export function BulletList({ items, variant='check' }:{
  items: string[], variant?: 'check' | 'cube'
}){
  const Icon = variant === 'check' ? CheckIcon : CubeIcon
  const color = variant === 'check' ? 'text-[#2ecc71]' : 'text-[#c58a5a]'
  return (
    <ul className="space-y-2">
      {items.map((it,i)=>(
        <li key={i} className="list-clean">
          <Icon className={color}/>
          <span className="text-slate-200">{it}</span>
        </li>
      ))}
    </ul>
  )
}
