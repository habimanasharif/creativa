const baseUrl = "https://creativacare.ca";

export default function sitemap() {
  const routes = [
    "",
    "/about/",
    "/services/",
    "/services/personal-care/",
    "/services/companionship/",
    "/services/light-housekeeping/",
    "/services/respite-care/",
    "/for-families/",
    "/contact/",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services/" || route === "/contact/" ? 0.9 : 0.7,
  }));
}
