import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "@/components/sections/ContactForm";

describe("ContactForm", () => {
  it("renders all form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText("Nom *")).toBeInTheDocument();
    expect(screen.getByLabelText("Entreprise")).toBeInTheDocument();
    expect(screen.getByLabelText("Téléphone")).toBeInTheDocument();
    expect(screen.getByLabelText("Email *")).toBeInTheDocument();
    expect(screen.getByLabelText("Objet de votre demande *")).toBeInTheDocument();
    expect(screen.getByLabelText("Message *")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Envoyer ma demande" })).toBeInTheDocument();
  });

  it("renders all subject options", () => {
    render(<ContactForm />);
    expect(screen.getByText("Demande de devis")).toBeInTheDocument();
    expect(screen.getByText("Proposer un projet")).toBeInTheDocument();
    expect(screen.getByText("Candidature")).toBeInTheDocument();
    expect(screen.getByText("Autre")).toBeInTheDocument();
  });

  it("calls window.open with mailto URL and shows success message on submit", () => {
    const openSpy = jest.fn();
    window.open = openSpy;

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText("Nom *"), { target: { value: "Jean Dupont" } });
    fireEvent.change(screen.getByLabelText("Entreprise"), { target: { value: "Acme" } });
    fireEvent.change(screen.getByLabelText("Téléphone"), { target: { value: "0612345678" } });
    fireEvent.change(screen.getByLabelText("Email *"), { target: { value: "jean@acme.fr" } });
    fireEvent.change(screen.getByLabelText("Objet de votre demande *"), { target: { value: "Demande de devis" } });
    fireEvent.change(screen.getByLabelText("Message *"), { target: { value: "Bonjour" } });

    fireEvent.submit(screen.getByRole("button", { name: "Envoyer ma demande" }));

    expect(openSpy).toHaveBeenCalledTimes(1);
    const callArgs = openSpy.mock.calls[0];
    expect(callArgs[0]).toContain("mailto:contact@itefficience.com");
    expect(callArgs[0]).toContain("subject=");
    expect(callArgs[0]).toContain("body=");
    expect(callArgs[1]).toBe("_blank");

    expect(screen.getByText("Merci pour votre message !")).toBeInTheDocument();
    expect(screen.getByText(/Votre client mail va s'ouvrir/)).toBeInTheDocument();
  });
});
