import { ContactLocations } from "@/components/contact/ContactLocations";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQSection } from "@/components/shared/FAQSection";
import { FooterCTA } from "@/components/shared/FooterCTA";

export default function ContactPage() {
  return (
    <>
      <ContactLocations />
      <ContactForm />
      <FAQSection />
      <FooterCTA />
    </>
  );
}
