import { HIOS } from "@/lib/data/authors";

/**
 * Author / teacher byline card + Person JSON-LD (E-E-A-T signal).
 * Props: author = { name, role, image, bio, credentials }
 */
export function AuthorBio({ author, label = "Written & reviewed by" }) {
  if (!author) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    image: `${HIOS.url}${author.image}`,
    worksFor: { "@type": "EducationalOrganization", name: HIOS.name, url: HIOS.url },
    knowsAbout: author.credentials,
  };

  return (
    <section className="container mx-auto px-4 md:px-6 mt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto rounded-2xl border border-amber-500/25 bg-amber-950/15 backdrop-blur-md p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-400/50 shrink-0">
          <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-amber-300/70 font-semibold mb-1">
            {label}
          </p>
          <h3 className="heading-serif text-xl text-white">{author.name}</h3>
          <p className="text-amber-300 text-sm mb-2">{author.role}</p>
          <p className="text-amber-100/70 text-sm leading-relaxed">{author.bio}</p>
        </div>
      </div>
    </section>
  );
}
