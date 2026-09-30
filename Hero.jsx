export default function Hero({ profile }) {
  return (
    <section id="top" className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 md:grid-cols-5 md:py-28">
      <div className="rise md:col-span-3">
        <p className="mb-4 font-mono text-sm text-accent dark:text-accent-dark">{profile.location}</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
        <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">{profile.title}</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-accent-dark dark:text-slate-950">View projects</a>
          <a href={`mailto:${profile.email}`} className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium transition hover:border-accent dark:border-slate-700 dark:hover:border-accent-dark">Get in touch</a>
        </div>
      </div>
      {/* Detection-box motif: a nod to the candidate's computer-vision work */}
      <div className="rise hidden md:col-span-2 md:block" aria-hidden="true">
        <div className="relative h-64 rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
          <div className="absolute left-6 top-10 h-40 w-40 rounded border-2 border-accent dark:border-accent-dark">
            <span className="absolute -top-6 left-[-2px] bg-accent px-2 py-0.5 font-mono text-xs text-white dark:bg-accent-dark dark:text-slate-950">software_engineer</span>
          </div>
          <div className="absolute bottom-6 right-6 h-20 w-24 rounded border-2 border-slate-400 dark:border-slate-500">
            <span className="absolute -top-6 left-[-2px] bg-slate-400 px-2 py-0.5 font-mono text-xs text-white dark:bg-slate-500">ml_engineer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
