import About from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Events from "@/components/Events";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Home/Hero";
import JoinCTA from "@/components/JoinCTA";
import JoinSection from "@/components/JoinSection";
import NewsletterSection from "@/components/NewsLetter";
import TestimonialSection from "@/components/TestimonialSection";
import { socialLinks } from "@/constants";
import { site, siteUrl } from "@/lib/site";

// Structured data for Google (schema.org). Contact details are left out
// until they are confirmed (see TODO.md); social links are added as soon as
// real URLs replace the "#" placeholders in constants.ts.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  alternateName: [site.shortName, site.legalName],
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  description: site.description,
  foundingDate: site.foundingDate,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: site.country,
  },
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Estonian e-Business Register code",
    value: site.registrationCode,
  },
  sameAs: socialLinks.map((s) => s.href).filter((href) => href.startsWith("http")),
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <About />
      <Events />
      <TestimonialSection />
      <JoinSection />
      <ContactSection />
      <JoinCTA />
      <FAQSection />
      <NewsletterSection />
    </div>
  );
}
