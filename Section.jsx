export default function Section({ id, label, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-16 px-6 py-16 md:py-20">
      <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-accent dark:text-accent-dark">{label}</h2>
      {children}
    </section>
  );
}
