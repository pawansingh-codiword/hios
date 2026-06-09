import { occultCourses } from "@/lib/data/occult-courses";

const baseUrl = "https://indianoccult.com";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
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

  const routes = [...staticRoutes, ...courseRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
