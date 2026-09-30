const links = ["projects", "experience", "skills", "education", "contact"];

export default function Nav({ name }) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-mono text-sm font-semibold">{name}</a>
        <ul className="hidden gap-6 text-sm sm:flex">
          {links.map((l) => (
            <li key={l}><a href={`#${l}`} className="capitalize text-slate-600 transition hover:text-accent dark:text-slate-400 dark:hover:text-accent-dark">{l}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
