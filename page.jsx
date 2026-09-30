import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { profile, projects, experience, skills, education, certifications, languages } from "@/data/content";

export default function Home() {
  return (
    <>
      <Nav name={profile.name} />
      <main>
        <Hero profile={profile} />

        <Section id="about" label="About">
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed">
            {profile.about.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Section>

        <Section id="projects" label="Featured projects">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((p) => <ProjectCard key={p.name} project={p} />)}
          </div>
        </Section>

        <Section id="experience" label="Experience">
          <div className="space-y-8">
            {experience.map((e) => (
              <div key={e.role} className="grid gap-2 md:grid-cols-4">
                <p className="font-mono text-sm text-slate-500">{e.year}</p>
                <div className="md:col-span-3">
                  <h3 className="font-semibold">{e.role}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{e.company}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5">{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" label="Skills">
          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-2 font-semibold">{group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((s) => <li key={s} className="rounded bg-slate-100 px-2 py-1 font-mono text-xs dark:bg-slate-800">{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" label="Education & certifications">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.title}>
                  <h3 className="font-semibold">{e.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{e.org} · {e.year}</p>
                </div>
              ))}
            </div>
            <ul className="list-disc space-y-2 pl-5 text-sm">{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">Languages: {languages}</p>
        </Section>

        <Section id="contact" label="Contact">
          <p className="max-w-xl text-lg">Open to software engineering and AI/ML opportunities. The best way to reach me is by email.</p>
          <ul className="mt-6 space-y-2">
            <li><a className="underline decoration-accent underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a className="underline decoration-accent underline-offset-4" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
            <li><a className="underline decoration-accent underline-offset-4" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </Section>
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
