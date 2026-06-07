import {
  occultCourses,
  getOccultCourseById,
} from "@/lib/data/occult-courses";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Globe,
  Award,
  PlayCircle,
  Sparkles,
  BookOpen,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/forms/ContactForm";
import { EnrollButton } from "@/components/forms/EnrollButton";

const SITE_URL = "https://indianoccult.com";

export async function generateStaticParams() {
  return occultCourses.map((c) => ({ courseId: c.id }));
}

export async function generateMetadata({ params }) {
  const { courseId } = await params;
  const course = getOccultCourseById(courseId);

  if (!course) {
    return {
      title: "Course Not Found | HIOS",
      description: "The course you are looking for does not exist.",
    };
  }

  const url = `${SITE_URL}/courses/${course.id}`;
  const title = course.seo?.title || `${course.title} Diploma | HIOS`;
  const description =
    course.seo?.description || course.description;
  const keywords = course.seo?.keywords || [course.title];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "Hamsa Institute of Occult Science",
      images: [
        {
          url: `${SITE_URL}${course.image}`,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${course.image}`],
    },
  };
}

export default async function CourseDetailPage({ params }) {
  const { courseId } = await params;
  const course = getOccultCourseById(courseId);

  if (!course) notFound();

  // Schema.org JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    image: `${SITE_URL}${course.image}`,
    provider: {
      "@type": "EducationalOrganization",
      name: "Hamsa Institute of Occult Science",
      sameAs: SITE_URL,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      inLanguage: course.language,
      instructor: {
        "@type": "Person",
        name: course.instructor,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-slate-950 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 pt-8">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm text-amber-300 hover:text-yellow-200 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to All Courses
        </Link>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 mt-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
          {/* Left */}
          <div className="space-y-4 md:space-y-5 order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-md text-[11px] font-bold tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:scale-105 transition-transform cursor-default">
                {course.tag}
              </span>
              <span className="px-3 py-1 rounded-md text-[11px] font-bold tracking-wider bg-yellow-300 text-slate-950 hover:scale-105 transition-transform cursor-default">
                {course.level}
              </span>
              <span className="px-3 py-1 rounded-md text-[11px] font-semibold tracking-wider bg-amber-500/15 border border-amber-400/40 text-amber-200 hover:bg-amber-500/25 transition-colors cursor-default">
                ✦ CERTIFIED
              </span>
            </div>

            <h1 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight">
              {course.title}
            </h1>
            <p className="text-amber-300 text-base md:text-lg heading-serif italic">
              {course.tagline}
            </p>

            <p className="text-amber-100/75 text-sm md:text-base leading-relaxed line-clamp-4 md:line-clamp-none">
              {course.longDescription}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-amber-500/20">
              <MetaItem icon={Clock} label="Duration" value={course.duration} />
              <MetaItem
                icon={BookOpen}
                label="Lessons"
                value={course.totalLessons}
              />
              <MetaItem icon={Globe} label="Language" value={course.language} />
              <MetaItem icon={Award} label="Award" value="Diploma" />
            </div>

            {/* Price */}
            {course.price && (
              <div className="flex flex-wrap items-end gap-3 pt-4">
                <span className="heading-serif text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-400">
                  ₹{course.price.toLocaleString("en-IN")}
                </span>
                {course.originalPrice && course.originalPrice > course.price && (
                  <>
                    <span className="text-amber-100/40 text-lg md:text-xl line-through mb-1">
                      ₹{course.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="mb-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                      {Math.round(
                        ((course.originalPrice - course.price) /
                          course.originalPrice) *
                          100
                      )}
                      % OFF
                    </span>
                  </>
                )}
              </div>
            )}

            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <EnrollButton
                courseName={course.title}
                size="lg"
                className="group w-full sm:w-auto h-12 px-7 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-600/40 transition-all hover:scale-[1.03] hover:shadow-amber-500/50"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </EnrollButton>
              <a href="#curriculum">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 px-7 rounded-xl border border-amber-400/50 bg-slate-950/60 hover:bg-amber-950/60 text-amber-100 backdrop-blur-sm transition-all hover:scale-[1.03]"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Curriculum
                </Button>
              </a>
            </div>
          </div>

          {/* Right — hero image (compact) */}
          <div className="relative order-1 lg:order-2 mx-auto w-full max-w-md lg:max-w-none">
            <div className="group relative rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl shadow-amber-900/40 aspect-[4/3] lg:aspect-square max-h-[420px] bg-gradient-to-br from-amber-950 via-orange-950 to-slate-950">
              <img
                src={course.image}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

              {/* Floating decorative badge top-right */}
              <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-slate-950/70 border border-amber-300/40 backdrop-blur-sm text-[10px] uppercase tracking-widest text-amber-200 font-bold">
                {course.totalLessons} Lessons
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-amber-300 text-[10px] uppercase tracking-widest font-semibold mb-0.5">
                    Guided by
                  </p>
                  <p className="heading-serif text-amber-50 text-lg md:text-xl leading-tight">
                    {course.instructor}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-amber-400/90 overflow-hidden shrink-0 shadow-lg shadow-amber-600/40 group-hover:scale-110 transition-transform bg-slate-900">
                  <img
                    src={
                      course.instructor === "Guruma Janvi Tripathi"
                        ? "/images/GurumaJanviTripathi.jpeg"
                        : course.instructor === "Ajay Kumar"
                        ? "/images/ajay_kumar_astrologer.png"
                        : "/images/faculty1.png"
                    }
                    alt={course.instructor}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -inset-3 -z-10 bg-gradient-to-br from-amber-500/30 via-orange-500/15 to-transparent rounded-3xl blur-2xl" />
          </div>
        </div>
      </section>

      {/* Lead capture — course pre-filled */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — heading / pitch */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-3">
              <Sparkles className="w-4 h-4" />
              Enquire Now
            </div>
            <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Get Details for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
                {course.title}
              </span>
            </h2>
            <p className="text-amber-100/60 text-sm md:text-base mt-4 max-w-md mx-auto lg:mx-0">
              Fill in your details and our counsellor will reach out about this
              course — fees, schedule, and how to get started.
            </p>
          </div>

          {/* Right — form */}
          <ContactForm courseName={course.title} heading="" subheading="" />
        </div>
      </section>

      {/* Learning outcomes */}
      <section className="container mx-auto px-4 md:px-6 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            What You&apos;ll Learn
          </div>
          <h2 className="heading-serif text-3xl md:text-4xl text-white mb-8">
            Skills You&apos;ll Master
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {course.learningOutcomes.map((outcome, idx) => (
              <div
                key={outcome}
                className="group flex items-start gap-3 p-4 rounded-xl border border-amber-500/20 bg-amber-950/10 backdrop-blur-sm hover:border-amber-400/60 hover:bg-amber-950/25 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/10 transition-all cursor-default"
              >
                <span className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300 text-xs font-bold shrink-0 group-hover:bg-amber-500/30 group-hover:scale-110 transition-all">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-amber-100/85 text-sm md:text-base leading-relaxed group-hover:text-amber-50 transition-colors">
                  {outcome}
                </p>
                <CheckCircle className="w-5 h-5 text-amber-300/0 group-hover:text-amber-300 shrink-0 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum — interactive accordion */}
      <section
        id="curriculum"
        className="container mx-auto px-4 md:px-6 mt-20 scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <div>
              <div className="flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-2">
                <BookOpen className="w-4 h-4" />
                Curriculum
              </div>
              <h2 className="heading-serif text-3xl md:text-4xl text-white">
                Course Modules
              </h2>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-semibold">
              {course.modules.length} Modules · {course.totalLessons} Lessons
            </span>
          </div>

          <div className="space-y-3">
            {course.modules.map((mod, idx) => (
              <details
                key={mod.title}
                open={idx === 0}
                className="group rounded-2xl border border-amber-500/20 bg-amber-950/10 backdrop-blur-md hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-3 p-5 md:p-6 cursor-pointer list-none select-none">
                  <div className="flex items-center gap-3 md:gap-4 min-w-0">
                    <span className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 font-bold shrink-0 shadow-md shadow-amber-600/30 group-open:rotate-6 transition-transform">
                      0{idx + 1}
                    </span>
                    <h3 className="heading-serif text-lg md:text-xl text-white truncate">
                      {mod.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline text-amber-200/60 text-xs uppercase tracking-widest">
                      {mod.lessons.length} Lessons
                    </span>
                    <ArrowRight className="w-4 h-4 text-amber-300 group-open:rotate-90 transition-transform" />
                  </div>
                </summary>
                <ul className="px-5 md:px-6 pb-5 md:pb-6 pt-0 space-y-2 border-t border-amber-500/15">
                  {mod.lessons.map((lesson, lIdx) => {
                    const isFree = lIdx === 0 && idx === 0;
                    return (
                      <li
                        key={lesson}
                        className="flex items-center gap-3 p-2.5 rounded-lg text-amber-100/80 text-sm md:text-base hover:bg-amber-500/10 hover:text-amber-100 transition-colors cursor-default"
                      >
                        <PlayCircle
                          className={`w-4 h-4 shrink-0 ${
                            isFree ? "text-amber-300" : "text-amber-500/40"
                          }`}
                        />
                        <span className="flex-1">{lesson}</span>
                        {isFree && (
                          <span className="text-[10px] uppercase tracking-wider text-slate-950 bg-yellow-300 font-bold px-2 py-0.5 rounded-md">
                            Free Preview
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Why this course */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="max-w-4xl mx-auto rounded-3xl border border-amber-500/25 bg-gradient-to-br from-amber-950/30 via-orange-950/20 to-slate-950/40 backdrop-blur-md p-8 md:p-12">
          <h2 className="heading-serif text-2xl md:text-3xl text-white text-center mb-10">
            Why Choose This{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
              Diploma
            </span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <Highlight
              icon={Users}
              title="12,000+ Sadhaks"
              desc="A global learning community"
            />
            <Highlight
              icon={Award}
              title="Certified Diploma"
              desc="Recognised completion certificate"
            />
            <Highlight
              icon={Star}
              title="Lifetime Access"
              desc="Live + recorded sessions forever"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-3">
              <Sparkles className="w-4 h-4" />
              FAQs
            </div>
            <h2 className="heading-serif text-3xl md:text-4xl text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {course.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-amber-500/20 bg-amber-950/10 backdrop-blur-md p-5 hover:border-amber-400/40 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none text-white font-semibold">
                  <span>{faq.q}</span>
                  <ArrowRight className="w-4 h-4 text-amber-300 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-amber-100/70 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-950/40 via-orange-950/30 to-slate-950 backdrop-blur-md p-10 md:p-14 text-center">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
              Ready to Begin{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
                {course.title}?
              </span>
            </h2>
            <p className="text-amber-100/75 text-base md:text-lg mb-8">
              Join our next cohort and step onto the path of {course.title.toLowerCase()} mastery.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <EnrollButton
                courseName={course.title}
                size="lg"
                className="w-full sm:w-auto h-13 px-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-600/40 transition-all hover:scale-[1.02]"
              >
                Enroll Now
              </EnrollButton>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-13 px-8 rounded-full border border-amber-400/50 bg-slate-950/60 hover:bg-amber-950/60 text-amber-100 backdrop-blur-sm transition-all hover:scale-[1.02]"
                >
                  Talk to Counsellor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MetaItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-widest text-amber-200/60 font-semibold">
          {label}
        </p>
        <p className="text-white text-sm font-semibold truncate">{value}</p>
      </div>
    </div>
  );
}

function Highlight({ icon: Icon, title, desc }) {
  return (
    <div>
      <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-600/40 mb-3">
        <Icon className="w-6 h-6 text-slate-950" />
      </div>
      <h3 className="heading-serif text-lg text-white mb-1">{title}</h3>
      <p className="text-amber-100/65 text-sm">{desc}</p>
    </div>
  );
}
