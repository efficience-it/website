import {
  extractHowToStepsFromMarkdown,
  getSpeakableSelectors,
  howToJsonLd,
  isTutorialArticle,
  localBusinessJsonLd,
} from "@/lib/structured-data";
import { categorySlugMap } from "@/lib/blog";

describe("howToJsonLd", () => {
  it("returns correct schema with steps", () => {
    const result = howToJsonLd("Install Node", "How to install Node.js", [
      { name: "Download", text: "Download the installer" },
      { name: "Run", text: "Run the installer" },
      { name: "Verify", text: "Run node --version" },
    ]);

    expect(result["@context"]).toBe("https://schema.org");
    expect(result["@type"]).toBe("HowTo");
    expect(result.name).toBe("Install Node");
    expect(result.description).toBe("How to install Node.js");
    expect(result.step).toHaveLength(3);
    expect(result.step[0]).toEqual({
      "@type": "HowToStep",
      position: 1,
      name: "Download",
      text: "Download the installer",
    });
    expect(result.step[2].position).toBe(3);
  });

  it("returns empty step array when no steps provided", () => {
    const result = howToJsonLd("Empty", "No steps", []);
    expect(result.step).toEqual([]);
  });
});

describe("localBusinessJsonLd", () => {
  it("is a valid LocalBusiness schema", () => {
    expect(localBusinessJsonLd["@context"]).toBe("https://schema.org");
    expect(localBusinessJsonLd["@type"]).toBe("LocalBusiness");
    expect(localBusinessJsonLd.name).toBe("Efficience IT");
    expect(localBusinessJsonLd.address).toBeDefined();
    expect(localBusinessJsonLd.geo).toBeDefined();
  });
});

describe("categorySlugMap", () => {
  it("maps category names to slugs", () => {
    expect(categorySlugMap["Symfony"]).toBe("symfony");
    expect(categorySlugMap["Green IT"]).toBe("green-it");
    expect(Object.keys(categorySlugMap).length).toBeGreaterThan(0);
  });
});

describe("isTutorialArticle", () => {
  it("returns true for deploy, install and migrate terms", () => {
    expect(isTutorialArticle("deployer-symfony-sur-docker", "Guide complet")).toBe(true);
    expect(isTutorialArticle("symfony-tips", "Installation Symfony en production")).toBe(true);
    expect(isTutorialArticle("api-rest", "Migration Symfony 7")).toBe(true);
  });

  it("returns false for non tutorial article", () => {
    expect(isTutorialArticle("api-rest-les-bonnes-pratiques", "Bonnes pratiques API REST")).toBe(
      false,
    );
  });
});

describe("getSpeakableSelectors", () => {
  it("returns selectors for first two paragraph blocks", () => {
    const content = `Introduction au sujet.

## Etape 1
Premier paragraphe de section.

Second paragraphe de section.`;

    expect(getSpeakableSelectors(content)).toEqual([
      "article .prose p:nth-of-type(1)",
      "article .prose p:nth-of-type(2)",
    ]);
  });

  it("falls back to h1 when no paragraph found", () => {
    const content = `## Titre
- item 1
- item 2`;

    expect(getSpeakableSelectors(content)).toEqual(["h1"]);
  });
});

describe("extractHowToStepsFromMarkdown", () => {
  it("extracts one step per h2 section", () => {
    const content = `## Preparer l'environnement
Installez les dependances necessaires.

## Deployer l'application
Lancez la commande de deploiement.
`;

    expect(extractHowToStepsFromMarkdown(content)).toEqual([
      {
        name: "Preparer l'environnement",
        text: "Installez les dependances necessaires.",
      },
      {
        name: "Deployer l'application",
        text: "Lancez la commande de deploiement.",
      },
    ]);
  });

  it("excludes non procedural headings and keeps actionable sentence", () => {
    const content = `## Introduction
Ce paragraphe de contexte ne doit pas devenir une etape.

## Installer Symfony CLI
Installez Symfony CLI sur votre machine avec le script officiel. Puis verifiez la version.

## Configurer les variables
Configurez les variables d'environnement de production dans votre pipeline CI.

## Conclusion
Ce bloc ne doit pas etre garde.
`;

    expect(extractHowToStepsFromMarkdown(content)).toEqual([
      {
        name: "Installer Symfony CLI",
        text: "Installez Symfony CLI sur votre machine avec le script officiel.",
      },
      {
        name: "Configurer les variables",
        text: "Configurez les variables d'environnement de production dans votre pipeline CI.",
      },
    ]);
  });

  it("limits the output to 6 steps", () => {
    const content = `## Etape 1
Installez le prerequis A pour preparer l'environnement.
## Etape 2
Configurez le prerequis B pour preparer l'environnement.
## Etape 3
Ajoutez le prerequis C pour preparer l'environnement.
## Etape 4
Executez le prerequis D pour preparer l'environnement.
## Etape 5
Ouvrez le prerequis E pour preparer l'environnement.
## Etape 6
Verifiez le prerequis F pour preparer l'environnement.
## Etape 7
Lancez le prerequis G pour preparer l'environnement.
`;

    expect(extractHowToStepsFromMarkdown(content)).toHaveLength(6);
  });
});
