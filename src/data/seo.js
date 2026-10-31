/** Update siteUrl if you rename the Vercel project or add a custom domain. */
export const siteUrl = "https://abd-tech.vercel.app";

export const seo = {
  title: "Abdulrahman Iqbal | ML Researcher & Backend Engineer",
  description:
    "Abdulrahman Iqbal — Machine Learning Researcher, Backend Engineer, and Python Developer in Lahore, Pakistan. Portfolio covering reinforcement learning, zkML research, robotics, and production backend systems. CS student at University of the Punjab.",
  keywords: [
    "Abdulrahman Iqbal",
    "Abdulrahman Iqbal portfolio",
    "machine learning researcher",
    "Python developer Lahore",
    "backend engineer Pakistan",
    "reinforcement learning",
    "zkML",
    "PyTorch",
    "FastAPI",
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
    jobTitle: "Machine Learning Researcher",
    description: seo.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    sameAs: [personal.github, personal.linkedin],
    knowsAbout: [
      "Machine Learning",
      "Reinforcement Learning",
      "PyTorch",
      "Python",
      "Backend Development",
      "FastAPI",
      "Robotics",
      "Zero-Knowledge Proofs",
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
