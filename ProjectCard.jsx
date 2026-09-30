export default function ProjectCard({ project }) {
  return (
    <article className="rounded-lg border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-accent dark:border-slate-800 dark:hover:border-accent-dark">
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <dl className="mt-4 space-y-3 text-sm leading-relaxed">
        <div><dt className="font-mono text-xs uppercase text-slate-500">Problem</dt><dd>{project.problem}</dd></div>
        <div><dt className="font-mono text-xs uppercase text-slate-500">Solution</dt><dd>{project.solution}</dd></div>
        <div>
          <dt className="font-mono text-xs uppercase text-slate-500">My contribution</dt>
          <dd><ul className="list-disc space-y-1 pl-5">{project.contribution.map((c) => <li key={c}>{c}</li>)}</ul></dd>
        </div>
      </dl>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <li key={s} className="rounded bg-slate-100 px-2 py-1 font-mono text-xs dark:bg-slate-800">{s}</li>
        ))}
      </ul>
    </article>
  );
}
