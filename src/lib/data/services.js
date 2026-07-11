// Central registry of "service" topic pages (flat, SEO-friendly URLs).
// Used by the pillar page, navbar, footer, internal-linking and sitemap.

export const services = [
  {
    slug: "numerology",
    name: "Numerology",
    short: "The science of numbers and their influence on destiny.",
    icon: "Hash",
    coursePath: "/courses/vedic-numerology",
  },
  {
    slug: "astrology",
    name: "Astrology",
    short: "Read the cosmic blueprint of any life through the planets.",
    icon: "Sun",
    coursePath: "/courses/vedic-astrology",
  },
  {
    slug: "vedic-astrology",
    name: "Vedic Astrology",
    short: "Classical Jyotish — the eye of the Vedas.",
    icon: "Moon",
    coursePath: "/courses/vedic-astrology",
  },
  {
    slug: "tarot-reading",
    name: "Tarot Reading",
    short: "Intuitive guidance through the 78 sacred cards.",
    icon: "Layers",
    coursePath: "/courses/tarot-reading",
  },
  {
    slug: "past-life-regression",
    name: "Past Life Regression",
    short: "Heal karmic patterns by revisiting the soul's journey.",
    icon: "Eye",
    coursePath: "/courses/past-life-regression",
  },
  {
    slug: "akashic-records",
    name: "Akashic Records",
    short: "Access the cosmic library of your soul.",
    icon: "BookOpen",
    coursePath: "/courses/akashic-records",
  },
  {
    slug: "reiki-healing",
    name: "Reiki Healing",
    short: "Channel universal life-force energy for deep healing.",
    icon: "Heart",
    coursePath: null,
  },
  {
    slug: "vastu-shastra",
    name: "Vastu Shastra",
    short: "Align your spaces with the five elements.",
    icon: "Home",
    coursePath: "/courses/vastu-shastra",
  },
  {
    slug: "hypnosis",
    name: "Hypnosis",
    short: "Reprogram the subconscious for lasting change.",
    icon: "BrainCircuit",
    coursePath: "/courses/hypnosis",
  },
  {
    slug: "spell-casting",
    name: "Spell Casting",
    short: "Sacred rituals for protection and manifestation.",
    icon: "Wand2",
    coursePath: "/courses/spell-casting-healing",
  },
  {
    slug: "spiritual-sciences",
    name: "Spiritual Sciences",
    short: "The complete map of ancient esoteric knowledge.",
    icon: "Sparkles",
    coursePath: "/courses",
  },
  {
    slug: "online-occult-courses",
    name: "Online Occult Courses",
    short: "Certified diploma programmes you can learn from home.",
    icon: "GraduationCap",
    coursePath: "/courses",
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
