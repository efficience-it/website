import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  getPageHref: (page: number) => string;
}

const itemClass =
  "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors";

export default function Pagination({ currentPage, pageCount, getPageHref }: Readonly<PaginationProps>) {
  if (pageCount <= 1) return null;

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="mt-12">
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {currentPage > 1 && (
          <li>
            <Link
              href={getPageHref(currentPage - 1)}
              rel="prev"
              className={`${itemClass} bg-light-gray text-dark hover:bg-primary hover:text-white`}
            >
              Précédent
            </Link>
          </li>
        )}
        {pages.map((page) => (
          <li key={page}>
            {page === currentPage ? (
              <span aria-current="page" className={`${itemClass} bg-primary text-white`}>
                {page}
              </span>
            ) : (
              <Link
                href={getPageHref(page)}
                aria-label={`Page ${page}`}
                className={`${itemClass} bg-light-gray text-dark hover:bg-primary hover:text-white`}
              >
                {page}
              </Link>
            )}
          </li>
        ))}
        {currentPage < pageCount && (
          <li>
            <Link
              href={getPageHref(currentPage + 1)}
              rel="next"
              className={`${itemClass} bg-light-gray text-dark hover:bg-primary hover:text-white`}
            >
              Suivant
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
