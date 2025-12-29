import { AppointmentForm } from "@/components/appointment/appointment-form";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appointment",
  description: "Appointment for our pest control services",
};

export default function AppointmentPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <SectionHeading
              tag="[Appointment]"
              title="Schedule Your Consultation"
              italicWord="Consultation"
              align="center"
              className="mb-4"
            />
            <p className="text-gray-500">
              Fill out the form below to get started with our expert team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
