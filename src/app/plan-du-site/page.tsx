import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import {
  STATIC_SILOS,
  getCategoryRoutes,
  getBlogRoutes,
} from "@/lib/routes";

export const metadata = pageMetadata({
  title: "Plan du site",
  description:
    "Toutes les pages du site Efficience IT regroupées par silo : agence, services, secteurs, blog et ressources.",
  path: "/plan-du-site",
});

const breadcrumb = breadcrumbJsonLd([{ name: "Plan du site", path: "/plan-du-site" }]);

export default function PlanDuSitePage() {
  const categories = getCategoryRoutes();
  const articles = getBlogRoutes();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main className="py-16">
        <Container className="mx-auto max-w-4xl">
          <Breadcrumb items={[{ label: "Plan du site" }]} />
          <h1 className="font-display text-3xl font-bold text-dark md:text-4xl">
            Plan du site
          </h1>
          <p className="mt-4 text-gray">
            Retrouvez ici toutes les pages publiques du site Efficience IT, regroupées par thématique.
          </p>

          <div className="mt-12 space-y-12">
            {STATIC_SILOS.map((silo) => (
              <section key={silo.id}>
                <h2 className="font-display text-2xl font-bold text-dark">
                  {silo.title}
                </h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {silo.routes.map((route) => (
                    <li key={route.path}>
                      <Link
                        href={route.path}
                        className="text-primary hover:underline"
                      >
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section>
              <h2 className="font-display text-2xl font-bold text-dark">
                Catégories du blog
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {categories.map((route) => (
                  <li key={route.path}>
                    <Link
                      href={route.path}
                      className="text-primary hover:underline"
                    >
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-dark">
                Articles du blog
              </h2>
              <ul className="mt-4 space-y-2">
                {articles.map((route) => (
                  <li key={route.path}>
                    <Link
                      href={route.path}
                      className="text-primary hover:underline"
                    >
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
