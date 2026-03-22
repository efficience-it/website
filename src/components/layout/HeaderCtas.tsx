"use client";

import Button from "@/components/ui/Button";
import { trackEvent } from "@/lib/tracking";

export default function HeaderCtas() {
  return (
    <>
      <Button
        href="/audit-symfony-gratuit"
        size="sm"
        variant="outline"
        className="ml-4"
        onClick={() => trackEvent("cta_click", { cta_location: "header_desktop", cta_text: "Audit gratuit" })}
      >
        Audit gratuit
      </Button>
      <Button
        href="/contact"
        size="sm"
        className="ml-2"
        onClick={() => trackEvent("cta_click", { cta_location: "header_desktop", cta_text: "Contact" })}
      >
        Contact
      </Button>
    </>
  );
}
