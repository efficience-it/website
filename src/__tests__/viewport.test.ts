import { viewport } from "@/app/layout";

describe("viewport", () => {
  it("declares theme-color matching the primary brand color", () => {
    expect(viewport.themeColor).toBe("#0066cc");
  });
});
