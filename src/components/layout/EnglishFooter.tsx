import { getMessages } from "@/lib/i18n/messages";

export default function EnglishFooter() {
  const messages = getMessages("en");

  return (
    <footer className="border-t border-border bg-light-gray py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-gray sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          &copy; Efficience IT. {messages.rights}.
        </p>
        <ul className="flex flex-wrap gap-4">
          <li>
            <a href="/mentions-legales" hrefLang="fr" lang="fr" className="hover:text-primary">
              {messages.legalNotice} ({messages.inFrench})
            </a>
          </li>
          <li>
            <a href="/contact" hrefLang="fr" lang="fr" className="hover:text-primary">
              {messages.contact} ({messages.inFrench})
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
