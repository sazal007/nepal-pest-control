import { SectionHeading } from "@/components/ui/SectionHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Nepal Pest Control's Privacy Policy to understand how we collect, use, and protect your personal information. Learn about your privacy rights and our commitment to data security.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - Nepal Pest Control",
    description:
      "Read Nepal Pest Control's Privacy Policy to understand how we collect, use, and protect your personal information.",
    url: "https://www.nepalpestcontrol.com/privacy-policy",
    siteName: "Nepal Pest Control",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Nepal Pest Control",
    description: "Nepal Pest Control's Privacy Policy",
  },
  alternates: {
    canonical: "https://www.nepalpestcontrol.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-40 pb-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <SectionHeading
          tag="[Legal]"
          title="Privacy Policy"
          italicWord="Policy"
          align="center"
          className="mb-16"
        />

        <div className="prose prose-lg text-gray-500 max-w-none">
          <p className="mb-8">Last updated: September 15, 2025</p>

          <h3 className="text-gray-900 font-bold text-xl mb-4">
            1. Introduction
          </h3>
          <p className="mb-8">
            Welcome to Nepal Pest Control. We respect your privacy and are
            committed to protecting your personal data. This privacy policy will
            inform you as to how we look after your personal data when you visit
            our website (regardless of where you visit it from) and tell you
            about your privacy rights and how the law protects you.
          </p>

          <h3 className="text-gray-900 font-bold text-xl mb-4">
            2. The Data We Collect About You
          </h3>
          <p className="mb-4">
            Personal data, or personal information, means any information about
            an individual from which that person can be identified. It does not
            include data where the identity has been removed (anonymous data).
          </p>
          <p className="mb-8">
            We may collect, use, store and transfer different kinds of personal
            data about you which we have grouped together follows:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>
              <strong>Identity Data</strong> includes first name, maiden name,
              last name, username or similar identifier, marital status, title,
              date of birth and gender.
            </li>
            <li>
              <strong>Contact Data</strong> includes billing address, delivery
              address, email address and telephone numbers.
            </li>
            <li>
              <strong>Financial Data</strong> includes bank account and payment
              card details.
            </li>
            <li>
              <strong>Transaction Data</strong> includes details about payments
              to and from you and other details of products and services you
              have purchased from us.
            </li>
          </ul>

          <h3 className="text-gray-900 font-bold text-xl mb-4">
            3. How We Use Your Personal Data
          </h3>
          <p className="mb-8">
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>
              Where we need to perform the contract we are about to enter into
              or have entered into with you.
            </li>
            <li>
              Where it is necessary for our legitimate interests (or those of a
              third party) and your interests and fundamental rights do not
              override those interests.
            </li>
            <li>
              Where we need to comply with a legal or regulatory obligation.
            </li>
          </ul>

          <h3 className="text-gray-900 font-bold text-xl mb-4">
            4. Data Security
          </h3>
          <p className="mb-8">
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used or accessed in an
            unauthorized way, altered or disclosed. In addition, we limit access
            to your personal data to those employees, agents, contractors and
            other third parties who have a business need to know.
          </p>

          <h3 className="text-gray-900 font-bold text-xl mb-4">
            5. Your Legal Rights
          </h3>
          <p className="mb-8">
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data. You have the right to
            request access, correction, erasure, restriction, transfer, to
            object to processing, to portability of data and (where the lawful
            ground of processing is consent) to withdraw consent.
          </p>

          <h3 className="text-gray-900 font-bold text-xl mb-4">
            6. Contact Us
          </h3>
          <p className="mb-8">
            If you have any questions about this privacy policy or our privacy
            practices, please contact us at:{" "}
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
