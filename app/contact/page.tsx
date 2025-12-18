import { ContactForm } from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Xinfin Consulting",
  description:
    "Contact for Xinfin - Professional Accounting, Compliance & Business Setup",
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
