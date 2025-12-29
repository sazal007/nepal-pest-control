import { ContactForm } from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact for Nepal Pest Control - Professional Pest Control Services",
};

// ISR: Revalidate every hour (3600 seconds)
export const revalidate = 3600;

export default function ContactPage() {
  return (
    <>
      {/* <ContactLocations /> */}
      <ContactForm />
    </>
  );
}
