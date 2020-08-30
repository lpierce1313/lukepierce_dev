const title = "Luke Pierce – Developer, Fitness Enthusiast, avid hiker.";
const description =
  "Front-end developer, JavaScript enthusiast, and course creator.";

const SEO = {
  title,
  description,
  canonical: "https://lukepierce.dev",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://lukepierce.dev",
    title,
    description,
    images: [
      {
        url: "https://lukepierce.dev/static/images/og.jpg",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@leeerob",
    site: "@leeerob",
    cardType: "summary_large_image",
  },
};

export default SEO;
