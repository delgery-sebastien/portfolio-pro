export function PostHeader({
  title,
  date,
  author,
  description,
}: {
  title: string;
  date?: string;
  author?: string;
  description?: string;
}) {
  return (
    <header className="mb-8 border-b border-slate-700 pb-5">
      <p className="text-sm text-slate-400">
        {date ? `${date}` : null}
        {date && author ? " · " : ""}
        {author || null}
      </p>
      <h1 className="mt-2 text-3xl md:text-4xl font-semibold">{title}</h1>
      {description ? <p className="mt-3 text-slate-300">{description}</p> : null}
    </header>
  );
}
