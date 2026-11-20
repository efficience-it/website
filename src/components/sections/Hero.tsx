import {
  CLIENTS_SUPPORTED,
  FOUNDING_YEAR,
  PROJECTS_DELIVERED,
  TEAM_EXPERIENCE_YEARS,
} from "@/lib/company";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import RotatingKeywords from "@/components/ui/RotatingKeywords";
import HudIllustration from "@/components/illustrations/HudIllustration";

const keywords = [
  "Migration",
  "Performance",
  "Maintenance",
  "Architecture",
  "API",
  "Sécurité",
];

const stats = [
  { value: `${TEAM_EXPERIENCE_YEARS}+`, label: "Ans d'expérience" },
  { value: `${PROJECTS_DELIVERED}+`, label: "Projets livrés" },
  { value: `${CLIENTS_SUPPORTED}+`, label: "Clients" },
];

export default function Hero() {
  return (
    <section className="hud-hero py-20 md:py-32">
      <Container>
        <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Système en ligne <span className="hud-blink">_</span>
            </p>
            <h1 className="font-display text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
              Agence PHP et Symfony, experte en développement web
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray md:text-xl">
              Votre application Symfony mérite mieux. On la stabilise, la migre et la rend maintenable.
            </p>
            <p className="mt-3 max-w-2xl text-base text-gray">
              Depuis {FOUNDING_YEAR}, nous accompagnons les PME, ETI et startups dans le développement, la modernisation et la maintenance de leurs applications PHP. Une équipe dédiée, un interlocuteur technique unique, des livraisons régulières.
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-lg font-medium text-dark">
              <span className="inline-block h-2 w-2 rounded-full bg-primary hud-pulse" />
              <span className="[&_span]:text-primary">
                <RotatingKeywords keywords={keywords} />
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/audit-symfony-gratuit" size="lg">
                Demander mon audit gratuit
              </Button>
              <Button href="/notre-expertise" variant="outline" size="lg">
                Nos services
              </Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="hud-panel px-3 py-3">
                  <dd className="font-mono text-2xl font-bold text-primary">{s.value}</dd>
                  <dt className="text-xs uppercase tracking-wider text-gray">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
          <div className="hidden justify-center md:flex">
            <HudIllustration
              className="hud-svg h-[28rem] w-full"
              aria-label="Interface futuriste animée représentant le développement web sur mesure"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
