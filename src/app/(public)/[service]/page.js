import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQ } from "@/components/seo/FAQ";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { AuthorBio } from "@/components/seo/AuthorBio";
import { Button } from "@/components/ui/button";
import { services, getService } from "@/lib/data/services";
import { getServiceContent } from "@/lib/data/serviceContent";
import { getArticlesForService } from "@/lib/data/articles";
import { getAuthor } from "@/lib/data/authors";
import { Sparkles, ArrowRight, GraduationCap } from "lucide-react";

const SITE_URL = "https://indianoccult.com";

// Only render the known service slugs; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }) {
  const { service } = await params;
  const content = getServiceContent(service);
  const meta = getService(service);
  if (!content || !meta) return { title: "Not Found" };

  const url = `${SITE_URL}/${service}`;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords,
    alternates: { canonical: `/${service}` },
    openGraph: {
      type: "article",
      url,
      title: content.metaTitle,
      description: content.metaDescription,
      siteName: "Hamsa Institute of Occult Science",
    },
  };
}

export default async function ServicePage({ params }) {
  const { service } = await params;
  const content = getServiceContent(service);
  const meta = getService(service);
  if (!content || !meta) notFound();

  const author = getAuthor(content.authorId);

  // Supporting (cluster) articles under this service
  const childArticles = getArticlesForService(service);

  // Internal linking: this service's articles + pillar + course + sibling services
  const siblings = services.filter((s) => s.slug !== service).slice(0, 3);
  const related = [
    ...childArticles.map((a) => ({
      name: a.title,
      href: `/${service}/${a.slug}`,
      desc: a.tagline,
    })),
    { name: "Occult Science (Guide)", href: "/occult-science", desc: "The complete hub of all sciences." },
    ...(meta.coursePath
      ? [{ name: `${meta.name} Course`, href: meta.coursePath, desc: "Certified diploma programme." }]
      : []),
    ...siblings.map((s) => ({ name: s.name, href: `/${s.slug}`, desc: s.short })),
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-slate-950 pb-24">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Occult Science", href: "/occult-science" },
          { name: meta.name, href: `/${service}` },
        ]}
      />

      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 pt-8 md:pt-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs md:text-sm font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            {content.tagline}
          </div>
          <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
            {meta.name}
          </h1>
          <p className="mt-5 text-amber-100/75 text-base md:text-lg leading-relaxed">
            {content.intro}
          </p>
        </div>
      </section>

      {/* Long-form content */}
      <section className="container mx-auto px-4 md:px-6 mt-14">
        <article className="max-w-3xl mx-auto space-y-8">
          {content.sections.map((sec) => (
            <div key={sec.h2} className="space-y-4">
              <h2 className="heading-serif text-2xl md:text-3xl text-white">{sec.h2}</h2>
              {sec.body.map((p, i) => (
                <p key={i} className="text-amber-100/80 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </article>

        {/* Course CTA */}
        <div className="max-w-3xl mx-auto mt-10 rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-950/30 via-orange-950/20 to-slate-950/40 backdrop-blur-md p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-600/30 shrink-0">
              <GraduationCap className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Learn {meta.name} — Certified Diploma</h3>
              <p className="text-amber-100/60 text-sm">Live classes, lifetime access, completion certificate.</p>
            </div>
          </div>
          <Link href={meta.coursePath || "/courses"} className="shrink-0 w-full sm:w-auto">
            <Button className="w-full sm:w-auto h-11 px-7 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-600/40 transition-all hover:scale-[1.02]">
              View Course
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <AuthorBio author={author} />

      <RelatedLinks heading="Explore Related Topics" links={related} />

      <FAQ items={content.faqs} heading={`${meta.name} — Frequently Asked Questions`} />
    </div>
  );
}
