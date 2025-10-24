export default function TestimonialCard(
  { quote, author, role }:{
    quote: string; author: string; role?: string
  }
){
  return (
    <figure className="card p-6">
      <blockquote className="text-slate-200">“{quote}”</blockquote>
      <figcaption className="mt-3 text-sm text-slate-400">
        <span className="font-medium text-slate-200">{author}</span>
        {role ? <> · <span>{role}</span></> : null}
      </figcaption>
    </figure>
  )
}
