import { ContactLocations } from "@/components/contact/ContactLocations";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQSection } from "@/components/shared/FAQSection";

export default function ContactPage() {
  return (
    <>
      <ContactLocations />
      <ContactForm />
      <FAQSection />
    </>
  );
}
