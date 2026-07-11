import { occultCourses } from "@/lib/data/occult-courses";
import { services } from "@/lib/data/services";
import { articles } from "@/lib/data/articles";

const baseUrl = "https://indianoccult.com";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/occult-science",
    "/courses",
    "/contact",
    "/master-class",
    "/sadhana",
    "/register",
    "/applyjob",
    "/admissions",
    "/privacy",
  ];

  const courseRoutes = occultCourses.map((c) => `/courses/${c.id}`);
  const serviceRoutes = services.map((s) => `/${s.slug}`);
  const articleRoutes = articles.map((a) => `/${a.service}/${a.slug}`);

  const routes = [...staticRoutes, ...courseRoutes, ...serviceRoutes, ...articleRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
