import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Linkedin,
  Download,
  MapPin,
  GraduationCap,
  Award,
  Code2,
  Sparkles,
  FolderKanban,
  User,
  Phone,
} from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xiluva Carol Mhlanga — Aspiring AI & Software Developer" },
      {
        name: "description",
        content:
          "Personal portfolio of Xiluva Carol Mhlanga — an aspiring software and AI developer from Johannesburg, South Africa. Projects, skills, education and certifications.",
      },
      { property: "og:title", content: "Xiluva Carol Mhlanga — Aspiring AI & Software Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Xiluva Carol Mhlanga: projects, technical skills, education and AI certifications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const technicalSkills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Python",
  "Git & Version Control",
  "AI-Assisted Development",
  "Responsive Design",
  "Prompt Engineering",
  "Problem Solving",
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Time Management",
  "Adaptability",
  "Critical Thinking",
  "Self-Learning",
];

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, fully responsive personal website built with AI-assisted development. Features a custom design system, smooth scrolling navigation and a downloadable CV.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Lovable"],
  },
  {
    title: "AI Study Assistant",
    description:
      "A concept web app that helps students summarise notes and generate practice questions using AI. Designed the interface and prototyped the core flows with AI pair-programming tools.",
    tech: ["React", "AI APIs", "Prompt Engineering"],
  },
  {
    title: "Community Events Page",
    description:
      "A clean, mobile-first events listing page for a local community group, with event cards, date filtering and contact details — built to practise semantic HTML and responsive layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const certifications = [
  {
    name: "Introduction to AI",
    issuer: "Coursera",
    detail: "Foundations of artificial intelligence, machine learning concepts and real-world AI applications.",
  },
  {
    name: "Google AI Essentials",
    issuer: "Google / Coursera",
    detail: "Practical AI skills: using generative AI tools responsibly, prompt writing and AI productivity workflows.",
  },
  {
    name: "Stay Ahead of the AI Curve",
    issuer: "Coursera",
    detail: "Understanding emerging AI trends and how to apply them in a fast-changing digital workplace.",
  },
  {
    name: "Certificate of Construction Constructing",
    issuer: "NQF Level 2",
    detail: "Vocational construction qualification covering practical building, plastering and site-safety skills.",
  },
];

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          Xiluva<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/cv-xiluva-mhlanga.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" /> CV
        </a>
      </nav>
    </header>
  );
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title mt-2">{title}</h2>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO / HOME */}
      <section id="home" className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 pb-20 pt-32 md:flex-row md:pt-40">
        <div className="flex-1">
          <p className="section-kicker">Hello, I'm</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Xiluva Carol <span className="text-primary">Mhlanga</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Aspiring software & AI developer based in Johannesburg, South Africa.
            I build clean, responsive web experiences and I'm passionate about
            using artificial intelligence to solve real-world problems.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> Johannesburg, South Africa
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <FolderKanban className="h-4 w-4" /> View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" /> Get in touch
            </a>
          </div>
        </div>
        <div className="relative w-64 shrink-0 md:w-96">
          <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl" aria-hidden />
          <img
            src={heroPortrait}
            alt="Illustrated portrait of Xiluva Carol Mhlanga"
            width={1024}
            height={1024}
            className="relative rounded-3xl border border-border object-cover shadow-2xl"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading kicker="About Me" title="A curious mind, building with AI" />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="glow-card p-6">
              <User className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">Who I am</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I'm a motivated young developer from Johannesburg who recently
                completed matric and is carving a path into the tech industry.
                I learn fast, I build often, and I care about quality.
              </p>
            </div>
            <div className="glow-card p-6">
              <Sparkles className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">What drives me</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Artificial intelligence excites me — not just using it, but
                understanding it. I've completed multiple AI certifications and
                I use AI-assisted tools to build real projects while mastering
                the underlying code.
              </p>
            </div>
            <div className="glow-card p-6">
              <Code2 className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">Where I'm going</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                My goal is to grow into a full-stack developer specialising in
                AI-powered applications, and to contribute to South Africa's
                growing tech ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading kicker="Skills" title="What I bring to the table" />
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold">
              <Code2 className="h-5 w-5 text-primary" /> Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold">
              <Sparkles className="h-5 w-5 text-primary" /> Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading kicker="Projects" title="Things I've built" />
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="glow-card flex flex-col p-6">
                <FolderKanban className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="chip text-xs">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading kicker="Education" title="Learning journey" />
        <div className="grid gap-10 md:grid-cols-2">
          <div className="glow-card self-start p-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">National Senior Certificate (Matric)</h3>
            <p className="mt-1 text-sm font-medium text-primary">Mapetla High School</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Completed matric with a strong interest in mathematics and
              technology, laying the foundation for a career in software
              development and AI.
            </p>
          </div>
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold">
              <Award className="h-5 w-5 text-primary" /> Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((c) => (
                <li key={c.name} className="glow-card p-5">
                  <p className="font-display font-semibold">{c.name}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-primary">{c.issuer}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{c.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading kicker="Contact" title="Let's connect" />
        <p className="max-w-xl text-muted-foreground">
          I'm open to internships, learnerships, junior roles and collaborations.
          Reach out through any of the channels below.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a href="mailto:carolxiluva500@gmail.com" className="glow-card flex items-center gap-3 p-5">
            <Mail className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold">Email</p>
              <p className="text-xs text-muted-foreground">carolxiluva500@gmail.com</p>
            </div>
          </a>
          <a href="tel:+27761482449" className="glow-card flex items-center gap-3 p-5">
            <Phone className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold">Phone</p>
              <p className="text-xs text-muted-foreground">076 148 2449</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/xiluva-carol-8b72b7386"
            target="_blank"
            rel="noreferrer"
            className="glow-card flex items-center gap-3 p-5"
          >
            <Linkedin className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold">LinkedIn</p>
              <p className="text-xs text-muted-foreground">Xiluva Carol</p>
            </div>
          </a>
        </div>
        <a
          href="/cv-xiluva-mhlanga.pdf"
          download
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" /> Download my CV
        </a>
      </section>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Xiluva Carol Mhlanga · Johannesburg, South Africa</p>
      </footer>
    </div>
  );
}
