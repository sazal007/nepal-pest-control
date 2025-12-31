export type NavigationItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export const headerConfig = {
  logo: {
    src: "/logo/nepalpestcontrol.png",
    alt: "Nepal Pest Control Logo",
    desktop: {
      width: 150,
      height: 96,
      className: "h-24 w-auto",
    },
    mobile: {
      width: 200,
      height: 120,
      className: "h-14 w-auto",
    },
  },
  navigation: {
    items: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About Us",
        href: "/about",
      },
      {
        label: "Services",
        href: "/services",
        hasDropdown: true,
      },
      {
        label: "Blog",
        href: "/blog",
      },
      // {
      //   label: "Pricing",
      //   href: "/pricing",
      // },
    ] as NavigationItem[],
    contactButton: {
      label: "Contact Us",
      href: "/contact",
    },
    servicesDropdown: {
      viewAllLabel: "View All Services",
      viewAllHref: "/services",
    },
  },
} as const;
