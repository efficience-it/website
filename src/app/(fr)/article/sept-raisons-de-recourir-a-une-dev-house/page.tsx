import type { Metadata } from "next";
import GonePage from "@/components/seo/GonePage";

export const metadata: Metadata = {
  title: "Page supprimée | Efficience IT",
  robots: { index: false },
};

export default function Page() {
  return <GonePage />;
}
