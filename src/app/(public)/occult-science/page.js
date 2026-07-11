import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQ } from "@/components/seo/FAQ";
import { AuthorBio } from "@/components/seo/AuthorBio";
import { services } from "@/lib/data/services";
import { getAuthor } from "@/lib/data/authors";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ArrowRight,
  Hash,
  Sun,
  Moon,
  Layers,
  Eye,
  BookOpen,
  Heart,
  Home,
  BrainCircuit,
  Wand2,
  GraduationCap,
} from "lucide-react";

const SITE_URL = "https://indianoccult.com";

const ICONS = { Hash, Sun, Moon, Layers, Eye, BookOpen, Heart, Home, BrainCircuit, Wand2, GraduationCap, Sparkles };

export const metadata = {
  title: "Occult Science — Learn Astrology, Numerology, Tarot & Spiritual Sciences",
  description:
    "A complete guide to Occult Science at HIOS — explore astrology, numerology, tarot, Vedic astrology, past life regression, Akashic records, Reiki, Vastu, hypnosis and more. Learn online with certified diploma courses.",
  keywords: [
    "occult science",
    "learn occult science",
    "spiritual sciences",
    "astrology numerology tarot",
    "occult courses online",
  ],
  alternates: { canonical: "/occult-science" },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/occult-science`,
    title: "Occult Science — Astrology, Numerology, Tarot & Spiritual Sciences | HIOS",
    description:
      "Your complete guide to the occult sciences — astrology, numerology, tarot, healing arts and more.",
  },
};

const faqs = [
  {
    q: "What is Occult Science?",
    a: "Occult Science is the study of hidden knowledge and subtle forces that influence life — including astrology, numerology, tarot, energy healing and esoteric practices. It offers frameworks to understand the self, time, karma and consciousness that go beyond the purely physical.",
  },
  {
    q: "Is occult science real or just superstition?",
    a: "The occult sciences are experiential systems refined over thousands of years. Rather than blind belief, they are practical tools for self-inquiry and guidance. At HIOS we teach them ethically, rooted in original scripture and lived experience.",
  },
  {
    q: "Which occult science should a beginner start with?",
    a: "Numerology and tarot are the most beginner-friendly because they give quick, tangible insight. Astrology is deeper and rewards patience. You can explore each topic page below to decide what resonates with you.",
  },
  {
    q: "Can I learn occult science online?",
    a: "Yes. HIOS offers certified online diploma courses in all major occult sciences, with live and recorded sessions, lifetime access and a completion certificate.",
  },
  {
    q: "Do I need any special ability to learn these subjects?",
    a: "No special powers are required. These are learnable skills built on study, practice and intuition — anyone with sincere interest can master them.",
  },
];

export default function OccultSciencePillarPage() {
  const author = getAuthor("guruma-janvi-tripathi");

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-slate-950 pb-24">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Occult Science", href: "/occult-science" }]} />

      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 pt-8 md:pt-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs md:text-sm font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            The Complete Guide
          </div>
          <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
            Occult{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
              Science
            </span>
          </h1>
          <p className="mt-5 text-amber-100/75 text-base md:text-lg leading-relaxed">
            Explore the ancient sciences of the self — astrology, numerology, tarot,
            healing and more. This is your gateway to understanding, learning, and
            mastering the hidden dimensions of life.
          </p>
        </div>
      </section>

      {/* Intro content (long-form) */}
      <section className="container mx-auto px-4 md:px-6 mt-14">
        <article className="max-w-3xl mx-auto prose-invert space-y-5 text-amber-100/80 leading-relaxed">
          <h2 className="heading-serif text-2xl md:text-3xl text-white">
            What is Occult Science?
          </h2>
          <p>
            The word <em>occult</em> simply means &ldquo;hidden.&rdquo; Occult
            Science is the study of the hidden laws that shape our lives — the
            movement of planets, the vibration of numbers, the symbolism of cards,
            and the flow of subtle energy through body, space and time. For
            thousands of years, seers and rishis observed these patterns and
            codified them into precise, teachable systems. What survives today is
            not superstition, but a living body of knowledge for understanding the
            self and navigating life with clarity.
          </p>
          <p>
            At Hamsa Institute of Occult Science (HIOS), we treat these subjects as
            genuine sciences — grounded in original texts, tested through practice,
            and taught with integrity. Whether your goal is self-knowledge, healing,
            or building a professional practice, the occult sciences offer a map for
            the parts of life that logic alone cannot reach.
          </p>

          <h2 className="heading-serif text-2xl md:text-3xl text-white pt-4">
            The Branches of Occult Science
          </h2>
          <p>
            Occult knowledge is vast, but it flows through a few great rivers. Each
            branch below is a complete discipline in itself, with its own history,
            method and purpose. Click any topic to go deeper.
          </p>
        </article>
      </section>

      {/* Internal links — 12 services */}
      <section className="container mx-auto px-4 md:px-6 mt-10">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = ICONS[s.icon] || Sparkles;
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group rounded-2xl border border-amber-500/20 bg-amber-950/10 backdrop-blur-md p-5 hover:border-amber-400/60 hover:bg-amber-950/20 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-600/30 mb-3">
                  <Icon className="w-5 h-5 text-slate-950" />
                </div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-white font-bold group-hover:text-amber-300 transition-colors">
                    {s.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-amber-300/60 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
                <p className="text-amber-100/55 text-sm">{s.short}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why learn */}
      <section className="container mx-auto px-4 md:px-6 mt-16">
        <article className="max-w-3xl mx-auto space-y-5 text-amber-100/80 leading-relaxed">
          <h2 className="heading-serif text-2xl md:text-3xl text-white">
            Why Learn the Occult Sciences?
          </h2>
          <p>
            People come to occult science for many reasons. Some seek answers during
            a crossroads — a career decision, a relationship question, a health
            concern — and find that astrology or tarot offers a fresh, meaningful
            perspective. Others are drawn to healing: Reiki, past-life regression and
            energy work help release patterns that talk-therapy alone cannot touch.
            And a growing number want to build a <strong>profession</strong> —
            becoming certified consultants who guide others for a living.
          </p>
          <p>
            Whatever your reason, learning these subjects develops something rare:
            the ability to see life symbolically. You begin to notice cycles,
            timing, and meaning where you once saw only chaos. That shift — from
            reacting to understanding — is the true gift of occult study.
          </p>

          <h2 className="heading-serif text-2xl md:text-3xl text-white pt-4">
            Learning Occult Science Online with HIOS
          </h2>
          <p>
            You no longer need to travel to an ashram or find a rare guru to learn
            these sciences. HIOS brings authentic teaching to you through structured{" "}
            <Link href="/online-occult-courses" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              online occult courses
            </Link>
            . Each certified diploma includes live classes, lifetime access to
            recordings, downloadable material and a recognised completion
            certificate. You learn at your own pace, guided by experienced teachers,
            and graduate ready to practise with confidence.
          </p>
          <p>
            Ready to begin? Explore any topic above, or browse all of our{" "}
            <Link href="/courses" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              diploma courses
            </Link>{" "}
            to find the path that calls to you.
          </p>
        </article>

        <div className="max-w-3xl mx-auto mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/courses">
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-600/40 transition-all hover:scale-[1.02]">
              Explore All Courses
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 rounded-full border border-amber-400/50 bg-slate-950/60 hover:bg-amber-950/60 text-amber-100 transition-all hover:scale-[1.02]">
              Free Counselling
            </Button>
          </Link>
        </div>
      </section>

      <AuthorBio author={author} />

      <FAQ items={faqs} heading="Occult Science — Frequently Asked Questions" />
    </div>
  );
}
