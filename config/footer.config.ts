export const footerConfig = {
  logo: {
    src: "/logo/nepalpestcontrol.png",
    alt: "Nepal Pest Control Logo",
    width: 200,
    height: 70,
    className: "object-contain",
  },
  company: {
    name: "Nepal Pest Control",
    description:
      "With many years of experience and expertise, we have been recognized through the awards achieved, and we customize solutions to meet the specific needs of businesses of all sizes.",
  },
  sections: {
    services: {
      title: "Our Services",
      emptyMessage: "No services available",
    },
    contact: {
      title: "Contact Info",
      labels: {
        address: "Address:",
        email: "Email:",
        phone: "Phone:",
      },
    },
    newsletter: {
      title: "Newsletter",
      description:
        "Join our subscribers list to get latest news and special offers.",
      placeholder: "Enter your email",
      buttonText: "Subscribe",
    },
  },
  footerLinks: [
    {
      label: "Terms",
      href: "/terms-and-conditions",
    },
    {
      label: "Privacy",
      href: "/privacy-policy",
    },
    {
      label: "Support",
      href: "/contact",
    },
  ],
  copyright: {
    year: new Date().getFullYear(),
    text: "All rights reserved by",
  },
} as const;
