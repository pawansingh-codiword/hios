import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Internal-linking block — cards linking to related topic/service/article pages.
 * Props: heading?, links = [{ name, href, desc? }]
 */
export function RelatedLinks({ heading = "Explore Related Topics", links = [] }) {
  if (!links.length) return null;

  return (
    <section className="container mx-auto px-4 md:px-6 mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-serif text-2xl md:text-3xl text-white text-center mb-8">
          {heading}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group rounded-xl border border-amber-500/20 bg-amber-950/10 backdrop-blur-md p-5 hover:border-amber-400/60 hover:bg-amber-950/20 transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h3 className="text-white font-semibold group-hover:text-amber-300 transition-colors">
                  {l.name}
                </h3>
                <ArrowRight className="w-4 h-4 text-amber-300/60 group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
              {l.desc && <p className="text-amber-100/55 text-sm">{l.desc}</p>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
