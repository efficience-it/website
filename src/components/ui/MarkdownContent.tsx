"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CopyButton from "@/components/ui/CopyButton";

interface MarkdownContentProps {
  content: string;
}

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return extractText((node as React.ReactElement).props.children);
  }
  return "";
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-dark prose-a:text-primary">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
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
