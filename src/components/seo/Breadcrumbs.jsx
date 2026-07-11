import Link from "next/link";
import { ChevronRight } from "lucide-react";

const SITE_URL = "https://indianoccult.com";

/**
 * Visual breadcrumb trail + BreadcrumbList JSON-LD for SEO.
 * Props: items = [{ name, href }]  (last item = current page)
 */
export function Breadcrumbs({ items = [] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 md:px-6 pt-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm text-amber-100/60">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-amber-300 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="hover:text-amber-300 transition-colors">
                    {item.name}
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/40" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
