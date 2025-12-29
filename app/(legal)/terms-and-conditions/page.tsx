import { SectionHeading } from "@/components/ui/SectionHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read Nepal Pest Control's Terms and Conditions. Understand the terms of use for our website and services, including user rights, intellectual property, and legal agreements.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms & Conditions - Nepal Pest Control",
    description:
      "Read Nepal Pest Control's Terms and Conditions. Understand the terms of use for our website and services.",
    url: "https://www.nepalpestcontrol.com/terms-and-conditions",
    siteName: "Nepal Pest Control",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions - Nepal Pest Control",
    description: "Nepal Pest Control's Terms and Conditions",
  },
  alternates: {
    canonical: "https://www.nepalpestcontrol.com/terms-and-conditions",
  },
};

export default function TermsAndConditions() {
  return (
    <div className="pt-40 pb-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <SectionHeading
          tag="[Legal]"
          title="Terms & Conditions"
          italicWord="Conditions"
          align="center"
          className="mb-16"
        />

        <div className="prose prose-lg text-gray-500 max-w-none">
          <p className="mb-8">Last updated: September 15, 2025</p>

          <h3 className="text-gray-900 font-bold text-xl mb-4">
            1. Agreement to Terms
          </h3>
          <p className="mb-8">
            These Terms and Conditions constitute a legally binding agreement
            made between you, whether personally or on behalf of an entity
            (&quot;you&quot;) and Nepal Pest Control (&quot;we,&quot;
            &quot;us&quot; or &quot;our&quot;), concerning your access to and
            use of our website as well as any other media form, media channel,
            mobile website or mobile application related, linked, or otherwise
            connected thereto (collectively, the &quot;Site&quot;).
          </p>

          <h3 className="text-gray-900 font-bold text-xl mb-4">
            2. Intellectual Property Rights
          </h3>
          <p className="mb-8">
            Unless otherwise indicated, the Site is our proprietary property and
            all source code, databases, functionality, software, website
            designs, audio, video, text, photographs, and graphics on the Site
            (collectively, the &quot;Content&quot;) and the trademarks, service
            marks, and logos contained therein (the &quot;Marks&quot;) are owned
            or controlled by us or licensed to us, and are protected by
            copyright and trademark laws.
          </p>

          <h3 className="text-gray-900 font-bold text-xl mb-4">
            3. User Representations
          </h3>
          <p className="mb-8">
            By using the Site, you represent and warrant that: (1) all
            registration information you submit will be true, accurate, current,
            and complete; (2) you will maintain the accuracy of such information
            and promptly update such registration information as necessary; (3)
            you have the legal capacity and you agree to comply with these Terms
            of Use; (4) you are not a minor in the jurisdiction in which you
            reside.
          </p>

          <h3 className="text-gray-900 font-bold text-xl mb-4">
            4. Prohibited Activities
          </h3>
          <p className="mb-8">
            You may not access or use the Site for any purpose other than that
            for which we make the Site available. The Site may not be used in
            connection with any commercial endeavors except those that are
            specifically endorsed or approved by us.
          </p>

          <h3 className="text-gray-900 font-bold text-xl mb-4">
            5. Modifications and Interruptions
          </h3>
          <p className="mb-8">
            We reserve the right to change, modify, or remove the contents of
            the Site at any time or for any reason at our sole discretion
            without notice. However, we have no obligation to update any
            information on our Site. We also reserve the right to modify or
            discontinue all or part of the Site without notice at any time.
          </p>

          <h3 className="text-gray-900 font-bold text-xl mb-4">
            6. Governing Law
          </h3>
          <p className="mb-8">
            These Terms shall be governed by and defined following the laws of
            United States. Nepal Pest Control and yourself irrevocably consent
            that the courts of United States shall have exclusive jurisdiction
            to resolve any dispute which may arise in connection with these
            terms.
          </p>

          <h3 className="text-gray-900 font-bold text-xl mb-4">
            7. Contact Us
          </h3>
          <p className="mb-8">
            In order to resolve a complaint regarding the Site or to receive
            further information regarding use of the Site, please contact us at:{" "}
            <a
              href="mailto:info@nepalpestcontrol.com"
              className="text-blue-600 hover:underline"
            >
              info@nepalpestcontrol.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
