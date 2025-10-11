import About from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Events from "@/components/Events";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import JoinCTA from "@/components/JoinCTA";
import JoinSection from "@/components/JoinSection";
import NewsletterSection from "@/components/NewsLetter";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div>
      {" "}
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
