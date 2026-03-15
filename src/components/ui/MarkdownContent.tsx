"use client";

import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CopyButton from "@/components/ui/CopyButton";

interface MarkdownContentProps {
  content: string;
}

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node !== null && typeof node === "object" && "props" in (node as never)) {
    return extractText(
      (node as unknown as { props: { children?: React.ReactNode } }).props
        .children,
    );
  }
  return "";
}

function generateId(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-dark prose-a:text-primary">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href, children }) {
            if (href && href.startsWith("http")) {
              return (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              );
            }
            return <Link href={href || ""}>{children}</Link>;
          },
          h2({ children }) {
            const text = extractText(children);
            const id = generateId(text);
            return <h2 id={id}>{children}</h2>;
          },
          h3({ children }) {
            const text = extractText(children);
            const id = generateId(text);
            return <h3 id={id}>{children}</h3>;
          },
          pre({ children }) {
            const text = extractText(children);
            return (
              <pre className="relative">
                <CopyButton text={text} />
                {children}
              </pre>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
