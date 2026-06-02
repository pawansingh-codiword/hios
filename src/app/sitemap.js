export default function sitemap() {
  const baseUrl = "https://indianoccult.com";

  const routes = [
    "",
    "/about",
    "/courses",
    "/courses/tarot-reading",
    "/courses/vedic-astrology",
    "/courses/past-life-regression",
    "/courses/akashic-records",
    "/courses/hypnosis",
    "/courses/spell-casting-healing",
    "/contact",
    "/master-class",
    "/sadhana",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}