import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQ } from "@/components/seo/FAQ";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { AuthorBio } from "@/components/seo/AuthorBio";
import { Button } from "@/components/ui/button";
import { getService } from "@/lib/data/services";
import { articles, getArticle, getArticlesForService } from "@/lib/data/articles";
import { getAuthor } from "@/lib/data/authors";
import { Sparkles, ArrowRight } from "lucide-react";

const SITE_URL = "https://indianoccult.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ service: a.service, article: a.slug }));
}

export async function generateMetadata({ params }) {
  const { service, article } = await params;
  const data = getArticle(service, article);
  if (!data) return { title: "Not Found" };

  const url = `${SITE_URL}/${service}/${article}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `/${service}/${article}` },
    openGraph: {
      type: "article",
      url,
      title: data.metaTitle,
      description: data.metaDescription,
      siteName: "Hamsa Institute of Occult Science",
    },
  };
}

export default async function ArticlePage({ params }) {
  const { service, article } = await params;
  const data = getArticle(service, article);
  const parent = getService(service);
  if (!data || !parent) notFound();

  const author = getAuthor(data.authorId);

  // Internal linking: parent service + pillar + sibling articles
  const siblings = getArticlesForService(service).filter((a) => a.slug !== article).slice(0, 3);
  const related = [
    { name: parent.name, href: `/${service}`, desc: `Back to the ${parent.name} guide.` },
    ...(parent.coursePath
      ? [{ name: `${parent.name} Course`, href: parent.coursePath, desc: "Certified diploma programme." }]
      : []),
    ...siblings.map((s) => ({ name: s.title, href: `/${service}/${s.slug}`, desc: s.tagline })),
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-slate-950 pb-24">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Occult Science", href: "/occult-science" },
          { name: parent.name, href: `/${service}` },
          { name: data.title, href: `/${service}/${article}` },
        ]}
      />

      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 pt-8 md:pt-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs md:text-sm font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            {parent.name}
          </div>
          <h1 className="heading-serif text-3xl md:text-5xl text-white leading-[1.1] tracking-tight">
            {data.title}
          </h1>
          <p className="mt-5 text-amber-100/75 text-base md:text-lg leading-relaxed">
            {data.intro}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 md:px-6 mt-14">
        <article className="max-w-3xl mx-auto space-y-8">
          {data.sections.map((sec) => (
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

        {/* Back-to-service CTA */}
        <div className="max-w-3xl mx-auto mt-10 text-center">
          <Link href={parent.coursePath || `/${service}`}>
            <Button size="lg" className="h-12 px-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-600/40 transition-all hover:scale-[1.02]">
              Learn {parent.name}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <AuthorBio author={author} />

      <RelatedLinks heading={`More on ${parent.name}`} links={related} />

      <FAQ items={data.faqs} heading={`${data.title} — FAQs`} />
    </div>
  );
}
