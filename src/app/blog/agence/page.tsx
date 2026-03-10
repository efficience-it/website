import type { Metadata } from "next";
import RedirectPage from "@/components/seo/RedirectPage";
import { BASE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  robots: { index: false },
  alternates: { canonical: `${BASE_URL}/blog/lagence` },
};

export default function Page() {
  return <RedirectPage to="/blog/lagence" />;
}
