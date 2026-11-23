import type { Metadata, Viewport } from "next";
import RootDocument from "@/components/layout/RootDocument";
import EnglishHeader from "@/components/layout/EnglishHeader";
import EnglishFooter from "@/components/layout/EnglishFooter";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itefficience.com"),
  title: {
    default: "Efficience IT",
    template: "%s",
  },
};

export const viewport: Viewport = {
  themeColor: "#0066cc",
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootDocument
      lang="en"
      skipLabel="Skip to content"
      header={<EnglishHeader />}
      footer={
        <>
          <EnglishFooter />
          <BackToTop label="Back to top" />
        </>
      }
    >
      {children}
    </RootDocument>
  );
}
