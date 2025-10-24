export function KeyPoints({ items, icon = "•" }:{ items: string[]; icon?: string }) {
  return (
    <ul className="my-3 space-y-1 list-none pl-0">
      {items.map((t, i) => (
        <li key={i} className="flex gap-2 items-start leading-6">
          <span className="mt-1 text-slate-400">{icon}</span>
          <span className="text-slate-300">{t}</span>
        </li>
      ))}
    </ul>
  );
}
