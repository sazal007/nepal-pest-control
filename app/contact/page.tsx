import { ContactForm } from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Xinfin Consulting",
  description: "Contact for Xinfin Consulting",
};

export default function ContactPage() {
  return (
    <>
      {/* <ContactLocations /> */}
      <ContactForm />
    </>
  );
}
