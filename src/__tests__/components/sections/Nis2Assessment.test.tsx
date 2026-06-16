import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Nis2Assessment from "@/components/sections/Nis2Assessment";

const TOTAL_QUESTIONS = 15;

const saveMock = jest.fn();
const textMock = jest.fn();
jest.mock("jspdf", () => ({
  jSPDF: undefined,
  jsPDF: jest.fn().mockImplementation(() => ({
    setFont: jest.fn(),
    setFontSize: jest.fn(),
    setTextColor: jest.fn(),
    text: textMock,
    splitTextToSize: jest.fn((value: string) => [value]),
    save: saveMock,
  })),
}));

function start() {
  fireEvent.click(
    screen.getByRole("button", { name: "Commencer l'évaluation" }),
  );
}

function answerAll(optionIndex: (questionIndex: number) => number) {
  for (let i = 0; i < TOTAL_QUESTIONS; i += 1) {
    const heading = screen.getByRole("heading", { level: 2 });
    const card = heading.parentElement as HTMLElement;
    const options = Array.from(card.querySelectorAll("button"));
    const optionButtons = options.filter(
      (b) => b.textContent !== "Question précédente",
    );
    const idx = Math.min(optionIndex(i), optionButtons.length - 1);
    fireEvent.click(optionButtons[idx]);
  }
}

describe("Nis2Assessment", () => {
  let savedGtag: typeof window.gtag;
  const originalFetch = global.fetch;

  beforeEach(() => {
    savedGtag = window.gtag;
    window.gtag = jest.fn();
    saveMock.mockClear();
    textMock.mockClear();
  });

  afterEach(() => {
    window.gtag = savedGtag;
    global.fetch = originalFetch;
    delete process.env.NEXT_PUBLIC_FORMSPREE_NIS2_ENDPOINT;
    jest.restoreAllMocks();
  });

  it("shows the intro screen before starting", () => {
    render(<Nis2Assessment />);
    expect(
      screen.getByRole("button", { name: "Commencer l'évaluation" }),
    ).toBeInTheDocument();
  });

  it("walks through the questions and supports going back", () => {
    render(<Nis2Assessment />);
    start();
    expect(screen.getByText("Question 1 / 15")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Question précédente" }),
    ).not.toBeInTheDocument();

    const card = (
      screen.getByRole("heading", { level: 2 }).parentElement as HTMLElement
    );
    fireEvent.click(card.querySelectorAll("button")[0]);
    expect(screen.getByText("Question 2 / 15")).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: "Question précédente" }),
    );
    expect(screen.getByText("Question 1 / 15")).toBeInTheDocument();
  });

  it("computes a top score (vert) and tracks completion", () => {
    render(<Nis2Assessment />);
    start();
    answerAll(() => 0);

    expect(window.gtag).toHaveBeenCalledWith(
      "event",
      "nis2_assessment_completed",
      expect.objectContaining({ event_label: "100" }),
    );
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getAllByText("Bonne maturité").length).toBeGreaterThan(0);
  });

  it("computes a low score (rouge) and shows advice links", () => {
    render(<Nis2Assessment />);
    start();
    answerAll(() => 99);

    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getAllByText("Point de vigilance").length).toBeGreaterThan(0);
    expect(
      screen.getByRole("link", { name: "Sécurité applicative Symfony" }),
    ).toBeInTheDocument();
  });

  it("computes an intermediate score (orange)", () => {
    render(<Nis2Assessment />);
    start();
    answerAll((i) => (i % 2 === 0 ? 0 : 99));

    expect(screen.getAllByText(/À renforcer|Point de vigilance/).length).toBeGreaterThan(
      0,
    );
  });

  it("generates a PDF with priorities when score is mixed", async () => {
    render(<Nis2Assessment />);
    start();
    answerAll((i) => (i % 2 === 0 ? 0 : 99));

    fireEvent.click(
      screen.getByRole("button", { name: "Télécharger le rapport PDF" }),
    );

    await waitFor(() => expect(saveMock).toHaveBeenCalledTimes(1));
    expect(window.gtag).toHaveBeenCalledWith(
      "event",
      "nis2_assessment_pdf",
      expect.any(Object),
    );
  });

  it("generates a PDF listing every axis when score is perfect", async () => {
    render(<Nis2Assessment />);
    start();
    answerAll(() => 0);

    fireEvent.click(
      screen.getByRole("button", { name: "Télécharger le rapport PDF" }),
    );

    await waitFor(() => expect(saveMock).toHaveBeenCalledTimes(1));
  });

  it("restarts the assessment", () => {
    render(<Nis2Assessment />);
    start();
    answerAll(() => 0);
    expect(screen.getByText("100")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Recommencer" }));
    expect(screen.getByText("Question 1 / 15")).toBeInTheDocument();
  });

  it("falls back to mailto when no Formspree endpoint is set", () => {
    const openSpy = jest.fn();
    window.open = openSpy;
    render(<Nis2Assessment />);
    start();
    answerAll(() => 0);

    fireEvent.change(screen.getByPlaceholderText("Votre email professionnel"), {
      target: { value: "lead@acme.fr" },
    });
    fireEvent.change(screen.getByPlaceholderText("Entreprise (optionnel)"), {
      target: { value: "Acme" },
    });
    fireEvent.submit(
      screen.getByRole("button", { name: "Être accompagné" }),
    );

    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(openSpy.mock.calls[0][0]).toContain("mailto:");
    expect(window.gtag).toHaveBeenCalledWith(
      "event",
      "nis2_assessment_lead",
      expect.any(Object),
    );
    expect(
      screen.getByText(/Nous revenons vers vous rapidement/),
    ).toBeInTheDocument();
  });

  it("posts to Formspree when an endpoint is configured", async () => {
    process.env.NEXT_PUBLIC_FORMSPREE_NIS2_ENDPOINT =
      "https://formspree.io/f/test";
    const fetchMock = jest
      .fn()
      .mockResolvedValue({ ok: true } as Response);
    global.fetch = fetchMock as unknown as typeof fetch;

    render(<Nis2Assessment />);
    start();
    answerAll(() => 0);

    fireEvent.change(screen.getByPlaceholderText("Votre email professionnel"), {
      target: { value: "lead@acme.fr" },
    });
    fireEvent.submit(
      screen.getByRole("button", { name: "Être accompagné" }),
    );

    await waitFor(() =>
      expect(
        screen.getByText(/Nous revenons vers vous rapidement/),
      ).toBeInTheDocument(),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://formspree.io/f/test",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("shows an error when Formspree responds with a failure", async () => {
    process.env.NEXT_PUBLIC_FORMSPREE_NIS2_ENDPOINT =
      "https://formspree.io/f/test";
    global.fetch = jest
      .fn()
      .mockResolvedValue({ ok: false } as Response) as unknown as typeof fetch;

    render(<Nis2Assessment />);
    start();
    answerAll(() => 0);

    fireEvent.change(screen.getByPlaceholderText("Votre email professionnel"), {
      target: { value: "lead@acme.fr" },
    });
    fireEvent.submit(
      screen.getByRole("button", { name: "Être accompagné" }),
    );

    await waitFor(() =>
      expect(screen.getByText(/L'envoi a échoué/)).toBeInTheDocument(),
    );
  });

  it("shows an error when the Formspree request throws", async () => {
    process.env.NEXT_PUBLIC_FORMSPREE_NIS2_ENDPOINT =
      "https://formspree.io/f/test";
    global.fetch = jest
      .fn()
      .mockRejectedValue(new Error("network")) as unknown as typeof fetch;

    render(<Nis2Assessment />);
    start();
    answerAll(() => 0);

    fireEvent.change(screen.getByPlaceholderText("Votre email professionnel"), {
      target: { value: "lead@acme.fr" },
    });
    fireEvent.submit(
      screen.getByRole("button", { name: "Être accompagné" }),
    );

    await waitFor(() =>
      expect(screen.getByText(/L'envoi a échoué/)).toBeInTheDocument(),
    );
  });
});
