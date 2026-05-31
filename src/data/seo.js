/** Update siteUrl if you rename the Vercel project or add a custom domain. */
export const siteUrl = "https://port-folio-nine-azure.vercel.app";

export const seo = {
  title: "Abdulrahman Iqbal | Python Developer & Backend Engineer",
  description:
    "Abdulrahman Iqbal — Python Developer, Backend Engineer & Automation Specialist in Lahore, Pakistan. Portfolio showcasing ERP automation, Django, Flask, n8n, and AI/ML projects. CS student at University of the Punjab.",
  keywords: [
    "Abdulrahman Iqbal",
    "Abdulrahman Iqbal portfolio",
    "Abdulrahman Iqbal developer",
    "Python developer Lahore",
    "backend engineer Pakistan",
    "automation specialist",
    "ERP automation",
    "Django developer",
    "Flask developer",
    "n8n automation",
  ].join(", "),
  author: "Abdulrahman Iqbal",
  locale: "en_US",
  image: "https://avatars.githubusercontent.com/u/203318462?v=4",
  twitterHandle: "@Abraaham1",
};

export function personJsonLd(personal) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.fullName,
    alternateName: personal.name,
    url: siteUrl,
    image: personal.avatar,
    email: `mailto:${personal.email}`,
    jobTitle: personal.title,
    description: seo.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    sameAs: [personal.github, personal.linkedin],
    knowsAbout: [
      "Python",
      "Backend Development",
      "Automation",
      "ERP Integration",
      "Django",
      "Flask",
      "Machine Learning",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of the Punjab",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.title,
    url: siteUrl,
    description: seo.description,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: "Abdulrahman Iqbal",
    },
  };
}
