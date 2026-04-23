import { render, screen } from "@testing-library/react";

import NotreExpertise, { metadata as notreExpertiseMetadata } from "@/app/notre-expertise/page";
import DeveloppementWeb, { metadata as developpementWebMetadata } from "@/app/developpement-web-sur-mesure/page";
import CloudEtDevops, { metadata as cloudEtDevopsMetadata } from "@/app/cloud-et-devops/page";
import AccompagnementEtConseil, { metadata as accompagnementEtConseilMetadata } from "@/app/accompagnement-et-conseil/page";
import LEntreprise, { metadata as lEntrepriseMetadata } from "@/app/l-entreprise/page";
import LaTeam, { metadata as laTeamMetadata } from "@/app/la-team/page";
import VotreCarriere, { metadata as votreCarriereMetadata } from "@/app/votre-carriere/page";
import GreenIt, { metadata as greenItMetadata } from "@/app/green-it/page";
import NosReferences, { metadata as nosReferencesMetadata } from "@/app/nos-references/page";
import BlogPage, { metadata as blogMetadata } from "@/app/blog/page";
import Contact, { metadata as contactMetadata } from "@/app/contact/page";
import MentionsLegales, { metadata as mentionsLegalesMetadata } from "@/app/mentions-legales/page";

describe("Service pages", () => {
  it("renders Notre expertise", () => {
    render(<NotreExpertise />);
    expect(screen.getByRole("heading", { name: /expertise symfony/i })).toBeInTheDocument();
  });

  it("renders Développement web sur mesure", () => {
    render(<DeveloppementWeb />);
    expect(screen.getByRole("heading", { level: 1, name: /développement web sur mesure/i })).toBeInTheDocument();
  });

  it("renders Cloud & DevOps", () => {
    render(<CloudEtDevops />);
    expect(screen.getByRole("heading", { name: /cloud & devops.*infrastructure/i })).toBeInTheDocument();
  });

  it("renders Accompagnement et Conseil", () => {
    render(<AccompagnementEtConseil />);
    expect(screen.getByRole("heading", { name: /conseil et coaching technique symfony/i })).toBeInTheDocument();
  });
});

describe("Company pages", () => {
  it("renders L'entreprise", () => {
    render(<LEntreprise />);
    expect(screen.getByRole("heading", { name: /notre histoire/i })).toBeInTheDocument();
  });

  it("renders La team", () => {
    render(<LaTeam />);
    expect(screen.getByRole("heading", { name: /une équipe passionnée/i })).toBeInTheDocument();
  });

  it("renders Votre carrière", () => {
    render(<VotreCarriere />);
    expect(screen.getByRole("heading", { name: /rejoignez notre équipe/i })).toBeInTheDocument();
  });

  it("renders Green IT", () => {
    render(<GreenIt />);
    expect(screen.getByRole("heading", { level: 1, name: /green it/i })).toBeInTheDocument();
  });

  it("renders Nos références", () => {
    render(<NosReferences />);
    expect(screen.getByRole("heading", { name: /nos réalisations/i })).toBeInTheDocument();
  });
});

describe("Blog & other pages", () => {
  it("renders Blog listing", () => {
    render(<BlogPage />);
    expect(screen.getByRole("heading", { name: /blog efficience it/i })).toBeInTheDocument();
  });

  it("renders Contact", () => {
    render(<Contact />);
    expect(screen.getByRole("heading", { name: /contactez-nous/i })).toBeInTheDocument();
  });

  it("renders Mentions légales", () => {
    render(<MentionsLegales />);
    expect(screen.getByRole("heading", { name: /mentions légales/i })).toBeInTheDocument();
  });
});

describe("Page metadata exports", () => {
  it("exports metadata for Notre expertise", () => {
    expect(notreExpertiseMetadata).toBeDefined();
    expect(notreExpertiseMetadata.description).toBeTruthy();
  });

  it("exports metadata for Développement web sur mesure", () => {
    expect(developpementWebMetadata).toBeDefined();
    expect(developpementWebMetadata.description).toBeTruthy();
  });

  it("exports metadata for Cloud & DevOps", () => {
    expect(cloudEtDevopsMetadata).toBeDefined();
    expect(cloudEtDevopsMetadata.description).toBeTruthy();
  });

  it("exports metadata for Accompagnement et Conseil", () => {
    expect(accompagnementEtConseilMetadata).toBeDefined();
    expect(accompagnementEtConseilMetadata.description).toBeTruthy();
  });

  it("exports metadata for L'entreprise", () => {
    expect(lEntrepriseMetadata).toBeDefined();
    expect(lEntrepriseMetadata.description).toBeTruthy();
  });

  it("exports metadata for La team", () => {
    expect(laTeamMetadata).toBeDefined();
    expect(laTeamMetadata.description).toBeTruthy();
  });

  it("exports metadata for Votre carrière", () => {
    expect(votreCarriereMetadata).toBeDefined();
    expect(votreCarriereMetadata.description).toBeTruthy();
  });

  it("exports metadata for Green IT", () => {
    expect(greenItMetadata).toBeDefined();
    expect(greenItMetadata.description).toBeTruthy();
  });

  it("exports metadata for Nos références", () => {
    expect(nosReferencesMetadata).toBeDefined();
    expect(nosReferencesMetadata.description).toBeTruthy();
  });

  it("exports metadata for Blog", () => {
    expect(blogMetadata).toBeDefined();
    expect(blogMetadata.description).toBeTruthy();
  });

  it("exports metadata for Contact", () => {
    expect(contactMetadata).toBeDefined();
    expect(contactMetadata.description).toBeTruthy();
  });

  it("exports metadata for Mentions légales", () => {
    expect(mentionsLegalesMetadata).toBeDefined();
    expect(mentionsLegalesMetadata.description).toBeTruthy();
  });
});

jest.mock("@/../data/jobs", () => ({
  ...jest.requireActual("@/../data/jobs"),
  get jobs() {
    return mockJobs ?? jest.requireActual("@/../data/jobs").jobs;
  },
}));

let mockJobs: Array<{ title: string; contract: string; location: string; domain: string; url: string }> | null = null;

describe("Votre carrière with jobs", () => {
  afterEach(() => {
    mockJobs = null;
  });

  it("renders job cards when jobs exist", () => {
    mockJobs = [{ title: "Dev Symfony", contract: "CDI", location: "Lille", domain: "dev", url: "/job/dev" }];
    render(<VotreCarriere />);
    expect(screen.getByText("Dev Symfony")).toBeInTheDocument();
  });
});
