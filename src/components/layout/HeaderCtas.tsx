import TrackedHeaderLink from "./TrackedHeaderLink";

export default function HeaderCtas() {
  return (
    <div className="ml-4 flex items-center gap-2">
      <TrackedHeaderLink
        href="/audit-symfony-gratuit"
        className="group inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-dark shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md"
        location="header_desktop"
        text="Audit gratuit"
      >
        <svg
          className="h-4 w-4 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
        Audit gratuit
      </TrackedHeaderLink>
      <TrackedHeaderLink
        href="/contact"
        className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-primary-dark hover:shadow-md"
        location="header_desktop"
        text="Contact"
      >
        Nous contacter
        <svg
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </TrackedHeaderLink>
    </div>
  );
}
