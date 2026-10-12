import { act, fireEvent, render, screen } from "@testing-library/react";
import ArticleShareButtons from "@/components/ui/ArticleShareButtons";
import { trackEvent } from "@/lib/tracking";

jest.mock("@/lib/tracking", () => ({ trackEvent: jest.fn() }));

const url = "https://www.itefficience.com/article/exemple";

function setClipboard(value: unknown) {
  Object.defineProperty(navigator, "clipboard", { value, configurable: true });
}

function setExecCommand(result: boolean) {
  Object.defineProperty(document, "execCommand", {
    value: jest.fn(() => result),
    configurable: true,
  });
}

beforeEach(() => {
  jest.useFakeTimers();
  (trackEvent as jest.Mock).mockClear();
});

afterEach(() => {
  jest.useRealTimers();
});

describe("ArticleShareButtons labels", () => {
  it("renders French labels by default", () => {
    render(<ArticleShareButtons url={url} title="Titre" articleSlug="exemple" />);
    expect(screen.getByLabelText("Partager sur LinkedIn")).toHaveAttribute(
      "href",
      expect.stringContaining("linkedin.com"),
    );
    expect(screen.getByLabelText("Partager sur X")).toHaveAttribute(
      "href",
      expect.stringContaining("text=Titre"),
    );
    expect(screen.getByLabelText("Copier le lien")).toBeInTheDocument();
  });

  it("renders English labels", () => {
    render(<ArticleShareButtons url={url} title="Title" articleSlug="exemple" language="en" />);
    expect(screen.getByLabelText("Share on LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Copy link")).toHaveAttribute("title", "Copy the article link");
  });
});

describe("ArticleShareButtons tracking and copy", () => {
  it("tracks a share click", () => {
    render(<ArticleShareButtons url={url} title="T" articleSlug="exemple" />);
    fireEvent.click(screen.getByLabelText("Partager sur LinkedIn"));
    expect(trackEvent).toHaveBeenCalledWith("share", { method: "linkedin", article_slug: "exemple" });
  });

  it("copies with the clipboard API then resets the label", async () => {
    const writeText = jest.fn().mockResolvedValue(undefined);
    setClipboard({ writeText });
    render(<ArticleShareButtons url={url} title="T" articleSlug="exemple" />);
    await act(async () => {
      fireEvent.click(screen.getByLabelText("Copier le lien"));
    });
    expect(writeText).toHaveBeenCalledWith(url);
    expect(screen.getByLabelText("Lien copié")).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(screen.getByLabelText("Lien copié"));
    });
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByLabelText("Copier le lien")).toBeInTheDocument();
  });

  it("falls back to execCommand when the clipboard API throws", async () => {
    setClipboard({ writeText: jest.fn().mockRejectedValue(new Error("denied")) });
    setExecCommand(true);
    render(<ArticleShareButtons url={url} title="T" articleSlug="exemple" />);
    await act(async () => {
      fireEvent.click(screen.getByLabelText("Copier le lien"));
    });
    expect(screen.getByLabelText("Lien copié")).toBeInTheDocument();
    expect(trackEvent).toHaveBeenCalledWith("share", { method: "copy_link", article_slug: "exemple" });
  });

  it("falls back to execCommand without a clipboard API", async () => {
    setClipboard(undefined);
    setExecCommand(true);
    render(<ArticleShareButtons url={url} title="T" articleSlug="exemple" />);
    await act(async () => {
      fireEvent.click(screen.getByLabelText("Copier le lien"));
    });
    expect(screen.getByLabelText("Lien copié")).toBeInTheDocument();
  });

  it("does nothing when every copy method fails", async () => {
    setClipboard(undefined);
    setExecCommand(false);
    render(<ArticleShareButtons url={url} title="T" articleSlug="exemple" />);
    await act(async () => {
      fireEvent.click(screen.getByLabelText("Copier le lien"));
    });
    expect(screen.getByLabelText("Copier le lien")).toBeInTheDocument();
    expect(trackEvent).not.toHaveBeenCalled();
  });
});
