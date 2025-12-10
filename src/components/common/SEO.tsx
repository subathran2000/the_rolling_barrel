import { Helmet } from "@dr.pogodin/react-helmet";
import { RESTAURANT_INFO } from "@/constants";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  image?: string;
  url?: string;
}

const defaultDescription = `${RESTAURANT_INFO.name} - ${RESTAURANT_INFO.tagline} Located at ${RESTAURANT_INFO.address.full}. Serving breakfast, lunch & dinner 7 days a week.`;

const defaultKeywords =
  "restaurant, Oshawa, breakfast, lunch, dinner, bar, grill, The Rolling Barrel, family restaurant, Ontario";

const SEO = ({
  title,
  description = defaultDescription,
  keywords = defaultKeywords,
  image = "/og-image.jpg",
  url = "https://rollingbarrel.ca",
}: SEOProps) => {
  const keywordsString = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords;
  const fullTitle = title
    ? `${title} | ${RESTAURANT_INFO.name}`
    : `${RESTAURANT_INFO.name} | ${RESTAURANT_INFO.subtitle}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content={RESTAURANT_INFO.name} />
      <link rel="canonical" href={url} />

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: RESTAURANT_INFO.name,
          image: image,
          url: `https://${RESTAURANT_INFO.website}`,
          telephone: RESTAURANT_INFO.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: RESTAURANT_INFO.address.street,
            addressLocality: RESTAURANT_INFO.address.city,
            addressRegion: RESTAURANT_INFO.address.province,
            postalCode: RESTAURANT_INFO.address.postalCode,
            addressCountry: RESTAURANT_INFO.address.country,
          },
          servesCuisine: ["Canadian", "American", "Breakfast", "Bar Food"],
          priceRange: "$$",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
              opens: "08:00",
              closes: "22:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Friday", "Saturday"],
              opens: "09:00",
              closes: "23:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "09:00",
              closes: "21:00",
            },
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
