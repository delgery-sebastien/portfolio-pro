// mdx-components.tsx
import type { MDXComponents } from "mdx/types";
import MDXLayout from "@/components/MDXLayout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 1) Wrapper: applique Tailwind Typography sur tout le contenu MDX
    wrapper: ({ children }) => (
      <article className="prose prose-invert max-w-none container pt-10">
        {children}
      </article>
    ),

    /* Lisser le layout des listes, même si <li><p> est émis */
    ul: (props) => <ul className="my-3 space-y-1" {...props} />,
    ol: (props) => <ol className="my-3 space-y-1 pl-5" {...props} />,
    li: (props) => <li className="[&>p]:m-0" {...props} />,
	
    // 2) Tables plus lisibles (bords + spacing)
    table: (props) => (
      <div className="overflow-x-auto my-4 rounded-xl border border-slate-800">
        <table className="min-w-full text-sm" {...props} />
      </div>
    ),
    thead: (props) => (
      <thead         className="bg-gradient-to-r from-brand-700 to-brand-800 border-b border-slate-700 text-slate-100"
 {...props} />
    ),
    th: (props) => <th className="px-4 py-2 text-left font-semibold" {...props} />,
    td: (props) => <td className="px-4 py-2 text-slate-300" {...props} />,

    // 3) Blocs de code lisibles
    pre: (props) => (
      <pre
        className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-sm"
        {...props}
      />
    ),
    code: (props) => <code className="font-mono" {...props} />,

    // 4) Citations/blockquote
    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-emerald-400/60 pl-4 italic text-slate-300"
        {...props}
      />
    ),

    // Garde les composants existants
    ...components,
  };
}
