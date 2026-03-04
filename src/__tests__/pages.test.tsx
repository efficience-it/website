import { render, screen } from "@testing-library/react";

import NotreExpertise from "@/app/notre-expertise/page";
import DeveloppementWeb from "@/app/developpement-web-sur-mesure/page";
import CloudEtDevops from "@/app/cloud-et-devops/page";
import AccompagnementEtConseil from "@/app/accompagnement-et-conseil/page";
import LEntreprise from "@/app/l-entreprise/page";
import LaTeam from "@/app/la-team/page";
import TaCarriere from "@/app/ta-carriere/page";
import GreenIt from "@/app/green-it/page";
import NosReferences from "@/app/nos-references/page";
import BlogPage from "@/app/blog/page";
import Contact from "@/app/contact/page";
import MentionsLegales from "@/app/mentions-legales/page";

describe("Service pages", () => {
  it("renders Notre expertise", () => {
    render(<NotreExpertise />);
    expect(screen.getByRole("heading", { name: /nos expertises/i })).toBeInTheDocument();
  });

  it("renders Développement web sur mesure", () => {
    render(<DeveloppementWeb />);
    expect(screen.getByRole("heading", { name: /développement web sur mesure/i })).toBeInTheDocument();
  });

  it("renders Cloud & DevOps", () => {
    render(<CloudEtDevops />);
    expect(screen.getByRole("heading", { name: /cloud & devops/i })).toBeInTheDocument();
  });

  it("renders Accompagnement et Conseil", () => {
    render(<AccompagnementEtConseil />);
    expect(screen.getByRole("heading", { name: /accompagnement et conseil/i })).toBeInTheDocument();
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

  it("renders Ta carrière", () => {
    render(<TaCarriere />);
    expect(screen.getByRole("heading", { name: /rejoignez notre équipe/i })).toBeInTheDocument();
  });

  it("renders Green IT", () => {
    render(<GreenIt />);
    expect(screen.getByRole("heading", { level: 1, name: /green it/i })).toBeInTheDocument();
  });

  it("renders Nos références", () => {
    render(<NosReferences />);
    expect(screen.getByRole("heading", { name: /nos références/i })).toBeInTheDocument();
  });
});

describe("Blog & other pages", () => {
  it("renders Blog listing", () => {
    render(<BlogPage />);
    expect(screen.getByRole("heading", { name: /^blog$/i })).toBeInTheDocument();
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
